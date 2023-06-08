'use client'
import {Song} from "@/types";
import {Box, SimpleGrid} from "@chakra-ui/react";
import SongItem from "@/shared/ui/SongItem";
import {useOnPlay} from "@/hooks/useOnPlay";

interface SongItemsProps {
    songs: Song[]
}
const SongList = ({songs}:SongItemsProps) => {


    const onPlay = useOnPlay(songs)

    if(songs.length === 0 ){
        return (
            <Box>Not available songs</Box>
        )
    }


    return (
        <SimpleGrid columns={[2,3,3,4,5,8]} spacing={4} mt={4}>
            {
                songs.map((item) =>
                    <SongItem
                        key={item.id}
                        onClick={(id:string) => onPlay(id)}
                        data={item}
                    />)
            }
        </SimpleGrid>
    );
};

export default SongList;