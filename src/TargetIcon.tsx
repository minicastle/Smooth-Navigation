import React from "react";
import styled from "@emotion/styled";

const TargetSVG = styled.svg<{ position: number }>`
  position: absolute;
  bottom: 0;
  z-index: 10;
  transition: 300ms;
  right: ${(props) => {
    return (
      (props.position === 1
        ? props.position * 115
        : (props.position - 1) * 150 + 115) + "px"
    );
  }};
`;

function TargetIcon({ position }: { position: number }) {
  return (
    <TargetSVG
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height={"20px"}
      viewBox="0 0 20 20"
      position={position}
    >
      <path
        transform="translate(0,20) scale(0.0012,-0.0012)"
        fill="#F15C5C"
        xmlns="http://www.w3.org/2000/svg"
        d="M9271 17206 c-3 -202 -511 -2777 -837 -4251 -851 -3841 -1671 -6275 -2687 -7980 -201 -337 -486 -747 -726 -1045 -365 -452 -845 -927 -1366 -1351 -401 -327 -864 -658 -1830 -1309 -762 -513 -1298 -886 -1699 -1182 l-120 -88 4647 0 c4124 0 4647 2 4647 15 0 13 522 15 4637 15 l4637 0 -120 88 c-399 294 -848 606 -1664 1157 -676 456 -941 638 -1205 829 -1156 833 -1859 1535 -2509 2505 -1235 1841 -2203 4754 -3226 9706 -244 1180 -550 2784 -551 2889 0 41 -3 55 -9 41 -7 -18 -8 -16 -12 10 -3 17 -6 -6 -7 -49z"
      />
    </TargetSVG>
  );
}

export default TargetIcon;
