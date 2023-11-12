import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import{useParams} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from  "sweetalert2";
import {db} from "../../firebaseConfig";
import { getDoc, collection,doc } from "firebase/firestore";

const ItemDetailContainer=()=>{
    const [productSelected,setProductSelected]=useState({});
    const [showCounter, setShowCounter]= useState(true);
    const {id}=useParams()

    const {addToCart, getQuantityById}=useContext(CartContext)
let totalQuantity=getQuantityById(id);
    

useEffect(()=>{
        const itemCollection= collection(db,"products");
        const refDoc=doc(itemCollection,id);
        getDoc (refDoc).then((res)=>{
            setProductSelected( {id:res.id,...res.data()});
        });
    },[id]);
    const onAdd =(cantidad)=> {
        let artes={
            ...productSelected,
            quantity:cantidad,
        };
        addToCart(artes)  

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregaste al carrito",
            showConfirmButton: false,
            timer: 1500
          });
        
          setShowCounter(false);

    };

    return ( <ItemDetail showCounter={showCounter} productSelected={productSelected} onAdd={onAdd} initial={totalQuantity}/>
    
    );
};
export default ItemDetailContainer;