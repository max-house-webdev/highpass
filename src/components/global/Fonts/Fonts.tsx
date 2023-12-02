import { Global } from "@emotion/react";

export function Fonts() {
  const path = "./fonts/";
  return (
    <Global
      styles={`
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('${path}roboto-v27-latin_cyrillic-regular.woff2') 
      format ('woff2'), 
      url('${path}roboto-v27-latin_cyrillic-regular.woff') 
      format('woff');
    }

    @font-face {
      font-family: 'TT Firs Neue';
      font-style: regular;
      font-weight: 400;
      font-display: swap;
      src: url('${path}TTFirsNeueRegular.woff2') 
      format ('woff2'), 
      url('${path}TTFirsNeueRegular.woff') 
      format('woff');
    }

    @font-face {
      font-family: 'TT Firs Neue';
      font-style: bold;
      font-weight: 600;
      font-display: swap;
      src: url('${path}TTFirsNeueBold.woff2') 
      format ('woff2'), 
      url('${path}TTFirsNeueBold.woff') 
      format('woff');
    }
    `}
    />
  );
}
