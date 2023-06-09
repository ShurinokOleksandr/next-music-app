'use client'
import {Box, Flex, Text} from "@chakra-ui/react";
import {TbPlaylist} from "react-icons/tb";
import {Icon} from "@chakra-ui/icon";
import {AiOutlinePlus} from "react-icons/ai";
import {useUser} from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import {Song} from "@/types";
import MediaItem from "@/shared/ui/MediaItem";
import {useOnPlay} from "@/hooks/useOnPlay";



interface LibraryProps {
    songs:Song[]
}
const Library = ({songs}:LibraryProps) => {

    const {user} = useUser()

    const authModal = useAuthModal()

    const uploadModal = useUploadModal()

    const onPlay = useOnPlay(songs)

    const onClick = () => {
        if(!user){
            return authModal.onOpen()
        }
        return uploadModal.onOpen()
    }
    return (
        <Flex direction={'column'}>
            <Flex  align={'center'} justify={'space-between'} px={5} pt={4}>
                <Flex display={'inline-flex'} align={'center'} columnGap={2}>
                    <Icon as={TbPlaylist} boxSize={26}/>
                    <Text>
                        Your Library
                    </Text>
                </Flex>
                <Icon
                    cursor={'pointer'}
                    _hover={{color:'#408d86'}}
                    onClick={onClick}
                    as={AiOutlinePlus}
                    boxSize={26}
                />
            </Flex>
            <Flex direction={'column'} rowGap={2} mt={4} px={3}>
                {
                    songs.map(item =>
                        <MediaItem
                            key={item.id}
                            data={item}
                            onClick={(id:string) => onPlay(id)}
                        />
                    )
                }
            </Flex>
        </Flex>
    );
};

export default Library;