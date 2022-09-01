import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {commonTheme} from "../styles/themes";

const Section = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  height: max-content;
  margin: auto;
  padding: 60px var(--unit);
`
const Title = styled.h1`
  margin: 0 0 15px 0;

  font-size: 120px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;

  @media (max-width: ${commonTheme.media.tab}) {
    font-size: 60px;
  }
`
const Button = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 12px 20px;
  
  font-family: ${commonTheme.fonts.Inter};
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.THEME_BUTTON_COLOR_A};
  
  border-radius: 13px;
  cursor: pointer;
  background: ${props => props.theme.THEME_BUTTON_BACKGROUND_A};
  
  i {
    margin: 0 0 0 10px;

    font-size: 14px;
  }
`

function NotFound() {
  return (
    <Section>
      <Title>404 :(</Title>
      <Button as={Link} to={'/'}>
        К тренажёру
        <i className="far fa-arrow-right" aria-hidden="true"></i>
      </Button>
    </Section>
  );
}

export default NotFound;