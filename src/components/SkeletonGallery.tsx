import React from "react"
import ContentLoader from "react-content-loader"

export const SkeletonMobile = () => (
  <ContentLoader 
    rtl
    speed={2}
    width={155}
    height={146}
    viewBox="0 0 155 146"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="155" height="146" />
  </ContentLoader>
)

export const SkeletonDesktop = () => (
  <ContentLoader 
    speed={2}
    width={195}
    height={206}
    viewBox="0 0 195 206"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="25" ry="25" width="195" height="206" />
  </ContentLoader>
)

export const SkeletonArtDesktop = () => (
  <ContentLoader 
    speed={2}
    width={825}
    height={780}
    viewBox="0 0 825 780"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="25" ry="25" width="825" height="780" />
  </ContentLoader>
)




