import React from 'react';
import { ArticleContentProps } from './ArticleContent.types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const ArticleContent = ({ content }: ArticleContentProps) => {
  return <BlocksRenderer content={content} />;
};
