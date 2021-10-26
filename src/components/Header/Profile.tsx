import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Marcos Felipe</Text>
                <Text color="gray.300" fontSize="small">
                    nodmarcos@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Marcos Felipe" src="https://github.com/nodMarcos.png" />

        </Flex>
    )
}