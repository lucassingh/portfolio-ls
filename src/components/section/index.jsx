import React from 'react';

const Section = ({ bgColor = '#1c1c1c', children }) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className="w-full h-auto p-[6%] flex justify-start items-center"
        >
            {children}
        </div>
    );
};

export default Section;
