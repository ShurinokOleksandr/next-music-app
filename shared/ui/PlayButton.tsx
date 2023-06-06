'use client'

import React from 'react';
import {FaPlay} from "react-icons/fa";
import {Flex} from "@chakra-ui/react";

const PlayButton = () => {
    return (
        <Flex
            rounded={'full'}
            align={'center'}
            justify={'center'}
            bg={'green'}
            p={4}
            _hover={{bg:'bg.100'}}
        >
            <FaPlay color={'black'}/>
        </Flex>
    );
};

export default PlayButton;