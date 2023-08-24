'use client'
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";
import {Image} from "@chakra-ui/next-js";
import {useColor} from "@/shared/config/ColorMode";

interface ListItemProps{
    image:string
    name:string
    href:string
}

const ListItem = ({image,name,href}:ListItemProps) => {
    const router = useRouter()
    const {hover,bgButton} = useColor()

    const onClick = () => {

        router.push(href)
    }

    return (
        <Flex
            onClick={onClick}
            as={'li'}
            cursor={'pointer'}
            position={'relative'}
            align={'center'}
            rounded={'md'}
            overflow={'hidden'}
            columnGap={4}
            pr={4}
            bg={bgButton}
            _hover={{bg:hover}}
        >
            <Box position={'relative'} minH={'64px'} minW={'64px'}>
                <Image  fill={true}  src={image} alt={'image'}/>
            </Box>
            <Text fontWeight={'semibold'} py={5}>
                {name}
            </Text>
        </Flex>
    );
};

export default ListItem;
