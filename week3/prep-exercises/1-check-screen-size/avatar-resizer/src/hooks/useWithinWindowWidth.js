import useWindowSize from './useWindowSize';
import { useDebugValue } from 'react';

const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
    if (maxWidth === Infinity) {
        return `(min-width: ${minWidth}px) => ${isWithin}`;
    }
    if (minWidth === 0) {
        return `(max-width: ${maxWidth}px) => ${isWithin}`;
    }
        return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`;
    };

    function useWithinWindowWidth(minWidth, maxWidth) {
    const { width } = useWindowSize();

    const isWithin = width !== undefined && width >= minWidth && width <= maxWidth;
    useDebugValue({ minWidth, maxWidth, isWithin }, formatDebugValueWithinWindow);

    return isWithin;
}

export default useWithinWindowWidth;
