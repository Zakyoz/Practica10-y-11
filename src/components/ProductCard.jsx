import { Card, Heading , Text} from '@chakra-ui/react'
import React from 'react'

function ProductCard({nombre, precio, tipo, onClick}) {
  return (
    <Card
    background={'#5ADF3A'} p={3} my={'7px'} onClick={onClick}
    >
        <Heading>{nombre}</Heading>
        <Text>Tipo: {tipo}</Text>
        <Text>{precio} $</Text>
    </Card>
  )
}

export default ProductCard