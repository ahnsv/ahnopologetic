import React from 'react'

const Window = ({favicon, title, children, theme}) => {
    return (
        <>
            <div className={`window ${theme === 'preview' ? 'preview' : ''}`}>
                <div className="window--title">
                    <div className="window--title__favicon">
                        {
                            favicon
                        }
                    </div>
                    <div className="window--title__text">
                        {title}
                    </div>
                </div>
                <div className="window--content">
                    {children}
                </div>
            </div>
            <style jsx>{`
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
           .window {
                min-width: 13em;
                max-width: 80vw;
                min-height: 13em;
                max-height: 80vh;
                border-radius: 10px;
                background-color: #f6f6f6;
                box-shadow: 3px 3px 3px #00000020;
                display: flex;
                flex-direction: column;
                opacity: 0;
                visibility: hidden;
                animation: fade 500ms linear 0.2s both;
                width: 100%;
                height: 100%;
           }
           .window.preview {
                width: min-content;
                height: min-content;
                animation: unset;
                opacity: unset;
                visibility: unset;
           }
           .preview .window--content {
                animation: unset;
           }
           .window.full {
                width: -webkit-fill-available;
                height: -webkit-fill-available;
           }
           .window > div {
                padding: 0 5vw;
           }
           .window--title {
                height: 15%;
                background-color: #ebebeb;
                border-radius: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
           }
           .window--title > div {
           }
           .window--title__favicon {
                width: 40px;
                height: 100%;
           }
           .window--title__text {
                flex: 1 1 auto;
           }
           .window--content {
                opacity: 0;
                visibility: hidden;
                height: 100%;
                overflow-y: auto;
                animation: fade 500ms linear 0.4s forwards;
           }
        `}</style>
        </>
    )
}
export default Window