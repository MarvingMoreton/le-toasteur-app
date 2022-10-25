import { PrismicImage, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from '@prismicio/react'


const CustomImageH = ({ src, alt, className, position, description }) => {
  return (
    <div className={classes["employee-card"]}>
      <div className={classes["image-box"]}>
        {/* IMAGE */}
        <PrismicImage src={src} alt={alt}>
          </PrismicImage>

      </div>
      <div className={classes["employee-text-box"]}>
        {/* <h4>John Doe</h4> */}
        {/* NAME */}
        <PrismicRichText field={field}></PrismicRichText>

        <span className={classes.position}>({position})</span>


        {/* DESCRIPTION */}
        <PrismicRichText field={description} />
      </div>
  </div>

  )




}

export default CustomImageH
