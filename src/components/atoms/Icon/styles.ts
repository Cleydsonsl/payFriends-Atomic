import { IconType } from "react-icons";
import styled from "styled-components";


export interface IIconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

interface IStyledIconProps {
  size: number;
  color: string;
}

export const Container = styled.div<IStyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  border: none;
  padding: none;
  outline: none;
  margin-right: 10px;
`;