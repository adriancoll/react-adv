import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props extends BaseStyledHOC  {
  [x: string]: any
}

export const ProductButtons = ({ className, style }: BaseStyledHOC) => {
  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  )
}
