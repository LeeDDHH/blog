declare type PaginateProps = {
  createPage: NodePluginArgs["actions"]
  items: posts
  itemsPerPage: 5
  pathPrefix: "/" | "/blog"
  component: blogList
}

declare module "gatsby-awesome-pagination" {
  const paginate: (PaginateProps) => void
}

declare type GatsbyAwesomePaginationPageContext = {
  previousPagePath: string
  nextPagePath: string
}
