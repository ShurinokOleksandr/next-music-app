'use client'

import {Song} from "@/types";
import {Flex} from "@chakra-ui/react";
import MediaItem from "@/shared/ui/MediaItem";
import LikedButton from "@/shared/ui/LikedButton";
import {useOnPlay} from "@/hooks/useOnPlay";

interface SearchContentProps {
    songs:Song[]
}
const SearchContent = ({songs}:SearchContentProps) => {

    const onPlay = useOnPlay(songs);

    if(songs.length === 0){
        return (
            <Flex dir={'column'} columnGap={2} w={"full"} px={6}>
                Not found!
            </Flex>
        )
    }
    return (
        <Flex  direction={'column'} columnGap={2} w={"full"} px={6}>
            {
                songs.map((item) => (
                    <Flex key={item.id} align={'center'} rowGap={4} w={'full'} _hover={{bg:'bg.300'}} rounded={'md'}  >
                        <Flex flex={1}>
                            <MediaItem data={item} onClick={(id:string) => onPlay(id)}/>
                        </Flex>
                        <LikedButton songId={item.id}/>
                    </Flex>
                ))
            }
        </Flex>
    );
};

export default SearchContent;