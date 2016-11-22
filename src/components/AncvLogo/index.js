import React from "react"

const AncvLogo = (props) => (
  <svg viewBox="0 0 841.9 595.3" {...props}>
    <path fill="#369" d="M68 517.4l-14 .4.2-2.7c0-4-1.5-7.5-6.6-7.5-11 0-18.3 18.3-18.3 30.2 0 8 4 12.6 12.2 12.6 6.4 0 14-2.8 19.3-6l-2.2 10.4c-5.5 3.3-13 5.7-20.4 5.7-6.6 0-12.5-1.8-16.4-5.3-4-3.6-6.3-9.3-6.3-16.6 0-19.5 12.8-41 33.4-41 10.5 0 19 5.4 19 17v3zM130.4 498.4l-13 61.2H104l5.4-25.3H87.6l-5.3 25.3H69l12.8-61.2h13.5l-5.5 25.3h21.8l5.4-25.3h13.4zM182.8 498.4l-2 9.4h-25.4l-3.5 16h20.8l-2 9.2H150l-3.7 17.2H174l-2 9.4h-41l13-61.2h38.8zm-11.6-4.8c-4-4-7.2-5.7-11.2-5.7-1.2 0-2.7.2-3.7.5-.5-1-.8-2.2-.8-3.3 0-3 2.2-5 5.2-5 5.5 0 9.4 4.7 12.5 10l-2 3.4zM206 560.3c-.8 1-1.3 2.4-1.3 3.5 0 2.2 2 3.4 4.5 3.4 4.2 0 9.6-2.5 13.6-5.3l-2 8.8c-4 3.2-10 6-16.5 6s-11.7-3.8-11.7-9.8c0-2.5 1-5.4 3-7.7-8.5-2.7-13.4-10-13.4-20 0-19.7 12-41.8 34.3-41.8 13 0 21 8.3 21 21.3 0 18.7-11 40-31.6 41.5zm9-52.8c-12.8 0-19 20.6-19 31.7 0 8 3.6 11.3 9 11.3 12.6 0 18.8-20.6 18.8-31.7 0-8-3.6-11.3-9-11.3zM300.3 498.4l-7.8 36.6c-1.8 8.3-4 13.6-8 18-4.7 4.7-11.7 7.4-20.6 7.4-11 0-20.5-4.7-20.5-16.7 0-2 .5-6 1.4-10l7.4-35.3h13.4l-8 38c-.5 2-.8 4.4-.8 6 0 5.4 3.7 7.7 8.6 7.7 3.8 0 7-1.4 9.2-3.8 2-2.2 3.3-5.6 4-9.2l8.2-38.6h13.3zM352.3 498.4l-2 9.4h-25.5l-3.4 16h20.8l-2 9.2h-20.8l-3.6 17.2h27.7l-2 9.4h-41l12.8-61.2h39zM378.3 531.3l-2 9.6H351l2-9.7h25.3zM439.8 498.4L406 559.6h-14l-6.3-61.2h14l3.5 39.4v2c0 2 0 3.8-.5 5.7.7-2.6 1.7-5.2 3-7.7l20-39.4h14zM481 559.6h-13.6l-1.6-12.4h-22.3l-6.2 12.4H424l28-51.8h-6.7l2-9.4H472l9 61.2zM464.8 538l-2.4-19.5c-.2-1.4-.4-3.5-.4-5v-3.8c-.7 2.6-2.4 6.5-3.7 9L448 538h16.7zM540.5 517.5l-14 .3c.2-.7.3-2 .3-2.7 0-4-1.5-7.5-6.5-7.5-11 0-18.4 18.4-18.4 30.2 0 8.2 4 12.6 12 12.6 6.5 0 14-2.8 19.4-6l-2.2 10.5c-5.4 3.2-13 5.7-20.4 5.7-6.6 0-12.5-2-16.3-5.4-4.2-3.6-6.4-9.3-6.4-16.6 0-19.5 13-41 33.5-41 10.6 0 19.2 5.5 19.2 17 0 .8 0 2.4-.2 3zM592.6 559.6h-13.8l-1.6-12.4H555l-6.3 12.4h-13.2l28-51.8h-6.8l2-9.4h24.8l9 61.2zM576 538l-2.3-19.5c-.2-1.4-.4-3.5-.4-5v-3.8c-.5 2.6-2.3 6.5-3.5 9L559.5 538H576zM659.3 498.4l-13 61.2h-7.7l-19-33.5c-1-1.7-2.3-4.6-2.7-6.6l-8.6 40.2h-11.2l13-61.2h8l19 34c1.4 2.2 2 4.4 2.5 6l8.5-40h11zM714 517.5l-14 .3.2-2.7c0-4-1.6-7.5-6.6-7.5-11 0-18.4 18.4-18.4 30.2 0 8.2 4 12.6 12.2 12.6 6.5 0 14-2.8 19.3-6l-2.2 10.5c-5.4 3.2-13 5.7-20.4 5.7-6.4 0-12.3-2-16.2-5.4-4.2-3.6-6.4-9.3-6.4-16.6 0-19.5 13-41 33.5-41 10.5 0 19 5.5 19 17v3zM766.7 498.4l-2 9.4h-25.4l-3.5 16h21l-2 9.2h-21l-3.6 17.2H758l-2 9.4h-41.2l13-61.2h39zM811.2 510c-4-2-9-3.2-14-3.2-7 0-12.3 3-12.3 8.2 0 4.2 4.4 6.2 9.6 8.5 8.2 3.6 15 7.5 15 16.7 0 15-13.5 20.3-26.7 20.3-6.3 0-13.7-1.7-19-4.5l2.2-10.4c4.4 3.4 11.5 5.5 17 5.5 7.4 0 12.7-3.3 12.7-8.5 0-4-4-5.7-9.5-8-9-3.7-15.3-7.8-15.3-17 0-12 11-20 26.3-20 5.5 0 12 1.4 15.6 3l-1.8 9.5zM505.8 419.4c-2.4 1.4-7 2.7-10 2.7-1.5 0-2.4-.2-2.8-.6-.4-.4-.7-1-.8-2.2 0-1.6.5-3.6 1.2-6.8L511 331l-.8-.7c-10.4-7.3-24-9.5-32.5-9.5-42 0-74.3 38.4-74.3 78 0 12.2 3.5 22.4 10 29.5 6.5 7 16 11 27.5 11 12.7 0 24.3-5.4 31.2-12.5.6 2.8 2 5.3 4.2 7.3 3 2.8 7.2 4.5 12.3 4.5h.3c5.7 0 11.8-2 16-4.4h.3l.3-.2 3.4-16.3-3.2 2zm-26.3-39.7l-.2.8V381.4c-3.3 14.4-7 25-12.7 31.3-5.5 6.6-12.7 10.4-22 10.4-6.4 0-11.2-2.2-14.5-6.3-3.3-4-5.2-10.4-5.2-18.6 0-15 6-30.6 15.6-42.2 9.7-11.7 22.8-19.4 37-19.4h.2c3.5 0 8 1 11 2.3l-9 41zM609.7 423c-1.5 0-2.5-.3-3-.7-.3-.4-.6-1-.7-2.2h-.3.3c0-1.5.5-3.5 1.2-6.7l8.7-40c2-9 3-15.6 3-21.8 0-10-4-18-10.3-23-6.4-5.2-15.2-7.7-25-7.7h-1c-3.8 0-15.5.4-27.7 6.2-12 5.6-24.5 16.6-29.5 37l-.2.8-.2 1-15.3 71.5h21l11-51c3.3-15 7-27.5 13.3-35.6 5.7-7.4 15-12.7 24.6-12.6 6 0 10.6 1.6 13.4 4 3.2 2.8 4.7 7 4.7 11.8 0 5-1 10-2.3 16.4l-9 40.8c-.6 3.5-1.5 8.6-1.5 12.3-.2 5.6 2 9.8 5.5 12.4 3.4 2.6 7.8 3.7 12 3.7 6.2 0 12.3-2 16-4.4h.4l.2-.3 3-16.3-3 2c-2.5 1.3-6.7 2.7-9.5 2.6zM657.6 358c7.4-12.2 18-21 31.6-21 5.8 0 9.4 1.6 11.8 4.5 1.6 2 2.6 4.6 3.2 7.8l19.8-4c-1.3-6.6-4.3-12-8.6-16-6-5.7-14.5-8.5-24.6-8.5-20.2 0-36.7 10-48 24.8-11.5 14.7-17.8 34-17.8 52.3 0-.2 0-.2 0 0 0 13.5 4.4 24 12.2 31 7.8 7 18.8 10.4 32 10.4 12.5 0 26-3.5 36.8-10.6l.2-.2.3-.2 4-19-3.4 2.2c-9.5 6.3-23.5 11.5-35 11.4-8.7 0-15-2.3-19-6.5-4.3-4.3-6.6-10.7-6.6-19.3h-.2.2c0-11.8 4-27 11.2-39.2zM804.5 323.3l-41 73c-2.2 4-5 9-7.2 13.5-.2-4-.7-8.3-1.3-12.6l-9-74.3H724l17 114.4h19L826.5 323h-21.7l-.2.3z" />
    <path fill="#c33" d="M468.4 191c-4.2.2-16-.6-32.2-20.3C420 151 381.4 83.3 361 68c-20.6-15.4-73-43-281-42.8 0 0 1.8 8.7 24 14.4 22 5.7 236 39.6 272.4 186.4 0 0 2.8 8.4-7.3 13-8.4 3.7-72.5 31.3-86.4 46 0 0-1.4 1.2.6 3.7s3.8 2.8 6.3 2.4c2.4-.4 26.7-4.7 57.5-5.5 30.7-.8 40.2 3.7 99 2.2 58.8-1.6 98.2-39 126.5-60.6 8.5-6.4 39.7-2.7 39.7-2.7s-9.4-7.7-28.6-11c-6.6-1-11.6-5.8-11.6-5.8s-19.3-18-57-13.5c0 0 68.6-103 226.7-125.5 0 0-161.6-11.8-263.6 117.2 0 0-3.8 5.2-9.6 5.4z" />
  </svg>
)

export default AncvLogo