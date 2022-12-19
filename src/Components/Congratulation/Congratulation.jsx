import React, { useEffect, useState} from "react";
import { HNY_CURRENT_USER} from '../../consts'
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import {MessagesList} from './MessagesList';
import {SendCongratulation} from './SendCongratulation'
import {CongratulationContainer} from './styles'


export const Congratulation = () => {

    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
       const userId = localStorage.getItem(HNY_CURRENT_USER);
       
       if(userId) {
        const getUserData =  async() => {
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCurrentUser(docSnap.data())
              }   
        }

        getUserData()
       }
    }, []);


    return (
        <CongratulationContainer>
            <MessagesList />
            {currentUser && <SendCongratulation user={currentUser}/>}
        </CongratulationContainer>
        
        
    )
}