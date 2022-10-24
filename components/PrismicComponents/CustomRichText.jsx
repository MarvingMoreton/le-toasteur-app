import { PrismicRichText } from '@prismicio/react'
import React from 'react';

const CustomRichText = ({ field, className }) => {
  return (
    field && (
      <div className={className}>
        <PrismicRichText field={field} />
        </div>
    )
  )
}

export default CustomRichText;
