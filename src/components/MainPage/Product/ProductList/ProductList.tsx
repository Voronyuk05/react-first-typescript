import { IProductList } from '../ProductData'
import { ProductItem } from "../ProductItem/ProductItem"
import { List } from "./ProductList.styled"

export const ProductList: React.FC<IProductList> = ({productData}): JSX.Element => {
    return (
        <List>
            {productData.map(({img, tag, list}) => (
                <ProductItem key={tag} img={img} tag={tag} list={list} />
            ))}
        </List>
    )
}