import styled from 'styled-components';
import Image from 'next/image';
import { IImageProps } from '@app/types';

export const Container = styled(Image).attrs<IImageProps>(props => ({
  src: props.src,
  alt: props.alt,
  width: props.width,
  height: props.height,
  layout: props.layout,
  style: props.style,
}))`

`;