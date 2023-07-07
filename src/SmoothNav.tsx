import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import TargetIcon from "./TargetIcon";
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
  @media screen and (max-width: 1200px) {
    font-size: 20px;
    height: 60px;
  }
  @media screen and (max-width: 680px) {
    justify-content: center;
    height: 40px;
  }
`;
const HeaderContainer = styled.header<{ MainColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  color: ${(props) => props.MainColor};
  user-select: none;
  cursor: pointer;
  @media screen and (max-width: 765px) {
    margin: 10px;
  }
  @media screen and (max-width: 680px) {
    margin: 0px;
  }
`;
const HeaderImage = styled.img`
  height: 100%;
  max-height: 80px;
  @media screen and (max-width: 1200px) {
    max-height: 50px;
  }
  @media screen and (max-width: 680px) {
    max-height: 30px;
  }
`;
const HeaderText = styled.span`
  margin-left: 7px;
  @media screen and (max-width: 680px) {
    margin-left: 2px;
  }
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 765px) {
    margin: 10px;
  }
  @media screen and (max-width: 680px) {
    display: none;
  }
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
  @media screen and (max-width: 1200px) {
    min-width: 100px;
    max-width: 100px;
  }
`;
const NavBottomBar = styled.div<{ MainColor: string }>`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0px;
  background-color: ${(props) => props.MainColor};
`;
/**
 * Smooth Motion Navigation Pilot Model
 * Develop : MiniCastle
 * Start Date : 2023-03-04
 * Update Date : 2023-03-04
 */
function SmoothNav({
  NavItems = [
    { Text: "Home", Target: "/" },
    { Text: "Show", Target: "/" },
    { Text: "Member", Target: "/" },
    { Text: "Contents", Target: "/" },
    { Text: "About", Target: "/" },
  ],
  BaseColor = "#D6ECFA",
  MainColor = "#F15C5C",
  TextColor = "#aaaaaa",
  HeaderIcon = "./node_modules/@minicastle/smooth-navigation/dist/Header Icon.png",
  SiteName = "Title",
}: {
  NavItems?: { Text: string; Target: string }[];
  BaseColor?: string;
  MainColor?: string;
  TextColor?: string;
  HeaderIcon?: string;
  SiteName?: string;
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

export default SmoothNav;
