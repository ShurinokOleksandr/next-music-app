'use client'


import {
    Modal ,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";
import {Box, Text, } from "@chakra-ui/react";

interface ModalProps {
    isOpen:boolean
    onChange: (open:boolean) => void
    title:string
    description:string
    children:React.ReactNode
}
const ModalAuth = ({onChange,isOpen,title,description,children}:ModalProps) => {
    return (
        <>


            <Modal   isOpen={isOpen} onClose={() => onChange(isOpen)}>
                <ModalOverlay  backdropFilter='blur(5px)'/>
                <ModalContent>
                    <ModalCloseButton/>
                    <ModalHeader fontSize={'30'} textAlign={'center'}>{title}</ModalHeader>
                    <ModalBody>
                        <Text textAlign={'center'} fontSize={'15'} fontWeight='bold' mb='1rem'>
                            {description}
                        </Text>
                        <Box>
                            {children}
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalAuth;