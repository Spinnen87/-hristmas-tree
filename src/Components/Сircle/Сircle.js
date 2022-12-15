import React, {useEffect, useState} from "react";
import {onSnapshot } from "firebase/firestore"; 
import {Container, Item, Item2} from "./styles";
import {usersCollectionsRef} from "../../firebase-config";


export const Circle = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        return onSnapshot(usersCollectionsRef, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        });
    }, [])


    const avatarsCount = users.length < 8 ? 8 : users.length;
    const tan = Math.tan(Math.PI/avatarsCount);

    return (
            <Container m={avatarsCount} tan={tan}>
                {users.map((user, index) => (
                    <Item key={user.id} i={index}>
                        <Item2>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/happy-new-c414d.appspot.com/o/avatars%2Ftrt-1670877017027?alt=media&token=cd4db903-284f-4bc9-aa95-25fdc95517e0'}
                                 alt={user.name}
                                 className={'img'}
                            />
                        </Item2>
                    </Item>
                ))}
            </Container>
    );

};