import React from 'react';
import { ArticleHeaderProps } from './ArticleHeader.types';

export const ArticleHeader = ({ title }: ArticleHeaderProps) => {
  return <div className="text-2xl font-bold">{title}</div>;
};
