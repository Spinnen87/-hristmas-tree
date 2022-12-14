import React from "react";
import {Container, Item, Item2} from "./styles";


const imgs = [
    {
        src: './images/wow.png',
        alt: 'image alt text'
    },
    {
        src: './logo.svg',
        alt: 'image alt text'
    },
    {
        src: './logo.svg',
        alt: 'image alt text'
    },
    {
        src: './images/wow.png',
        alt: 'image alt text'
    },
    {
        src: './logo.svg',
        alt: 'image alt text'
    },
    {
        src: './logo.svg',
        alt: 'image alt text'
    },
];


export const Circle = () => {
    const avatarsCount = imgs.length;
    const tan = Math.tan(Math.PI/avatarsCount);

    return (
            <Container m={avatarsCount} tan={tan}>
                {imgs.map((img, index) => (
                    <Item key={index} i={index}>
                        <Item2>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/happy-new-c414d.appspot.com/o/avatars%2Ftrt-1670877017027?alt=media&token=cd4db903-284f-4bc9-aa95-25fdc95517e0'}
                                 alt={img.alt}
                                 className={'img'}
                            />
                        </Item2>
                    </Item>
                ))}
            </Container>
    );

};