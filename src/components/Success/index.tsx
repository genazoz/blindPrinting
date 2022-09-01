import React, {FC} from 'react';
import styled from "styled-components";

import {commonTheme} from "../../styles/themes";
import {EditorInfoblocks} from "../EditorInfoblocks";

const SuccessEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    gap: 15px;
    padding: 20px;

    font-size: 25px;
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
const Title = styled.h1`
  margin: 0 0 20px 0;
  font-size: 50px;
  font-weight: 600;

  @media (max-width: ${commonTheme.media.tab}) {
    margin: 0;
    
    font-size: 32px;
    line-height: 110%;
    text-align: center;
  }
`
const Text = styled.span`
  color: #CCC;

  @media (max-width: ${commonTheme.media.tab}) {
    width: 70%;
    
    font-size: 14px;
    line-height: 140%;
    text-align: center;
  }
`

export const Success: FC = () => {
  return (
    <SuccessEl>
      <Wrapper>
        <Title>Вы прошли тестирование!</Title>
        <Text>Вы завершили тестирование с показателями:</Text>
      </Wrapper>
      <EditorInfoblocks/>
    </SuccessEl>
  )
};
