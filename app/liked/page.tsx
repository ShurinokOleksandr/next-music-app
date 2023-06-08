import React from 'react';
import getLikedSongs from "@/action/getLikedSongs";
import Box from "@/shared/ui/Box";
import Header from "@/widgets/header/ui";
import Flex from "@/shared/ui/Flex";
import Image from 'next/image'
import likedImg from '../../public/liked.png'
import Heading from "@/shared/ui/Heading";
import LikedContent from "@/entities/liked-content/LikedContent";
export const revalidate = 0;
const Liked = async () => {
    const likedSongs = await getLikedSongs()
    return (
        <Box
            rounded={'lg'}
            h={'full'}
            w={"full"}
            overflow={'hidden'}
            overflowY={'auto'}

        >
            <Header>
                <Box mt={20}>
                    <Flex mb={2} direction={['column','row']} align={'center'} columnGap={5}>
                        <Box position={'relative'} h={[32,44]} w={[32,44]} >
                            <Image
                                src={likedImg}
                                fill
                                alt="Playlist"
                            />
                        </Box>
                        <Flex direction={'column'} columnGap={2} mt={[4,0]}>
                            <Box display={['none','block']} fontSize={'sm'}>
                                Playlist
                            </Box>
                            <Heading as={'h1'} >
                                Liked Songs
                            </Heading>
                        </Flex>
                    </Flex>
                </Box>
            </Header>
            <LikedContent songs={likedSongs}/>
        </Box>
    );
};

export default Liked;