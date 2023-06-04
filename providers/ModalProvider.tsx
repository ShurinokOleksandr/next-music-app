'use client'


import {useEffect, useState} from 'react';
import AuthModal from "@/entities/auth-model/AuthModal";
import UploadModel from "@/entities/upload-model/UploadModel";

const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <>
            <AuthModal/>
            <UploadModel/>
        </>
    );
};

export default ModalProvider;