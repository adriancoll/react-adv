import { Product } from '../interface/interfaces'
import '../styles/custom-styles.css'

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

const product: Product = {
  id: '1',
  title: 'Coffee mug - card',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <ProductCard className='bg-dark' product={product}>
          <ProductCard.Image className='custom-image' img={product.img} />
          <ProductCard.Title className='text-bold text-white' title={product.title} />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard className='bg-dark' product={product}>
          <ProductImage
            style={{
              boxShadow: '0px 5x 20px rgba(5,5,5, 0.7)',
            }}
            className='custom-image'
            img={product.img}
          />
          <ProductTitle className='text-white text-bold' title={product.title} />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          style={{
            boxShadow: '0px 5x 20px rgba(255,255,255, 0.2)',
          }}
          product={product}
        >
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
