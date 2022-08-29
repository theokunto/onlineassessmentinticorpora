import { Badge } from "@chakra-ui/react";

export const Meta = ({children})=>(
    <Badge colorScheme="red" mr={2}>
        {children}
    </Badge>
)