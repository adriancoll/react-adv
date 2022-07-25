import { Product } from '../interface/interfaces';

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';


const product: Product = {
  id: '0asd',
  title: 'asdasd',
  img: './coffee-mug.png',
};

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
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>

        
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
