'use client'

import React, {useState} from 'react';
import {Song} from "@/types";
import { Flex, SimpleGrid} from "@chakra-ui/react";
import usePlayer from "@/hooks/usePlayer";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import MediaItem from "@/shared/ui/MediaItem";
import LikedButton from "@/shared/ui/LikedButton";


interface PlayerContentProps {
    song:Song
    songUrl:string
}


const PlayerContent = ({song,songUrl}:PlayerContentProps) => {

    const player = usePlayer();

    const [volume, setVolume] = useState(1);

    const [isPlaying, setIsPlaying] = useState(false);

    const Icon = isPlaying ? BsPauseFill : BsPlayFill;

    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;


    return (
        <SimpleGrid columns={[2,3]} spacing={10} h={'full'}>
            <Flex w={'full'} justify={'start'}>
                <Flex align={'center'} rowGap={'4'}>
                    <MediaItem data={song} />
                    <LikedButton songId={song.id} />
                </Flex>
            </Flex>

            <Flex display={['flex','none']} gridColumn={'auto'} w={'full'} justify={'end'} align={'center'}>
                <Flex h={10} w={10} align={'center'} justify={'center'} rounded={'full'} bg={'white'} p={1} cursor={'pointer'}>
                    <Icon size={30} className="text-black" />
                </Flex>
            </Flex>


        </SimpleGrid>
    );
};

export default PlayerContent;