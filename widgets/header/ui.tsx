'use client'

import {useRouter} from "next/navigation";
import {Box, Button, Flex} from "@chakra-ui/react";
import {RxCaretLeft,RxCaretRight} from "react-icons/rx";
import {Icon} from "@chakra-ui/icon";
import {HiHome} from "react-icons/hi";
import {BiSearch} from 'react-icons/bi'
import ButtonRef from "@/shared/ui/Button";
interface HeaderProps {
    children: React.ReactNode

}

const Header = ({children}:HeaderProps) => {
    const router = useRouter()

    const handleLogout = () => {

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
                    <>
                       <ButtonRef bg={'none'} color={'white'} fontWeight={'semibold'}>
                           Sign up
                       </ButtonRef>
                        <ButtonRef bg={'white'} fontWeight={'semibold'}>
                            Sign in
                        </ButtonRef>
                    </>
                </Flex>
            </Flex>
            {children}
        </Box>
    );
};

export default Header;