import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, IconButton, Input, Spacer, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon } from "@chakra-ui/icons"

const CreatePost = () => {
    return (
        <Box w='100%' h='100vh' bgColor='#0505052d' position='absolute' left='0' top='0'>
            <Flex justify='center' align='center' w='100%' h='100%'>
                <Card w='500px'>
                    <CardHeader>
                        <Flex>
                            <Spacer />
                            <Heading size='lg'>
                                Create Post
                            </Heading>
                            <Spacer />
                            <IconButton aria-label='close' icon={<CloseIcon />} isRound />
                        </Flex>
                    </CardHeader>
                    <Divider colorScheme='facebook' />
                    <CardBody>
                        <VStack>
                            <Textarea h='200px' />
                            <Input type='file' />
                        </VStack>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>Post</Button>
                    </CardFooter>
                </Card>
            </Flex>
        </Box>
    )
}

export default CreatePost