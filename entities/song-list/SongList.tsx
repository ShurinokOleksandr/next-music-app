'use client'
import {Song} from "@/types";
import {Box, SimpleGrid} from "@chakra-ui/react";
import SongItem from "@/shared/ui/SongItem";

interface SongItemsProps {
    songs: Song[]
}
const SongList = ({songs}:SongItemsProps) => {

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
                        onClick={() => {}}
                        data={item}
                    />)
            }
        </SimpleGrid>
    );
};

export default SongList;