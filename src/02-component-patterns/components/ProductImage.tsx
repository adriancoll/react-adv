import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }: { img?: string }) => {
  const { product } = useContext(ProductContext)
  let imgToShow = noImage
  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  }

  return <img className={styles.productImg} src={imgToShow} alt='Product' />
}
