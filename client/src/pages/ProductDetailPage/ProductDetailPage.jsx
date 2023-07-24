import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProductDetailPage.module.scss'

import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'

const cx = classNames.bind(styles)

const ProductDetailPage = () => {
  return (
    <div className={cx('wrapper')}>
    <h5>Home Page</h5>
        <ProductDetailComponent />
    </div>
  )
}

export default ProductDetailPage