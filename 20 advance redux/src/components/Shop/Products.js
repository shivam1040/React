import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {id: "1", price: 1, title: "title1"},
  {id: "2", price: 2, title: "title2"},
  {id: "3", price: 3, title: "title3"}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.title}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
