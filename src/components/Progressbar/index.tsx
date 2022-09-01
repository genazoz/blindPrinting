import React, {FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {textSelector} from "../../features/textSlice";
import {commonTheme} from "../../styles/themes";

const Progress = styled.div<{ width: number }>`
  position: relative;

  overflow: hidden;
  flex-shrink: 0;
  width: 17px;
  height: 100%;
  margin: 0 50px 30px 0;

  border-radius: 50px;
  background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};

  &::before {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    ${props => props.width && `
      height: ${props.width}%;
    `}
    width: 100%;

    border-radius: 50px;
    background: ${(props: any) => props.theme.CORRECT_SYMBOLS};

    transition: 1s width, 1s height;

    @media (max-width: ${commonTheme.media.tab}) {
      height: 100%;
      ${props => props.width && `
        width: ${props.width}%;
      `}
    }
  }

  @media (max-width: ${commonTheme.media.tab}) {
    width: 100%;
    height: 11px;
  }
`

export const Progressbar: FC = () => {
  const {text, currentSymbol} = useSelector(textSelector);

  return ( <Progress width={!currentSymbol ? 0 : currentSymbol / text.length * 100}></Progress> )
};
