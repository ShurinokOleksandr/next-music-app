'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "@/config/chakra-theme";
import SupabaseProvider from "@/providers/SupabaseProvider";

export function Providers({
                              children
                          }: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider  theme={theme}>
                <SupabaseProvider>
                    {children}
                </SupabaseProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}