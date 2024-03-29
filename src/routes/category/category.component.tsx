import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, Title } from './category.styles';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';

type CategoryRouteParams = {
  category: string;
};

// enforce rendering only if category is inside url
const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
