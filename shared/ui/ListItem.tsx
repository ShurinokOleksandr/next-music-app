'use client'
import {Box,Text, Flex} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";
import {Image} from "@chakra-ui/next-js";
import {FaPlay} from "react-icons/fa";

interface ListItemProps{
    image:string
    name:string
    href:string
}

const ListItem = ({image,name,href}:ListItemProps) => {
    const router = useRouter()

    const onClick = () => {

        router.push(href)
    }

    return (
        <Flex onClick={onClick} as={'li'} cursor={'pointer'}    position={'relative'} align={'center'} rounded={'md'} overflow={'hidden'} columnGap={4} pr={4} bg={'bg.100'} _hover={{bg:'bg.200'}}>
            <Box position={'relative'} minH={'64px'} minW={'64px'}>
                <Image  fill={true} objectFit={'cover'} src={image} alt={'image'}/>
            </Box>
            <Text fontWeight={'semibold'} py={5}>
                {name}
            </Text>
            <Flex position={'absolute'} rounded={'full'} align={'center'} justify={'center'} bg={'green.500'} p={4} right={5}>
                <FaPlay color={'black'}/>
            </Flex>
        </Flex>
    );
};

export default ListItem;