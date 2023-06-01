'use client'

import {IconType} from "react-icons";
import {Link} from "@chakra-ui/next-js";
import {Icon} from "@chakra-ui/icon";
import {Flex, Text} from '@chakra-ui/react'


interface SidebarItemProps {
    label:string
    href:string
    icon:IconType
    active?:boolean
}
const SidebarItem = ({label,href, icon,active}:SidebarItemProps) => {
    return (
        <Link
            href={href}
            color={active ? 'text.100' : 'text.200'}
            fontSize={'18px'}
            _hover={{textDecor:'none',transition:'ease-in-out',color:'text.100',}}
        >
            <Flex alignItems={'center'}>
                <Icon as={icon} boxSize={26} mr={1}/>
                <Text w={'full'}>{label}</Text>
            </Flex>
        </Link>
    );
};

export default SidebarItem;