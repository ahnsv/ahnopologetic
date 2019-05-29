import React from 'react'
import Head from 'next/head'

const Main = ({children}) => (
    <div className={`main`}>
        <Head>
            <style>{`
                body {
                    margin: 0;
                }
                html, body {
                    font-family: 'Nanum Gothic', san-serif;
                }
            `}</style>
            <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800"
                  rel="preload" as={`font`}/>
        </Head>
        {children}
        <style jsx global>{`
            @keyframes fade {
                0% {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0px);
                }
            }
           .main {
                height: 100vh;
                background: linear-gradient(to bottom, #aab4bf 0%, #cac0c0 100%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: 'Nanum Gothic', sans-serif;
           } 
           ::-webkit-scrollbar {width: 7px; height: 0;}
            ::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,0.0);
                border-radius: 10px;
                box-shadow: rgba(255,255,255,0.3) 0 0 0 1px;
            }
            *:hover::-webkit-scrollbar-thumb {background: rgba(116, 116, 116, 0.45)}
            ::-webkit-scrollbar-thumb:hover {background: rgba(0,0,0,0.55)}
        `}</style>
    </div>
);

export default Main