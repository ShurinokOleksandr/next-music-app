'use client'

import React, {useState} from 'react';
import ModalAuth from "@/shared/ui/Modal";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import useUploadModal from "@/hooks/useUploadModal";
import {useUser} from "@/hooks/useUser";
import {useRouter} from "next/navigation";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import InputRef from "@/shared/ui/Input";
import {Box, Button, Flex, useToast} from "@chakra-ui/react";
import uniqid from "uniqid";


const UploadModel = () => {
    const [isLoading, setIsLoading] = useState(false);

    const uploadModal = useUploadModal();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const router = useRouter();
    const toast = useToast()
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open:boolean) =>{
        if(open){
            reset()
            uploadModal.onClose()
        }
    }


    const onSubmit:SubmitHandler<FieldValues> = async  (values) => {
        try {
            setIsLoading(true)

            const image = values.image?.[0]
            const song = values.song?.[0]

            if(!image || !song || !user){
                toast({
                    title:'Missing fields',
                    status:'error',
                    description:3000,
                    isClosable:true
                })
                return
            }
            const uniqueID = uniqid();

            const {data:songData,
                error:songError
            } = await  supabaseClient
                .storage.from('songs')
                .upload(
                    `song-${values.title}-${uniqueID}`,
                    song,
                    {cacheControl:'3600',upsert:false}
                )
            if(songError){
                setIsLoading(false)
                return toast({
                    title:'Upload error',
                    status:'error',
                    description:3000,
                    isClosable:true
                })
            }

            const {data:imageData,
                error:imageError
            } = await  supabaseClient
                .storage.from('images')
                .upload(
                    `image-${values.title}-${uniqueID}`,
                    image,
                    {cacheControl:'3600',upsert:false}
                )



            if(imageError){
                setIsLoading(false)
               return  toast({
                    title:'Upload error',
                    status:'error',
                    description:3000,
                    isClosable:true
                })
            }


            const {error:supabaseError} = await  supabaseClient.from('songs').insert({
                user_id:user.id,
                title:values.title,
                author:values.author,
                image_path:imageData?.path,
                song_path:songData?.path,
            })

            if(supabaseError){
                setIsLoading(false)
                return toast({
                    title:'Upload error',
                    status:'error',
                    description:3000,
                    isClosable:true
                })
            }
            router.refresh()
            setIsLoading(false)


            toast({
                title:'Great job!',
                status:'success',
                description:3000,
                isClosable:true
            })
            reset()
            uploadModal.onClose()
        }catch (e:any) {
            toast({
                title:'Upload error',
                status:'error',
                description:3000,
                isClosable:true
            })
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <ModalAuth
            title="Add a song"
            description="Upload an mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDir={'column'} py={6} rowGap={5}>
                    <InputRef
                        id={'title'}
                        isDisabled={isLoading}
                        {...register('title',{required:true})}
                        placeholder={'Song title'}
                    />
                    <InputRef
                        id={'author'}
                        isDisabled={isLoading}
                        {...register('author',{required:true})}
                        placeholder={'Song author'}
                    />
                    <Box>

                        <Box mb={3}>
                            <Box pb={3}>
                                Select a song file
                            </Box>
                            <Button
                                h="40px"
                                w="full"
                                as="label"
                                htmlFor="song"
                                variant="outline"
                                colorScheme="teal"
                                size="md"
                                cursor="pointer"
                            >
                                Select image
                                <input
                                    id="song"
                                    accept=".mp3"
                                    type="file"
                                    style={{ display: "none" }}
                                    disabled={isLoading}
                                    {...register('song', { required: true })}
                                />
                            </Button>
                        </Box>

                        <Box>
                            <Box pb={3}>
                                Select a song image
                            </Box>
                            <Button
                                h="40px"
                                w="full"
                                as="label"
                                htmlFor="image"
                                variant="outline"
                                colorScheme="teal"
                                size="md"
                                cursor="pointer"
                            >
                                Select image
                                <input
                                    id="image"
                                    accept="image/*"
                                    type="file"
                                    style={{ display: "none" }}
                                    disabled={isLoading}
                                    {...register('image', { required: true })}
                                />
                            </Button>
                        </Box>
                    </Box>
                    <Button isLoading={isLoading} type={'submit'}>
                        Create
                    </Button>
                </Flex>
            </form>
        </ModalAuth>
    );
};

export default UploadModel;