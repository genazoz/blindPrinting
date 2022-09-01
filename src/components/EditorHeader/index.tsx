import React, {FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {textSelector} from "../../features/textSlice";
import {commonTheme} from "../../styles/themes";
import {Button} from "../Button";
import avatarSrc from "../../images/avatar.jpeg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 30px 0;

  @media (max-width: ${commonTheme.media.tab}) {
    align-items: flex-end;
    padding: 0 0 20px 0;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;

  @media (max-width: ${commonTheme.media.tab}) {
    font-size: 29px;
  }
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px`
const BellButton = styled.button`
  width: 45px;
  height: 45px;

  border-radius: 50%;
  border: 1.5px solid ${props => props.theme.SECONDARY_BACKGROUND_COLOR};

  pointer-events: none;

  i {
    font-size: 19px;
    color: #EEEEEE;
  }

  @media (max-width: ${commonTheme.media.tab}) {
    display: none;
  }
`
const Avatar = styled.div`
  width: 45px;
  height: 45px;

  border-radius: 50%;

  background-image: url(${avatarSrc});
  background-size: cover;

  @media (max-width: ${commonTheme.media.tab}) {
    display: none;
  }
`

interface EditorHeaderProps {
  onClickStart: () => void,
}

export const EditorHeader: FC<EditorHeaderProps> = ({onClickStart}) => {
  const {isEditing, currentSymbol, text} = useSelector(textSelector);

  return (
    <Header>
      <TitleWrapper>
        {
          currentSymbol !== text.length
          && (
            <Button onClick={onClickStart}>
              {!isEditing
                ? <i className="fa fa-play" aria-hidden="true"></i>
                : <i className="fa fa-pause" aria-hidden="true"></i>
              }
            </Button>
          )
        }
        <Title>Тренажёр печати</Title>
      </TitleWrapper>
      <Buttons>
        <BellButton>
          <i className="fal fa-bell" aria-hidden="true"></i>
        </BellButton>
        <Avatar/>
      </Buttons>
    </Header>
  );
};
