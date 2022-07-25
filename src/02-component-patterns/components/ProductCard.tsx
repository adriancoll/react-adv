import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { createContext, ReactElement } from 'react'
import { Product, ProductContextProps } from '../interface/interfaces'

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: React.CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={` ${styles.productCard} ${className} `}>{children}</div>
    </Provider>
  )
}
