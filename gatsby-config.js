
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
    'gatsby-transformer-remark',
  ],
}
