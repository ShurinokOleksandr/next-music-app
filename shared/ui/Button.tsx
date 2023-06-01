import {Button, ButtonProps, forwardRef} from "@chakra-ui/react";


const ButtonRef = forwardRef<ButtonProps,'button' >(({children, disabled, type = 'button', ...props }, ref) => {
    return (
        <Button fontWeight={'normal'}  isDisabled={disabled} ref={ref} type={type} w={'full'} borderRadius={'full'} {...props}>
            {children}
        </Button>
    )
})

ButtonRef.displayName = 'btn'; // Set the display name

export default ButtonRef;