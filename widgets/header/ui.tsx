'use client'

import {useRouter} from "next/navigation";
import {Box, Button, Flex, useToast} from "@chakra-ui/react";
import {RxCaretLeft,RxCaretRight} from "react-icons/rx";
import {Icon} from "@chakra-ui/icon";
import {HiHome} from "react-icons/hi";
import {BiSearch} from 'react-icons/bi'
import ButtonRef from "@/shared/ui/Button";
import useAuthModal from "@/hooks/useAuthModal";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useUser} from "@/hooks/useUser";
import {FaUserAlt} from "react-icons/fa";
interface HeaderProps {
    children: React.ReactNode

}

const Header = ({children}:HeaderProps) => {
    const router = useRouter()
    const authModal = useAuthModal()
    const toast = useToast()
    const supabaseClient = useSupabaseClient()

    const {user} = useUser()

    const handleLogout = async () => {
        const {error} = await supabaseClient.auth.signOut()

        router.refresh()
        if(error){
            toast({ title: 'Error!', duration: 3000,status: 'error',})
        }else {
            toast({ title: 'Great!', duration: 3000,status: 'success',})
        }
    }
    return (
        <Box h={'fit-content'} p={6} bgGradient={'linear-gradient(180deg, #26A69A 50%, bg.200 90%)'}>
            <Flex w={'full'} mb={4} align={'center'} justify={'space-between'}>
                <Flex display={['none','none','flex']} columnGap={2} align={'center'}>
                    <Button onClick={() => router.back()} borderRadius={'full'} w={0} >
                        <Icon as={RxCaretLeft} cursor={'pointer'} _hover={{opacity:75}} boxSize={35} color={'text.100'}/>
                    </Button>
                    <Button onClick={() => router.forward()} borderRadius={'full'} w={0} >
                        <Icon as={RxCaretRight} cursor={'pointer'} _hover={{opacity:75}} boxSize={35} color={'text.100'}/>
                    </Button>
                </Flex>
                <Flex  display={{base:'flex',md:'none'}} columnGap={2} align={'center'} justify={'space-between'}>
                    <Button onClick={() => router.forward()} borderRadius={'full'} w={0} >
                        <Icon as={HiHome} cursor={'pointer'}  boxSize={25} color={'text.100'}/>
                    </Button>
                    <Button onClick={() => router.forward()} borderRadius={'full'} w={0} >
                        <Icon as={BiSearch} cursor={'pointer'}  boxSize={25} color={'text.100'}/>
                    </Button>
                </Flex>
                <Flex align={'center'} justify={'space-between'} columnGap={4}>
                    {
                        user
                            ?
                            <Flex align={'center'} >
                                <ButtonRef onClick={handleLogout}>
                                    Log out
                                </ButtonRef>
                                <ButtonRef onClick={() => router.push('/account')} ml={5} w={50}>
                                    <FaUserAlt size={10}/>
                                </ButtonRef>
                            </Flex>
                            : <>
                                <ButtonRef onClick={authModal.onOpen} bg={'none'} color={'white'} fontWeight={'semibold'}>
                                    Sign up
                                </ButtonRef>
                                <ButtonRef onClick={authModal.onOpen} bg={'white'} fontWeight={'semibold'}>
                                    Sign in
                                </ButtonRef>
                            </>
                    }
                </Flex>
            </Flex>
            {children}
        </Box>
    );
};

export default Header;