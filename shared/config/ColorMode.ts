import {useColorModeValue} from "@chakra-ui/react";


export const useColor = () =>{
    const bgApp = useColorModeValue('#F4EEFF', '#2b2e4a')
    const bgSidebar = useColorModeValue('bg.200', '#53354a')
    const bgButton = useColorModeValue('#a6b1e1', '#903749')


    const gradientFrom = useColorModeValue('#444a76', '#d24146')
    const gradientTo = useColorModeValue('#a5b0e0', '#913749')


    const color = useColorModeValue('gray.800','white')

    return{
        bgButton,
        gradientFrom,
        gradientTo,
        bgSidebar,
        bgApp,
        color,
    }
}
