'use client'

import {useRouter} from "next/navigation";
import {useSessionContext} from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";
import {useUser} from "@/hooks/useUser";
import {useEffect, useState} from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {useToast} from "@chakra-ui/react";
import Button from "@/shared/ui/Button";
import {Icon} from "@chakra-ui/icon";

interface LikedButtonProps {
    songId:string
}

const LikedButton = ({songId}:LikedButtonProps) => {
    const router = useRouter();
    const {
        supabaseClient
    } = useSessionContext();
    const authModal = useAuthModal();
    const { user } = useUser();

    const toast = useToast()

    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() =>{
        if (!user?.id) {
            return;
        }


        const fetchData = async () => {
            const {data,error} = await supabaseClient
                .from('liked_songs')
                .select('*')
                .eq('user_id',user.id)
                .eq('song_id',songId)
                .single();
            if(!error && data){
                setIsLiked(true)
            }
        }
        fetchData()
    },[songId, supabaseClient, user?.id])
    const IconLike = isLiked ? AiFillHeart : AiOutlineHeart;

    const handleLike =  async () => {
        if (!user){
            return authModal.onOpen();
        }

        if(isLiked){
            const {error} = await supabaseClient
                .from('liked_songs')
                .delete()
                .eq('user_id', user.id)
                .eq('song_id', songId)
            if(error){
                toast({ title: 'Something wrong',status:'error',isClosable:true,duration:3000})
            }else {
                setIsLiked(false);
                toast({ title: 'Song deleted',status:'success',isClosable:true,duration:3000})
            }
        }else {
            const {error} = await supabaseClient
                .from('liked_songs')
                .insert({
                    'user_id': user.id,
                    'song_id': songId
                })
            if(error){
                    toast({ title: 'Something wrong',status:'error',isClosable:true,duration:3000})
            }else {
                setIsLiked(true);
                    toast({ title: 'Song added',status:'success',isClosable:true,duration:3000})
            }
        }
        router.refresh();
    }

    return (
        <Button
            w={5}
            bg={'unset'}
            _hover={{bg:'unset'}}
            onClick={handleLike}
        >
            <Icon as={IconLike} color={isLiked ? '#22c55e' : 'white'} fontSize={25}/>
        </Button>
    );
};

export default LikedButton;