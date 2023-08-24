import {useColorModeValue} from "@chakra-ui/react";


export const useColor = () =>{
    const bgApp = useColorModeValue('#F4EEFF', '#222831')
    const bgSidebar = useColorModeValue('bg.200', '#393e46')
    const bgButton = useColorModeValue('#a6b1e1', '#bc6ff1')

    const hover = useColorModeValue('#6774ee','#892cdc')

    const gradientFrom = useColorModeValue('#444a76', '#862bd8')
    const gradientTo = useColorModeValue('#a5b0e0', '#b768ef')


    const color = useColorModeValue('#292524','white')

    return{
        hover,
        bgButton,
        gradientFrom,
        gradientTo,
        bgSidebar,
        bgApp,
        color,
    }
}
