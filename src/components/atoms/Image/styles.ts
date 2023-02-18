import styled from 'styled-components';
import Image from 'next/image';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
  style?: React.CSSProperties;
}

export const Container = styled(Image).attrs<ImageProps>(props => ({
  src: props.src,
  alt: props.alt,
  width: props.width,
  height: props.height,
  layout: props.layout,
  style: props.style,
}))`

`;