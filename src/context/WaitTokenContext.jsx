
import React, { useState } from 'react';
import { createContext } from 'react';

export const WaitTokenContext = createContext();

export const WaitTokenProvider = ({ children }) => {

    const [waitTokenCtx, setWaitTokenCtx] = useState(false);

    return (
        <WaitTokenContext.Provider value={{ waitTokenCtx, setWaitTokenCtx }}>
            { children }
        </WaitTokenContext.Provider>
    )
}