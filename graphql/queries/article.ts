// graphql/queries/article.ts
export const ARTICLES_QUERY = /* GraphQL */ `
  query Articles($sort: [String!] = ["createdAt:desc"], $limit: Int = 10) {
    articles(sort: $sort, pagination: { limit: $limit }) {
      documentId
      title
      slug
      content
      createdAt
      __typename
    }
  }
`;
