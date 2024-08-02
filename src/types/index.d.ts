import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import FetchStatus from '@constants/FetchStatus';
import { OrderRequestBody } from '@types/request';
import { CategoryData, ProductOption } from '@/dto';
import { CashReceiptOptions } from '@/constants';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}

export interface GoodsItemProps {
  rankingIndex?: number,
  imageSrc: string,
  subtitle: string,
  title: string,
  amount: number,
  productId: number,
}

export interface RankingBadgeProps {
  rankingIndex?: number;
}

export interface BreakpointGridProps {
  columnsXS?: number,
  columnsSm?: number,
  columnsMd?: number,
  columnsLg?: number,
  columnsDefault: number,
  gap?: number,
}

interface ContainerProps {
  maxWidth?: string,
  elementSize?: ContainerSize,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children?: ReactNode,
  backgroundColor?: string;
  cssProps?: CSSProperties;
  padding?: string;
}

interface ResponsiveContainerProps extends ContainerProps { // padding은 어떻게 하지?
  sizeDefault: ContainerSize;
  sizeXS?: ContainerSize;
  sizeSm?: ContainerSize;
  sizeMd?: ContainerSize;
  sizeLg?: ContainerSize;
}

interface ProportionalSkeletonProps {
  ratio: number | 'full-square';
  radius?: string;
}

interface SizedSkeletonProps {
  elementSize: FixedSize;
  radius?: string;
}

export interface FixedSize {
  width: string,
  height: string,
}

export type OrderHistoryData = {
  productId: number;
  quantity: number;
  option: ProductOption;
};

export interface OrderFormStatus {
  isDirty: boolean;
  errorMessage?: FormErrorMessages[string] | boolean;
}

export type OrderFormData = {
  messageCardTextMessage: string;
  cashReceiptNumber: string;
  hasCashReceipt: boolean;
  cashReceiptType: CashReceiptType;
  usePoint: boolean;
  pointAmount: number;
};

export interface JWTTokenHeader {
  alg: string;
  typ: string;
}

export interface ProductFormInputData {
  name: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}

export interface CategoryFormInputData {
  name: string;
  color: string;
  imageUrl: string;
  description: string;
}

export type CashReceiptType = typeof CashReceiptOptions[string];

export type CategoryRepository = { [key: number]: CategoryData };

export type FetchStatusType = typeof FetchStatus[string];

export type ContainerSize = FixedSize | 'full-width';

export type ElementSize = FixedSize | 'responsive' | 'small' | 'big';
