import React, {FC} from 'react';
import styled from "styled-components";

import {commonTheme} from "../../styles/themes";

const InfoblockEl = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 30px 40px 30px;

  cursor: default;
  border-radius: 40px;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background: ${(props: any) => props.theme.name === 'light'
  && `
      ${props.theme.SECONDARY_BACKGROUND_COLOR} !important;
      opacity: 1 !important;
    `};
    opacity: .2;
    border-radius: 40px;
  }

  @media (max-width: ${commonTheme.media.tab}) {
    gap: 20px;
  }
  
  &:nth-child(1) {
    color: ${(props: any) => props.theme.CORRECT_SYMBOLS};

    @media (max-width: ${commonTheme.media.tab}) {
      width: 100%;
    }
    
    &::before {
      background: ${(props: any) => props.theme.CORRECT_SYMBOLS};
    }

    i::after {
      background: ${(props: any) => props.theme.CORRECT_SYMBOLS};
    }
  }

  &:nth-child(2) {
    color: ${(props: any) => props.theme.LINK_COLOR_A};

    @media (max-width: ${commonTheme.media.tab}) {
      width: calc(50% - 25px);
    }
    @media (max-width: ${commonTheme.media.mob}) {
      width: 100%;
    }
    
    &::before {
      background: ${(props: any) => props.theme.LINK_COLOR_A};
    }

    i::after {
      background: ${(props: any) => props.theme.LINK_COLOR_A};
    }
  }

  &:nth-child(3) {
    color: ${(props: any) => props.theme.PROGRESS_TODO_COLOR2};

    @media (max-width: ${commonTheme.media.tab}) {
      width: calc(50% - 25px);
    }
    @media (max-width: ${commonTheme.media.mob}) {
      width: 100%;
    }
    
    &::before {
      background: ${(props: any) => props.theme.PROGRESS_TODO_COLOR2};
    }

    i::after {
      background: ${(props: any) => props.theme.PROGRESS_TODO_COLOR2};
    }
  }

  i {
    position: relative;
    z-index: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin: 0 0 20px 0;

    font-size: 22px;

    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      width: 100%;
      height: 100%;

      opacity: .2;
      border-radius: 15px;
    }
  }

  span {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    line-height: 50px;

    span {
      font-size: 35px;
      line-height: 95%;
      color: #AAA;
      color: ${(props: any) => props.theme.name === 'light' && `#FFF`};
    }
  }
`
const Title = styled.span`
  display: flex;
  margin: auto 0 10px 0;

  font-size: 12px;
  font-weight: 500;
  line-height: 100% !important;
  color: #BBB;
  text-transform: uppercase;
`
const Text = styled.span`
  display: flex;

  font-size: 60px;
  font-weight: 600;
  color: #FFFFFF;
`

interface InfoblockProps {
  icon: string,
  title: string,
  value: JSX.Element,
}

export const Infoblock: FC<InfoblockProps> = ({icon, title, value}) => {
  return (
    <InfoblockEl>
      <i className={icon}></i>
      <Title>{title}</Title>
      <Text>{value}</Text>
    </InfoblockEl>
  );
};