import { productData } from "./ProductData";
import { ProductList } from "./ProductList/ProductList";
import { ProductComponent } from "./Product.styled";
import { ContainerColumn, H2, FontDark } from "../../Global.styled";


export function Product() {
    return (
        <ProductComponent>
            <ContainerColumn>
                <H2 weight='300' color="primary">Другие услуги <FontDark>Tiksan Group</FontDark> для вашего дома</H2>
                <ProductList productData={productData} />
            </ContainerColumn>
        </ProductComponent>
    )
}