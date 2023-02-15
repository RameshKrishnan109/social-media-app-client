import { Avatar, Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import { UsePageStore } from '../zustand/PageStore';
import { useUserStore } from '../zustand/UserStore'

const MainPage = () => {
    const { user, SetUser } = useUserStore();
    const {setCurrentPage} = UsePageStore();

    const SignOut = ()=>{
        SetUser({id:'',name:'', avatar:''});
        setCurrentPage(0);
    }
    return (
        <>
            <Box bgColor={'whiteAlpha.600'} w='100%' h='80px' p='10px' shadow='lg' px='30px' pos='fixed'>
                <Flex dir='row' align='center'>
                    <Heading fontSize='30px'>Social media app</Heading>
                    <Spacer></Spacer>
                    <Flex gap='10px' align='center'>
                        <Avatar name='avatar' src={user.avatar as string} h='100%' w='47px' />
                        <Flex direction='column'>
                            <Text fontSize='20px'>{user.name}</Text>
                            <Text fontWeight='semibold' cursor='pointer' onClick={()=> SignOut()}>SignOut</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <Box bgColor='#c8d0de5d' w='100%' h='100vh'></Box>
        </>
    )
}

export default MainPage