'use client'

import {IconType} from "react-icons";
import {Link} from "@chakra-ui/next-js";
import {Icon} from "@chakra-ui/icon";
import {Flex, Text} from '@chakra-ui/react'
import {useColor} from "@/shared/config/ColorMode";


interface SidebarItemProps {
    label:string
    href:string
    icon:IconType
    active?:boolean
}
const SidebarItem = ({label,href, icon,active}:SidebarItemProps) => {
    const {color} = useColor()

    return (
        <Link
            href={href}
            color={active ? 'orange' : color}
            fontSize={'18px'}
            _hover={{textDecor:'none',transition:'ease-in-out',color:color,}}
        >
            <Flex alignItems={'center'}>
                <Icon as={icon} boxSize={26} mr={1}/>
                <Text w={'full'}>{label}</Text>
            </Flex>
        </Link>
    );
};

export default SidebarItem;