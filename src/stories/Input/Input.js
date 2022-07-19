import { Input as ChakraInput } from '@chakra-ui/react'
import React from 'react'

const Input = ({ size = 'xs', ...rest }) => {
    console.log({ size })
    return (
        <ChakraInput size={size} {...rest} />
    )
}

export default Input