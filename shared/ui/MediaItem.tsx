'use client'

import {Song} from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import {Flex,Box,Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import likedImg from '../../public/liked.png'
import usePlayer from "@/hooks/usePlayer";


interface MediaItemProps {
    data:Song
    onClick?: (id:string) => void
}

const MediaItem = ({data,onClick}:MediaItemProps) => {

    const imagePath = useLoadImage(data)

    const player = usePlayer()

    const handleClick = () => {
        if(onClick){
            return onClick(data.id)
        }
        return player.setId(data.id)

    }

    return (
        <Flex
            align={'center'}
            rowGap={3}
            columnGap={3}
            cursor={'pointer'}
            _hover={{bg:'bg.300'}}
            w={'full'}
            p={2}
            rounded={'md'}
            onClick={handleClick}
        >
            <Box
                position={'relative'}
                rounded={'md'}
                minH={'48px'}
                minW={'48px'}
                overflow={'hidden'}
            >
                <Image
                    src={imagePath || likedImg}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt={'song'}
                />
            </Box>
            <Flex
                direction={'column'}
                overflow={'hidden'}
            >
                <Text isTruncated={true}>
                    {data.title}
                </Text>
                <Text isTruncated={true} fontSize={'sm'}>
                    {data.author}
                </Text>
            </Flex>
        </Flex>
    );
};

export default MediaItem;