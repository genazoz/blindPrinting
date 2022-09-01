import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {commonTheme} from "../../styles/themes";
import {
  resetState,
  setText,
  setTextArray,
  textSelector
} from "../../features/textSlice";
import {useAppDispatch} from "../../app/store";
import axios from "axios";

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 22px;

  background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 30px;
  border: unset;

  @media (max-width: ${commonTheme.media.tab}) {
    padding: 20px;

    border-radius: 25px;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
`
const Item = styled.div`
  overflow: hidden;
  min-height: 50px;
  padding: 17px 20px 0 20px;

  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, .3);
  color: ${(props: any) => props.theme.name === 'light' && `#FFF`};
  font-size: 14px;

  cursor: pointer;
  border-radius: 10px;
  background: rgba(255, 255, 255, .05);
`

export const TextList: FC = () => {
  const dispatch = useAppDispatch();
  const {textArray} = useSelector(textSelector);

  const changeText = (e: any) => {
    dispatch(resetState());
    dispatch(setText({text: e.target.innerHTML}));
  }

  useEffect(() => {
    if (textArray && textArray.length > 0) {
      return;
    }

    const start = async () => {
      const {data} = await axios.get('https://baconipsum.com/api/?paras=15&type=meat-and-filler&start-with-lorem=1');

      if (data) {
        dispatch(setTextArray({textArray: data}));
      }
    };

    start();
  }, [])

  return (
    <Container>
      {
        textArray &&
        textArray.map((text, index) =>
          <Item key={index} onClick={(e) => changeText(e)}>
            {text}
          </Item>
        )
      }
    </Container>
  );
};
