import { createContext, useState } from "react";

export const CartContext= createContext();

const CartContextComponent = ({children}) => {
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem("cart")) || [] );
  
  const addToCart=(product)=>{
    let exist= isInCart(product.id);
    if(exist){
        let nuevoArr=cart.map((elemento)=>{
            if(elemento.id===product.id){
                return{
                    ...elemento,
                    quantity:product.quantity,
                };
            }else{
                return elemento;
            }
    });
        setCart(nuevoArr);
        localStorage.setItem("cart",JSON.stringify(nuevoArr))
    }else{
        setCart([...cart,product]);
        localStorage.setItem("cart",JSON.stringify(...cart,product))

    }
  };

  const isInCart=(id)=>{
    let exist= cart.some((elemento)=>elemento.id===id);
return exist;
};
const getQuantityById =(id)=>{
    let product=cart.find((elemento)=>elemento.id===id);
    return product?.quantity;
};

const clearCart= () => {
    setCart([]);
    localStorage.removeItem("cart")

};
const deleteProductById=(id)=>{
    let nuevoArr= cart.filter((product)=>product.id !==id);
    setCart(nuevoArr);
    localStorage.setItem("cart",JSON.stringify(nuevoArr))

};
  
const getTotalPrecio=()=>{
    let total=cart.reduce((acumulador, elemento)=>{
        return acumulador+elemento.precio*elemento.quantity;
    },0);
    return total;
};

const getTotalQuantity=()=>{
    let total= cart.reduce( (acumulador, elemento)=>{
        return acumulador+elemento.quantity;
    },0);
    return total;
};

  let data={cart,addToCart,getQuantityById, clearCart, deleteProductById, getTotalPrecio, getTotalQuantity};
  
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
   
};

export default CartContextComponent;