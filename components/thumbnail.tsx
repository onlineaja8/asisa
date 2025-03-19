"use client"

import Image from "next/image"
import { useState } from "react"

const ImageLoader = ({ src, width, quality }: any) => {
  return `https://wsrv.nl/?url=${src}&w=320&q=${quality || 80}&fit=cover&output=webp`
}

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="play-circle"
    className="svg-inline--fa fa-play-circle fa-w-16 w-12 h-12 md:w-16 md:h-16"
    role="img"
    viewBox="0 0 512 512"
  >
    <g className="fa-group">
      <path
        className="fa-secondary"
        fill="#000000"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
        opacity="0.4"
      />
      <path
        className="fa-primary"
        fill="#ffffff"
        d="M371.7 280l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
      />
    </g>
  </svg>
)

const Thumbnail = ({
  single_img,
  splash_img,
  title,
}: {
  single_img: string
  splash_img: string
  title: string
}) => {
  const [imageIndex, setImageIndex] = useState(0)
  const image = [single_img, splash_img, "https://iili.io/J5ahFSa.png"]

  const handleImageError = () => {
    if (imageIndex === image.length - 1) return
    setImageIndex(imageIndex + 1)
  }

  return (
    <div className="relative">
      <Image
        className="!w-full !h-[200px] md:!h-[250px] lg:!h-[300px] object-cover rounded-none md:rounded-t-md"
        alt={title}
        src={image[imageIndex] || "/placeholder.svg"}
        loader={ImageLoader}
        width={320}
        height={400}
        quality={100}
        onError={handleImageError}
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayButton />
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  )
}

export default Thumbnail

