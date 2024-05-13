import { useState, useEffect } from 'react';

// ref 감시해서 넓이 추출하는 훅
function useElementWidth(ref) {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === ref.current) {
                    setWidth(entry.contentRect.width);
                }
            }
        });

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
        };
    }, [ref]);

    return width;
}

export default useElementWidth;