import React from 'react';
import { BigHead } from '@bigheads/core';

const randomizeProps = () => ({
  hat: ['none', 'beanie', 'turban'][Math.floor(Math.random() * 3)],
  hatColor: ['red', 'blue', 'green'][Math.floor(Math.random() * 3)],
  accessory: ['roundGlasses', 'tinyGlasses', 'none'][Math.floor(Math.random() * 3)],
  clothing: ['shirt', 'dressShirt', 'vneck'][Math.floor(Math.random() * 3)],
  clothingColor: ['black', 'white', 'pink'][Math.floor(Math.random() * 3)],
  graphic: ['react', 'vue', 'angular'][Math.floor(Math.random() * 3)],
});

const RandomHead = ({ fixedProps }) => {
    const randomProps = randomizeProps();
    return <BigHead {...fixedProps} {...randomProps} />;
};

export default RandomHead;
