'use client'


import React, {useEffect} from 'react';
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import ModalAuth from "@/shared/ui/Modal";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {onClose,isOpen} = useAuthModal()
    const session = useSessionContext()

    useEffect(() => {
       if(session){
           router.refresh()
           onClose()
       }
    },[onClose, router, session])

    const onChange = (open:boolean) => {
        if(open){
            onClose()
        }
    }

    return (
        <ModalAuth
            title={'Welcome'}
            description={'Login to your account'}
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                providers={['github','google']}
                magicLink
                supabaseClient={supabaseClient}
                appearance={{theme:ThemeSupa}}
            />
        </ModalAuth>
    );
};

export default AuthModal;