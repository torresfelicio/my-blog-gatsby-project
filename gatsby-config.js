
module.exports = {
  siteMetadata:{
    title: 'Torres Felício',
    author: 'torresfelicio'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxwidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
