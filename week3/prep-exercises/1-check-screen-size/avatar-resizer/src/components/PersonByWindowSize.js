import React from 'react';
import RandomHead from './RandomHead';
import useWithinWindowWidth from '../hooks/useWithinWindowWidth';

const avatars = {
    big: { name: 'Mithi', fixedProps: { eyebrows: 'raised', eyes: 'normal' } },
    medium: { name: 'Diana', fixedProps: { eyebrows: 'angry', eyes: 'happy' } },
    small: { name: 'Mikong', fixedProps: { eyebrows: 'sadConcerned', eyes: 'content' } },
};

const PersonByWindowSize = () => {
    const isBig = useWithinWindowWidth(1000, Infinity);
    const isMedium = useWithinWindowWidth(700, 999);
    const isSmall = useWithinWindowWidth(0, 699);

    if (isBig) {
        return <RandomHead fixedProps={avatars.big.fixedProps} />;
    }
    if (isMedium) {
        return <RandomHead fixedProps={avatars.medium.fixedProps} />;
    }
    if (isSmall) {
        return <RandomHead fixedProps={avatars.small.fixedProps} />;
    }

  return <p>Loading...</p>; // Fallback in case width is undefined briefly
};

export default PersonByWindowSize;
