'use client'

import {Song} from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import {Box, Flex,Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/next-js";
import likedImg from '../../public/liked.png'
import PlayButton from "@/shared/ui/PlayButton";
import {useColor} from "@/shared/config/ColorMode";
interface SongItemProps {
    data:Song
    onClick:(id:string) => void
}

const SongItem = ({data,onClick}:SongItemProps) => {
    const {hover,bgButton} = useColor()

    const imagePath = useLoadImage(data)

    return (
        <Flex
            onClick={() => onClick(data.id)}
            position={'relative'}
            direction={'column'}
            align={'center'}
            justify={'center'}
            rounded={'md'}
            overflow={'hidden'}
            rowGap={4}
            bg={bgButton}
            cursor={'pointer'}
            _hover={{bg:hover}}
            p={3}
        >
            <Box
                position={'relative'}
                aspectRatio={1}
                w={'full'}
                h={'full'}
                overflow={'hidden'}
                rounded={'md'}
            >
                <Image
                    src={imagePath || likedImg}
                    style={{objectFit: "cover"}}
                    fill
                    alt={'image'}
                />
            </Box>
            <Flex
                direction={'column'}
                align={'start'}
                w={'full'}
                pt={4}
                columnGap={1}
            >
                <Text fontWeight={'semibold'} isTruncated={true} w={'full'}>
                    {data.title}
                </Text>
                <Text pb={4} fontSize={'sm'} isTruncated={true} w={'full'}>
                    By {data.author}
                </Text>
            </Flex>
            <Box position={'absolute'} bottom={24} right={5}>
                <PlayButton/>
            </Box>
        </Flex>
    );
};

export default SongItem;