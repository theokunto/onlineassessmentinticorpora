import {Global} from '@emotion/react'

const Fonts = () =>(
    <Global styles={`
    @font-face {
        font-family: "M PLUS Rounded 1c";
        src: url("/fonts/MPLUSRounded1c-Bold.ttf");
        font-style: bold;
        font-weight: 700;
        font-display: swap;
      };
    @font-face {
        font-family: "M PLUS Rounded 1c";
        src: url("/fonts/MPLUSRounded1c-Light.ttf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
      };
    `}/>
)

export default Fonts