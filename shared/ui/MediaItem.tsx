'use client'

import {Song} from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import {Flex} from "@chakra-ui/react";

interface MediaItemProps {
    data:Song
    onClick: (id:string) => void
}

const MediaItem = ({data,onClick}:MediaItemProps) => {

    const imagePath = useLoadImage(data)


    const handleClick = () => {
        if(onClick){
            return onClick(data.id)
        }

    }

    return (
        <Flex
            align={'center'}
            rowGap={3}
            cursor={'pointer'}
            _hover={{color:'gray.600'}}
            w={'full'}
            p={2}
            rounded={'md'}
        >
            {data.title}
        </Flex>
    );
};

export default MediaItem;