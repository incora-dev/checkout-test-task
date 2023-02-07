import { ReactNode } from "react";

export interface IQuantityInputProps {
  value: number;
  onChange: (value: number) => void;
}

export interface ITagsProps {
  items: string[];
  onDelete: (item: string) => void;
}

export interface IHeaderProps {
  title: string;
}

export interface ISelectProps<T> {
  values: ISelectValue<T>[];
  placeholder?: string;
  onChange: (value: T) => void;
}

export interface ISelectValue<T> {
  value: T;
  label: string;
  icon?: string;
}

export interface IPhoneInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface IRadioButtonOption<T> {
  value: T;
  label: string;
}

export interface IRadioButtonsGroupProps<T> {
  options: IRadioButtonOption<T>[];
  name: string;
  onChange: (value: string) => void;
  valueMapper?: (value: T) => ReactNode;
}

export interface IModalProps {
  children: ReactNode | ReactNode[];
  open: boolean;
  title: string;
  onClose: () => void;
}
