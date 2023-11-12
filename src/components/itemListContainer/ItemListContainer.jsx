import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button } from "@mui/material";
import {products} from "../../components/productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();


  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
    
      consulta = productsCollection;
    } else {
      
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });


      setItems(newArray);
    });
  }, [categoryName]);


  return (
    <>
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
            <div>
            <RingLoader
          size={30}
          color="orange"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "orange",
          }}
        />
        
      </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;