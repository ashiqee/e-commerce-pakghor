import { NextUIProvider } from "@nextui-org/react";


import React from 'react';


const MyApp = ({Component,pageProps}) => {
    return (
       <NextUIProvider>
        <Component{...pageProps}/>
       </NextUIProvider>
    );
};

export default MyApp;