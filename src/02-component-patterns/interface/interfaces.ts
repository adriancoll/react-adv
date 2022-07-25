import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductButtonsProps } from '../components/ProductButtons'

export interface Product {
  id    : string
  title : string
  img?  : string
}

export interface ProdcutButtonsProps {
  counter    : number
  increaseBy : (inc: number) => void
}

export interface ProductContextProps extends ProdcutButtonsProps {
  product: Product
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps) : JSX.Element
  Title                     : (Props: ProductTitleProps) => JSX.Element
  Image                     : (Props: ProductImageProps) => JSX.Element
  Buttons                   : (Props: ProductButtonsProps) => JSX.Element
}
