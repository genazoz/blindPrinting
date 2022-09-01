import React, {FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {commonTheme} from "../../styles/themes";
import {textSelector} from "../../features/textSlice";
import {Progressbar} from "../Progressbar";

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: ${commonTheme.media.tab}) {
    flex-direction: column;
  }
`
const TextBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px 68px;

  font-family: ${commonTheme.fonts.Inter};
  font-size: 22px;
  color: #FFFFFF;
  line-height: 37px;

  cursor: default;
  background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 40px;

  @media (max-width: ${commonTheme.media.tab}) {
    overflow: auto;
    gap: 15px;
    padding: 20px;
    height: max-content;

    font-size: 15px;
    line-height: 27px;
    font-weight: 500;

    background-color: ${(props: any) => props.theme.TERTIARY_BACKGROUND_COLOR};
    resize: none;
    border-radius: 18px;

    &::placeholder {
      color: ${(props: any) => props.theme.QUATERNARY_BACKGROUND_COLOR};
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
const CorrectSymbols = styled.span<{ isNotEditing: boolean }>`
  font-weight: 600;
  color: ${(props: any) => props.theme.CORRECT_SYMBOLS};
  ${props => props.isNotEditing && `
    color: ${props.theme.SYMBOLS_NOT_EDIT};
  `}
`
const CurrentSymbol = styled.span<{ isWrong: boolean, isNotEditing: boolean }>`
  padding: 0 2px;

  border-radius: 5px;
  background: ${(props: any) => props.theme.CORRECT_SYMBOLS};

  ${props => props.isWrong && `
    background: ${props.theme.WRONG_SYMBOLS};
  `}
  ${props => props.isNotEditing && `
    padding: 0;
  
    color: ${props.theme.SYMBOLS};
  
    background: transparent;
  `}
`
const Symbols = styled.span`
  color: ${(props: any) => props.theme.SYMBOLS};
`

interface EditorTextProps {
  currentRef: any,
}

export const EditorText: FC<EditorTextProps> = ({currentRef}) => {
  const {text, currentSymbol, wrongSymbol, isEditing} = useSelector(textSelector);

  return (
    <Wrapper>
      <Progressbar/>
      <TextBlock>
        <CorrectSymbols isNotEditing={!isEditing}>
          {currentSymbol > 0 && text.slice(0, currentSymbol)}
        </CorrectSymbols>
        <CurrentSymbol ref={currentRef} isWrong={wrongSymbol === currentSymbol} isNotEditing={!isEditing}>
          {text.slice(currentSymbol, currentSymbol + 1)}
        </CurrentSymbol>
        <Symbols>
          {text.slice(currentSymbol + 1)}
        </Symbols>
      </TextBlock>
    </Wrapper>
  )
};
