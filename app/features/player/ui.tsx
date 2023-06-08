'use client'


import React from 'react';
import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import {useLoadSongUrl} from "@/hooks/useLoadSongUrl";
import {Box} from "@chakra-ui/react";
import PlayerContent from "@/entities/player-content/PlayerContent";

const Player = () => {

    const player = usePlayer();

    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!)

    if(!song || !songUrl || !player.activeId){
        return null
    }


    return (
        <Box
            position={'fixed'}
            bottom={0}
            bg={'red.300'}
            w={'full'}
            py={2}
            h={'80px'}
            px={4}
        >pla

            {/*<PlayerContent key={songUrl} song={song} songUrl={songUrl} />*/}
        </Box>
    );
};

export default Player;