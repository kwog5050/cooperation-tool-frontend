import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { width } from 'reduxs/slice/sideMenuSlice';

const useSetSideMenuWidth = (containerRef) => {
    const sideMenuContainerDispatch = useDispatch();

    useEffect(() => {
        const resize = () => {
            if (containerRef.current) {
                sideMenuContainerDispatch(width(containerRef.current.clientWidth));
            }
        };

        resize();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [containerRef, sideMenuContainerDispatch]);

    return null;
};

export default useSetSideMenuWidth;