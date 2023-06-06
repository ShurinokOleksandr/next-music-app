'use client'
import {usePathname} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import {Box, Flex} from "@chakra-ui/react";
import SidebarItem from "@/shared/ui/SidebarItem";
import Library from "@/entities/library/ui";
import {Song} from "@/types";

interface SidebarProps {
    children:React.ReactNode
    songs:Song[]
}
const Sidebar = ({children,songs}:SidebarProps) => {

    const pathname = usePathname()

    const routes = [
        {
            icon:HiHome,
            label:'Home',
            active: pathname !== '/search',
            href:'/'
        },
        {
            icon:BiSearch,
            label:'Search',
            active: pathname === '/search',
            href:'/search'
        },
    ]
    return (
        <Flex bg={'bg.100'} color={'text.100'}  h={'100vh'}>
           <Flex display={['none','none','flex']}   flexDir={'column'}  rowGap={2} h={'full'} w={'300px'} p={2}>
                <Box h={'fit-content'} w={'full'} bg={'bg.200'} borderRadius={5}>
                    <Flex  flexDir={'column'}  rowGap={4} paddingX={5} paddingY={4} >
                        {
                            routes.map((item) => <SidebarItem key={item.label} {...item}/>)
                        }
                    </Flex>
                </Box>
               <Box color={'text.100'} w={'full'} h={'full'} overflowY={'auto'} bg={'bg.200'} borderRadius={5}>
                   <Library songs={songs}/>
               </Box>
           </Flex>
            <Flex  as={'main'} h={'full'} flex={'1 1 0%'} overflowY={'auto'} py={2}>
                <Box  bg={'bg.200'} h={'full'} w={'full'} borderRadius={'lg'} overflow={'hidden'} overflowY={'auto'}>
                    {children}
                </Box>
            </Flex>
        </Flex>
    );
};

export default Sidebar;