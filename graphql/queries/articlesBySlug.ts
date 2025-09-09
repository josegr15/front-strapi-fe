export const ARTICLES_BY_SLUG_QUERY = `
  query ArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }, pagination: { pageSize: 1 }) {
      documentId
      title
      slug
      content
      createdAt
      Image {
        url
        alternativeText
      }
      __typename
      components {
        ... on ComponentComponentsUiArticleHeader {
          Title
          __typename
        }
        ... on ComponentComponentsUiArticleContent {
          content
          __typename
        }
      }
    }
  }
`;
