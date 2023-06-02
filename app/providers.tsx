'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "@/config/chakra-theme";
import SupabaseProvider from "@/providers/SupabaseProvider";
import {MyUserContextProvider} from "@/hooks/useUser";

export function Providers({
                              children
                          }: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider  theme={theme}>
                <SupabaseProvider>
                    <MyUserContextProvider>
                        {children}
                    </MyUserContextProvider>
                </SupabaseProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}