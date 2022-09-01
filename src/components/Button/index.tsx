import React, {FC} from 'react';
import styled from "styled-components";

import {commonTheme} from "../../styles/themes";

const ButtonEl = styled.button<{ isDisabled: boolean, isEdit?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;

  font-family: ${commonTheme.fonts.Inter};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .3px;
  color: ${props => props.theme.THEME_BUTTON_COLOR_A};

  border-radius: 50px;
  border: 1px solid transparent;
  cursor: pointer;
  background: ${props => props.theme.THEME_BUTTON_BACKGROUND_A};

  &:hover {
    border: 1px solid ${props => props.theme.THEME_BUTTON_BACKGROUND_A};
    color: ${props => props.theme.THEME_BUTTON_BACKGROUND_A};
    background-color: transparent;
  }

  i {
    margin: 1px 0 0 0;

    font-size: 15px;
  }

  ${(props) => props.isDisabled && `
    pointer-events: none;
    background: transparent;
    border: 1px solid ${props.theme.SECONDARY_BACKGROUND_COLOR};
    color: ${props.theme.SECONDARY_BACKGROUND_COLOR};
  `}

  ${(props) => props.isEdit && !props.isDisabled && `
    background: ${props.theme.SUCCESS_TODO_COLOR};
    color: #FFFFFF;
  
    &:hover {
      border: 1px solid ${props.theme.SUCCESS_TODO_COLOR};
      color: ${props.theme.SUCCESS_TODO_COLOR};
      background-color: transparent;
    }
  `}
`

type ButtonPropsType = {
  children: React.ReactNode;
  isDisabled?: boolean;
  isEdit?: boolean;
  onClick?: (e: any) => void;
}

export const Button: FC<ButtonPropsType> = ({children, isDisabled = false, isEdit = false, onClick}) => {
  return (
    <ButtonEl isDisabled={isDisabled} isEdit={isEdit} {...(onClick ? {onClick: (e) => onClick(e)} : {})} >
      {children}
    </ButtonEl>
  );
};