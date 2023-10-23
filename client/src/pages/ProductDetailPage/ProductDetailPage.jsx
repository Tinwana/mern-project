import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductDetailPage.module.scss";

import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../Service/ProductService";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const cx = classNames.bind(styles);

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getDetailProduct(productId),
  });
  return (
    <div className={cx("wrapper")}>
      {isLoading ? (
        <LoadingComponent size="large" />
      ) : (
        <ProductDetailComponent product={product.data} />
      )}
    </div>
  );
};

export default ProductDetailPage;
