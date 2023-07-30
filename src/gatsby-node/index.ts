"use strcit"
import path from "path"

import { CreatePagesArgs, Node, NodePluginArgs } from "gatsby"

// import "./src/__generated__/gatsby-types"

import { paginate } from "gatsby-awesome-pagination"
import { createFilePath } from "gatsby-source-filesystem"

declare type CreatePagesProps = {
  graphql: CreatePagesArgs["graphql"]
  actions: NodePluginArgs["actions"]
  reporter: NodePluginArgs["reporter"]
}

declare type CreatePagesGetDataResult = {
  errors?: any
  data?: GatsbyTypes.Query
}

declare type PostsDataForPagenation =
  | readonly GatsbyTypes.MarkdownRemark[]
  | undefined

declare type OnCreateNodeProps = {
  node: Node
  actions: NodePluginArgs["actions"]
  getNode: NodePluginArgs["getNode"]
}

declare type CreateSchemaCustomization = {
  actions: NodePluginArgs["actions"]
}

const createPages = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesProps): Promise<void> => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const blogList = path.resolve(`src/templates/index.tsx`)

  // For Pagination
  const buildPagination = (posts: PostsDataForPagenation) => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 5,
      // 2ページ目以降はURLに"/blog"が付与されるよう設定
      pathPrefix: ({ pageNumber }: { pageNumber: number }) =>
        pageNumber === 0 ? "/" : "/blog",
      component: blogList,
    })
  }

  // Get all markdown blog posts sorted by date
  const result: CreatePagesGetDataResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    )
    return
  }
  //<GatsbyTypes.Query["allMarkdownRemark"]>
  const posts = result.data?.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPost = posts[index - 1]
      const nextPost = posts[index + 1]
      const previousPostId =
        index === 0 || !previousPost ? null : previousPost.id
      const nextPostId =
        index === posts.length - 1 || !nextPost ? null : nextPost.id

      createPage({
        path: post.fields?.slug || "",
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // exec buildPagination
  buildPagination(posts)
}

const onCreateNode = ({ node, actions, getNode }: OnCreateNodeProps): void => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomization): void => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
      subOutput: SubOutput
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type SubOutput {
      ywt: String
      todoList: String
      rcp: String
      rod: String
      designrssbot: String
      sshkeygen: String
      everydaywise: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

export { createPages, onCreateNode, createSchemaCustomization }
