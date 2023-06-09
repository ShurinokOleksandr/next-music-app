import {extendTheme} from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
export const theme = extendTheme({
    colors: {
        text: {
            100: "#263339",
            200: "#728f9e",
        },
        bg:{
            100:'#F4EEFF',
            200:'#DCD6F7',
            300:'#DCD6F7',
            white:'#FFFFFF'
        }
    },
})

