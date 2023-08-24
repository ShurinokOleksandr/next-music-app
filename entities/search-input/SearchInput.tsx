'use client'


import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import qs from "query-string";
import {Input} from "@chakra-ui/input";
import {useColor} from "@/shared/config/ColorMode";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);

    const {color} = useColor()

    useEffect(() => {
        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query
        });

        router.push(url);
    }, [debouncedValue, router]);


    return (
        <Input
            color={color}
            placeholder={'Lets find song!'}
            value={value}
            border={'2px solid #424874'}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default SearchInput;