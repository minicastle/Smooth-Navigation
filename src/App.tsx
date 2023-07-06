import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import TargetIcon from "./TargetIcon.jsx";
const Container = styled.nav<{ TextColor: string; BaseColor: string }>`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.BaseColor};
  color: TextColor;
  font-size: 30px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
`;
const HeaderContainer = styled.header<{ MainColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  color: ${(props) => props.MainColor};
`;
const HeaderImage = styled.img`
  height: 100%;
  max-height: 80px;
`;
const HeaderText = styled.span`
  margin-left: 7px;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
`;
const NavItem = styled.li<{ MainColor: string }>`
  min-width: 150px;
  max-width: 150px;
  height: fit-content;
  text-align: center;
  user-select: none;
  color: ${(props) => props.MainColor};
  :hover {
    scale: 1.1;
  }
  :active {
    color: ${(props) => props.MainColor};
  }
  word-break: keep-all;
`;
const NavBottomBar = styled.div<{ MainColor: string }>`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0px;
  background-color: ${(props) => props.MainColor};
`;
const Spacer = styled.div``;
/**
 * Smooth Motion Navigation Pilot Model
 * Develop : MiniCastle
 * Start Date : 2023-03-04
 * Update Date : 2023-03-04
 */
function Base({
  NavItems,
  BaseColor,
  MainColor,
  TextColor,
  HeaderIcon,
  SiteName,
}: {
  NavItems: { Text: string; Target: string }[];
  BaseColor: string;
  MainColor: string;
  TextColor: string;
  HeaderIcon: string;
  SiteName: string;
}) {
  const [ItemNumber, setItemNumber] = useState(0);
  const NavItemGen = useCallback(() => {
    const contents: any[] = [];
    for (let i = 0; i < NavItems.length; i++) {
      contents.push(
        <NavItem
          MainColor={ItemNumber === i ? MainColor : "#aaaaaa"}
          key={`NavItem ${i}`}
          onClick={() => {
            setItemNumber(i);
          }}
        >
          {NavItems[i].Text}
        </NavItem>
      );
    }
    return contents;
  }, [ItemNumber, MainColor, NavItems]);
  return (
    <Container
      className="Navigation"
      BaseColor={BaseColor}
      TextColor={TextColor}
    >
      <HeaderContainer className="Header" MainColor={MainColor}>
        <HeaderImage
          className="Header Icon"
          src={HeaderIcon}
          alt="Header Icon"
        />
        <HeaderText className="Header Site Name">{SiteName}</HeaderText>
      </HeaderContainer>
      <NavList>{NavItemGen()}</NavList>
      <NavBottomBar MainColor={MainColor}></NavBottomBar>
      <TargetIcon position={NavItems.length - ItemNumber}></TargetIcon>
    </Container>
  );
}

export default Base;
