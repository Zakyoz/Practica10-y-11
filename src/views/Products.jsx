import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

function Products() {
      const [data,setData] = useState(null)
      const navigate = useNavigate()
      useEffect(()=>{
        axios
        .get("http://localhost:8000/api/electronicos/")
        .then(response=>{
          setData(response.data);
        console.log(data);
        })
        .catch(e=>{
          console.log(e);
        });
      },[])

  return <div>{data?
    data.map(item=>(
      <>
      <ProductCard
      nombre={item.nombre}
      tipo={item.tipo}
      precio={item.precio}
      onClick={()=>{navigate(`/products/${item.id}`)}}
      />
      </>
    ))
    :<Text>Esperando Elementos...</Text>}</div>
}

export default Products