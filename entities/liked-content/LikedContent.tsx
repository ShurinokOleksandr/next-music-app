'use client'

import React, {useEffect} from 'react';
import {Song} from "@/types";
import {useUser} from "@/hooks/useUser";
import {useRouter} from "next/navigation";
import {Flex} from "@chakra-ui/react";
import MediaItem from "@/shared/ui/MediaItem";
import LikedButton from "@/shared/ui/LikedButton";
import {useOnPlay} from "@/hooks/useOnPlay";

interface LikedContentProps {
    songs:Song[]
}
const LikedContent = ({songs}:LikedContentProps) => {
    const router = useRouter();

    const { isLoading, user } = useUser();

    const onPlay = useOnPlay(songs)

    useEffect(() =>{
        if(!isLoading && !user){
            router.replace('/')
        }

    },[isLoading, router, user])

    if(songs.length === 0){
        return (
            <Flex direction={'column'} columnGap={'2'} w={'full'} px={6} >
                No liked songs.
            </Flex>
        )
    }


    return (
        <Flex  direction={'column'} columnGap={'2'}  w={'full'} p={6}>
            {
                songs.map((item) =>
                    <Flex key={item.id} align={'center'} rowGap={4} _hover={{bg:'bg.300'}} rounded={'lg'}  w={'full'}>
                        <Flex flex={1}>
                            <MediaItem data={item} onClick={(id:string) => onPlay(id)}/>
                        </Flex>
                        <LikedButton songId={item.id}/>
                    </Flex>
                )
            }
        </Flex>
    );
};

export default LikedContent;