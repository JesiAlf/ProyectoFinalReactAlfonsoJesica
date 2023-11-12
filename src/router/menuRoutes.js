import ItemDetailContainer from "../components/itemListContainer/ItemDetailContainer";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";
import CheckoutOficial from "../components/pages/checkoutOficial/CheckoutOficial";

export const routes=[
    {
id:"home",
path:"/",
Element: ItemListContainer,
},
{
    id:"category",
    path:"/category/:categoryName",
    Element: ItemListContainer
    },
    {
        id:"cart",
        path:"/cart",
        Element: Cart
        },
        {
            id:"detail",
            path:"/itemDetail/:id" ,
            Element: ItemDetailContainer
            },
            {
                id:"checkout",
                path:"/checkout" ,
                Element: CheckoutOficial
                },
    ]
