export const ARTICLE_BY_ID_QUERY = /* GraphQL */ `
  query ArticleById($id: ID!) {
    article(documentId: $id) {
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
