'use client'

import React, {useEffect, useState} from 'react';
import {Song} from "@/types";
import {Flex, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";
import usePlayer from "@/hooks/usePlayer";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import MediaItem from "@/shared/ui/MediaItem";
import LikedButton from "@/shared/ui/LikedButton";
import {Icon} from "@chakra-ui/icon";
import {AiFillStepBackward, AiFillStepForward} from "react-icons/ai";
import useSound from "use-sound";


interface PlayerContentProps {
    song:Song
    songUrl:string
}


const PlayerContent = ({song,songUrl}:PlayerContentProps) => {

    const player = usePlayer();

    const [volume, setVolume] = useState(1);

    const [isPlaying, setIsPlaying] = useState(false);

    const IconPlaying = isPlaying ? BsPauseFill : BsPlayFill;

    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

    const [play,{pause,sound}] = useSound(
        songUrl,
        {
            volume:volume,
            onplay:() => setIsPlaying(true),
            onend:() => {
                setIsPlaying(false)
                onPlayNext()
            },
            onpause:() => setIsPlaying(false),
            format:['mp3']
        }
    )

    useEffect(() => {
        sound?.play();

        return () => {
            sound?.unload();
        }
    }, [sound]);

    const handlePlay = () => {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    }

    const toggleMute = () => {
        if (volume === 0) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    }

    const onPlayPrivies = () =>{
        if(player.ids.length === 0){
            return
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId)
        const priviesSong = player.ids[currentIndex - 1]

        if(!priviesSong){
            return player.setId(player.ids[player.ids.length -1]);
        }
        player.setId(priviesSong)

    }
    const onPlayNext = () =>{
        if(player.ids.length === 0){
            return
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId)
        const nextSong = player.ids[currentIndex + 1]

        if(!nextSong){
            return player.setId(player.ids[0]);
        }
        player.setId(nextSong)

    }

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
                    <Icon  as={IconPlaying} size={30} color={'black'}/>
                </Flex>
            </Flex>
            <Flex display={['none','flex']} h={'full'} justify={'center'} align={'center'} w={'full'} maxW={'722px'} rowGap={6}>
                <AiFillStepBackward
                    onClick={onPlayPrivies}
                    size={30}
                    cursor={'pointer'}
                />
                <Flex onClick={handlePlay} h={10} w={10} align={'center'} justify={'center'} rounded={'full'} bg={'white'} p={1} cursor={'pointer'}>
                    <Icon  as={IconPlaying} size={30} color={'black'}/>
                </Flex>
                <AiFillStepForward
                    onClick={onPlayNext}
                    size={30}
                    cursor={'pointer'}
                />
            </Flex>
            <Flex display={['none','flex']}   w={'full'} justify={'end'} pr={2}>
                <Flex   align={'center'}  w={'120px'} rowGap={2}>
                    <Icon onClick={toggleMute} as={VolumeIcon} size={30} color={'black'}/>
                    <Slider ml={2} aria-label='slider-ex-1' defaultValue={0.3} value={volume} min={0} step={0.1} max={1} onChange={e => setVolume(e)}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Flex>

        </SimpleGrid>
    );
};

export default PlayerContent;