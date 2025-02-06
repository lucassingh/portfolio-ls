import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#baf701',
                boxShadow: '0 0 30px #baf701, 0 0 30px #baf701, 0 0 30px #baf701',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;