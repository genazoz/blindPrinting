import React, {FC} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {commonTheme, darkTheme, lightTheme} from '../../styles/themes';
import {setTheme, themeSelector} from '../../features/themeSlice';

const themes = [
  darkTheme,
  lightTheme,
]

const StyledButton = styled.button`
  position: fixed;
  z-index: 3;
  right: 40px;
  bottom: 30px;

  width: 50px;
  height: 50px;
  padding: 1px 0 0 0;

  font-size: 24px;
  color: ${props => props.theme.THEME_SWITCHER_COLOR};

  cursor: pointer;
  border: 0px;
  border-radius: 50%;
  background: ${props => props.theme.THEME_SWITCHER_BACKGROUND};
  box-shadow: none;

  @media (max-width: ${commonTheme.media.tab}) {
    right: var(--unit);
    bottom: var(--unit);
  }
`;

export const ThemeSwitch: FC = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(themeSelector);

  const onClickToggleTheme = () => {
    const currentThemeNum = themes.findIndex(x => x.name === theme.name);
    const newTheme = currentThemeNum === themes.length - 1  ? themes[0] : themes[currentThemeNum + 1]
    dispatch(setTheme(newTheme));
  }

  return <StyledButton onClick={() => onClickToggleTheme()}>
    {theme.name === 'dark' ? (<i className="fa fa-sun"></i>) : (<i className="fa fa-moon"></i>)}
  </StyledButton>
}
