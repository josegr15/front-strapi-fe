import { Image } from '../types/Image';

export const mapImage = (image: Image) => {
  return {
    url: `${process.env.STRAPI_URL}${image.url}`,
    alternativeText: image.alternativeText,
  };
};
