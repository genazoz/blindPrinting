import React, {FC, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {useSelector} from "react-redux";

import {EditorHeader, EditorInfoblocks, EditorText, Success} from "../";
import {useAppDispatch} from "../../app/store";
import {
  incrementCurrentSymbol,
  incrementTaps,
  incrementTimer,
  setAccuracy,
  setIsEditing,
  setSpeed,
  setText,
  setWrongSymbol,
  textSelector
} from "../../features/textSlice";

const EditorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;
`

const Editor: FC = () => {
  const dispatch = useAppDispatch();
  const {currentSymbol, taps, isEditing, text, timer} = useSelector(textSelector);
  const symbolRef = useRef<HTMLElement>()

  const onKeydown = (e: any) => {
    e.preventDefault();

    if (!isEditing)
      return;

    if (e.key === 'Shift')
      return;

    if (e.key === symbolRef.current?.innerHTML) {
      dispatch(incrementCurrentSymbol());
    } else {
      dispatch(setWrongSymbol());
    }

    dispatch(incrementTaps());
  }

  const onClickStart = async () => {
    dispatch(setIsEditing({isEditing: !isEditing}))
    let timerID;

    if (typeof timerID !== 'undefined') {
      clearInterval(timerID);
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  useEffect(() => {
    if (text && currentSymbol === text.length) {
      dispatch(setIsEditing({isEditing: false}))
    }
    if (currentSymbol) {
      const accuracy: number = Math.round(currentSymbol / taps * 100);
      dispatch(setAccuracy({accuracy: accuracy}));
    }
  }, [taps])

  useEffect(() => {
    if (currentSymbol) {
      dispatch(setSpeed({speed: currentSymbol / timer * 60}));
    }
  }, [timer])

  useEffect(() => {
    let timerID: any = null;

    if (isEditing) {
      document.addEventListener('keydown', onKeydown);
      timerID = setInterval(() =>
        dispatch(incrementTimer()), 1000);
    }

    return () => {
      document.removeEventListener('keydown', onKeydown);

      if (typeof timerID !== 'undefined')
        clearInterval(timerID);
    }
  }, [isEditing])

  useEffect(() => {
    if (text) return;

    const start = async () => {
      const {data} = await axios.get('https://baconipsum.com/api/?paras=1&type=meat-and-filler&start-with-lorem=1');

      if (data) {
        dispatch(setText({text: data[0]}));
      }
    };

    start();
  }, [])

  return (
    <>
      <EditorHeader onClickStart={onClickStart}/>
      {
        text && currentSymbol === text.length
          ? <Success></Success>
          : <EditorContent>
            <EditorInfoblocks/>
            <EditorText currentRef={symbolRef}/>
          </EditorContent>
      }
    </>
  );
};

export default Editor;