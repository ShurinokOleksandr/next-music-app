'use client'

import {useRouter} from "next/navigation";
import {Box, Button, Flex, useColorMode, useToast} from "@chakra-ui/react";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {Icon} from "@chakra-ui/icon";
import {HiHome} from "react-icons/hi";
import {BiSearch} from 'react-icons/bi'
import ButtonRef from "@/shared/ui/Button";
import useAuthModal from "@/hooks/useAuthModal";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useUser} from "@/hooks/useUser";
import {BsMoon, BsSun} from "react-icons/bs";
import {useColor} from "@/shared/config/ColorMode";

interface HeaderProps {
    children: React.ReactNode

}

const Header = ({children}:HeaderProps) => {

    const { colorMode, toggleColorMode } = useColorMode()

    const ThemeIcon = colorMode === 'light' ? BsSun : BsMoon

    const router = useRouter()

    const authModal = useAuthModal()

    const toast = useToast()

    const supabaseClient = useSupabaseClient()

    const {user} = useUser()

    const {color,bgButton,hover} = useColor()

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
        <Box h={'fit-content'} p={6}   >
            <Flex w={'full'} mb={4} align={'center'} justify={'space-between'} >
                <Flex display={['none','none','flex']} columnGap={2} align={'center'}  >
                    <Button onClick={() => router.back()} _hover={{bg:hover}}  bg={bgButton} borderRadius={'full'} w={0} >
                        <Icon as={RxCaretLeft} cursor={'pointer'} _hover={{opacity:75}} boxSize={35} color={color}/>
                    </Button>
                    <Button onClick={() => router.forward()} _hover={{bg:hover}} bg={bgButton}  borderRadius={'full'} w={0} >
                        <Icon as={RxCaretRight} cursor={'pointer'} _hover={{opacity:75}} boxSize={35} color={color}/>
                    </Button>
                </Flex>
                <Flex  display={{base:'flex',md:'none'}} columnGap={2} align={'center'} justify={'space-between'}>
                    <Button onClick={() =>router.push('/')}  _hover={{bg:hover}} bg={bgButton} borderRadius={'full'} w={1} >
                        <Icon as={HiHome} cursor={'pointer'}  boxSize={25} color={color}/>
                    </Button>
                    <Button onClick={() => router.push('/search')}  _hover={{bg:hover}} bg={bgButton} borderRadius={'full'} w={1} >
                        <Icon as={BiSearch} cursor={'pointer'}  boxSize={25} color={color}/>
                    </Button>
                </Flex>
                <Flex align={'center'} justify={'space-between'} columnGap={4}>
                    {
                        user
                            ?
                            <Flex align={'center'}  >
                                <ButtonRef  bg={bgButton}  _hover={{bg:hover}} onClick={handleLogout}>
                                    Log out
                                </ButtonRef>
                            </Flex>
                            : <>
                                <ButtonRef onClick={authModal.onOpen}  _hover={{bg:hover}}  bg={bgButton} color={color} fontWeight={'semibold'}>
                                    Sign up
                                </ButtonRef>
                                <ButtonRef onClick={authModal.onOpen}  _hover={{bg:hover}} bg={bgButton} fontWeight={'semibold'}>
                                    Sign in
                                </ButtonRef>

                            </>
                    }
                    <ButtonRef bg={bgButton}    _hover={{bg:hover}}  onClick={toggleColorMode}>
                        <Icon as={ThemeIcon} />
                    </ButtonRef>
                </Flex>
            </Flex>
            {children}

        </Box>
    );
};

export default Header;
