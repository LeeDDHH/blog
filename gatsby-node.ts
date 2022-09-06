"use strict"

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
})

// require("./src/__generated__/gatsby-types")

import {
  createPages,
  onCreateNode,
  createSchemaCustomization,
} from "./src/gatsby-node/index"

exports.createPages = createPages
exports.onCreateNode = onCreateNode
exports.createSchemaCustomization = createSchemaCustomization
