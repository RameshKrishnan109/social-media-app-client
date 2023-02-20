import React, { useEffect } from 'react';
import { app } from "../utilities/firebaseInit";
import { Button, Center, Heading } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { apiRequest } from '../utilities/ApiRequests';
import { SetUser, User } from '../zustand/UserStore';
import { setCurrentPage } from '../zustand/GlobalStore';

interface LoginResponse{
    id:string,
    name:string|null,
    message:string
}

const LoginPage = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const Login = (user: User)=>{
        apiRequest.post<LoginResponse>("/signIn", user).then((res) => {
           SetUser(user);
           setCurrentPage(1);
        })
    }

    return (
        <Center backgroundColor='#e6e6e6' w='100%' h='100vh' flexDirection='column' gap={7}>
            <Heading color='#2626264'>Social media app</Heading>
            <Button colorScheme='blue' fontSize={20} p={7} onClick={() => {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        const user = result.user;
                        Login({id: user.uid, name: user.displayName, avatar: user.photoURL})
                    }).catch((error) => {
                        console.error(error);
                    });
            }}>Login with Google</Button>
        </Center>
    )
}

export default LoginPage