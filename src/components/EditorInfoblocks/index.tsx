import React, {FC} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {textSelector} from "../../features/textSlice";
import {commonTheme} from "../../styles/themes";
import {Infoblock} from "../Infoblock";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 50px;
  width: 100%;
  height: max-content;

  @media (max-width: ${commonTheme.media.tab}) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: ${commonTheme.media.mob}) {
    gap: 25px;
  }

`

export const EditorInfoblocks: FC = () => {
  const {speed, accuracy, currentSymbol, text} = useSelector(textSelector);

  return (
    <Container>
      <Infoblock icon={'fal fa-tachometer-fast'} title={'Скорость набора'}
                 value={<>{speed ? speed.toFixed() : 0} <span>зн/мин</span></>}></Infoblock>
      <Infoblock icon={'fal fa-crosshairs'} title={'Точность'} value={<>{accuracy || 0}<span>%</span></>}></Infoblock>
      <Infoblock icon={'fal fa-clipboard-list-check'} title={'Прогресс'}
                 value={<>{!currentSymbol ? 0 : (currentSymbol / text.length * 100).toFixed()}
                   <span>%</span></>}></Infoblock>
    </Container>
  );
};
