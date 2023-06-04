import {Input, InputProps} from "@chakra-ui/input";
import {forwardRef} from "@chakra-ui/react";



const InputRef =  forwardRef<InputProps,'input' >(({children,disabled, type = 'input', ...props }, ref) => {
    return (
        <Input
            type={type}
            isDisabled={disabled}
            ref={ref}
            {...props}
        />
    )
});

InputRef.displayName = "Input";

export default InputRef