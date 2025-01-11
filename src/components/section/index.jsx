import React from 'react';

const Section = ({ bgColor = 'yellow', children }) => {
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
