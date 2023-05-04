import { View, Text } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


const useAuth = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [celular, setCelular] = useState('')
    const [messageError, setMessageError] = useState('')

    const Login = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then( user => {
            console.log(user);
        });
    };

    const onRegister = () => {
        console.log("Register");
        if(!nombre.trim() || apellido.trim()) {
            console.log('Nombre y apellidos registrados');
            return;
        }
        else if(!email.trim() || !password.trim()) {
            console.log('Entra email y contrasella');
            return;
        }
        //database().ref('usuarios').push(data);

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return {
        Login,
        onRegister,
        email, 
        password,
        confirmPass,
        messageError,
        nombre,
        apellido,
        celular,
        setNombre,
        setApellido,
        setCelular,
        setEmail,
        setPassword,
        setConfirmPass,
        setMessageError
    }
}

export default useAuth