import React, {FC, useRef} from 'react';
import styled from "styled-components";

import {commonTheme} from "../../styles/themes";

const SidebarEl = styled.div`
  position: relative;

  display: flex;
  width: 300px;
  min-width: 300px;
  max-width: 450px;
  height: 100%;
  padding: 30px 40px 60px 0;

  cursor: auto;

  @media (max-width: ${commonTheme.media.tab}) {
    width: 100% !important; 
    max-width: unset;
    min-width: unset;
    height: auto;
    padding: 0;
  }
`
const Divider = styled.div<{ isResizing: boolean }>`
  position: absolute;
  z-index: 2;
  top: 0;
  right: -38px;

  display: flex;
  width: 76px;
  height: 100%;
  cursor: col-resize;

  opacity: .5;
  
  transition: .3s right;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 7px;
    height: 30px;
    margin: auto;

    background: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
    border-radius: 10px;
  }

  @media (max-width: ${commonTheme.media.tab}) {
    display: none;
  }

  ${(props) => props.isResizing && `
    right: -49px;
  `}
`

type SidebarPropsType = {
  children: React.ReactNode;
  setIsResizing?: (param: boolean) => void;
  isResizing?: boolean;
  resizable?: boolean;
}

export const Sidebar: FC<SidebarPropsType> = ({children, setIsResizing, isResizing = false, resizable = false}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const drag = (event: any) => {
    const sidebar = sidebarRef.current;

    if (!sidebar)
      return;

    const mouseX = event.clientX;
    const sidebarLeft = sidebar.getBoundingClientRect().left;
    sidebar.style.width = `${mouseX - sidebarLeft}px`;
  };
  const endDrag = () => {
    if(!setIsResizing)
      return 0;

    setIsResizing(false);
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
  };
  const onMouseDownDivider = (e: any) => {
    e.preventDefault();

    if(!setIsResizing)
      return 0;

    setIsResizing(true);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
  }

  return (
    <>
      {
        resizable
          ? (
            <SidebarEl ref={sidebarRef} onMouseDown={(e) => e.stopPropagation()}>
              {children}
              <Divider isResizing={isResizing} ref={dividerRef} onMouseDown={(e) => onMouseDownDivider(e)}/>
            </SidebarEl>
          )
          : (
            <SidebarEl>
              {children}
            </SidebarEl>
          )
      }
    </>
  );
};
