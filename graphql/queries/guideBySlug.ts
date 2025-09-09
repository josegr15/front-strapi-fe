export const GUIDE_BY_SLUG_QUERY = `
  query GuideBySlug($slug: String!) {
   guidePages(filters:{slug:{eq:$slug}}){
     documentId
     description
     publishedDate
     slug
     summary
     title
     guide_chapters {
      chapterName
      content
      title
     }
     components {
      ... on ComponentComponentsUiGuideDetails {
        Title
        __typename
      }
     }
  }
  }
`;
