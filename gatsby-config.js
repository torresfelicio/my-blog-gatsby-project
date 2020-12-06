require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPOSITORY_NAME}`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
        schemas: {
          post: require('./src/schemas/post.json'),
        },
      },
    },
  ],
}
