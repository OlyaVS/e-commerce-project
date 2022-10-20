import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Link to={title}>
        <Title>{title.toUpperCase()}</Title>
      </Link>

      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
