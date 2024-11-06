const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost", "backend", "minio"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
