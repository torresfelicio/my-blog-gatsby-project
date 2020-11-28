require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'my-blog-gatsby-project',
        accessToken: 'MC5YOEt4N2hJQUFDWUFnMllr.77-977-977-977-9TC7vv73vv70iVmwr77-9eO-_vRLvv73vv73vv71WZe-_vXdf77-9Qe-_ve-_ve-_ve-_vSfvv70',
        releaseID: 'example-eiyaingiefahyi7z',
        linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
        schemas: {
          post: require('./src/schemas/post.json'),
        },
        lang: '*',
        prismicToolbar: true,
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
        },
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
        typePathsFilenamePrefix:
          'prismic-typepaths---your-repo-name',
      },
    },
  ],
}
