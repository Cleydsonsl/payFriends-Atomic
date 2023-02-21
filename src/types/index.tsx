import React, {ReactNode} from "react";
import {IconType} from "react-icons";

export interface IButtonProps {
    text: string;
    onClick?: () => void;
}

export interface IIconProps {
    icon: IconType;
    size?: number;
    color?: string;
    className?: string;
}

export interface IStyledIconProps {
    size: number;
    color: string;
}

export interface IImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    layout?: string;
    style?: React.CSSProperties;
};

export interface IInputProps {
    placeholder: string;
    value: string;
    onChangeText?: (text: string) => void;
}

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export interface IStyleTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
}

export interface IInputProps {
    placeholder: string;
    value: string;
    onChangeText?: (text: string) => void;
}

export interface IAtomicTextProps {
    text: string;
    styles?: IStyleTextProps;
}