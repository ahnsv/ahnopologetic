import React from 'react'
import Link from 'next/link'

const PreviewWindow = ({title, description, icon, children, link}) => {
    return (
        <div className={`preview`}>
            <div className="preview-col meta">
                <div className="preview-icon">
                    {icon}
                </div>
                <div className="preview-title">
                    {title}
                </div>
                <div className="preview-description">
                    {description}
                </div>
            </div>
            <Link href={link}>
                {/*TODO: show card-deck like UI without absolute*/}
                <div className="preview-col windows">
                    <div className="preview-windows">
                        {children}
                    </div>
                    <div className="preview-windows">
                        {children}
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .preview {
                    background-color: #dbd7d680;
                    box-shadow: 3px 3px 3px #00000020;
                    border-radius: 10px;
                    height: 50vh;
                    max-width: 70vw;
                    min-width: 40vw;
                    display: flex;
                    flex-direction: row;
                    padding: 30px;
                    animation: fade 500ms linear 0.2s;
                }
                .preview-col {
                    flex: 1;
                    padding: 0 3%;
                }
                .preview-col.meta {
                    display: flex;
                    flex-direction: column;
                }
                .preview-col.windows .preview-windows {
                    position: absolute;
                    transform: rotate(-10deg) translateX(-30px) translateY(10px);
                    box-shadow: 8px 0px 20px 0px #00000020;
                    z-index: 1;
                }
                .preview-windows:last-child {
                    transform: translateX(20px) rotate(10deg) !important;
                    z-index: 0 !important;
                }
                .preview-title, .preview-description {
                    font-weight: bolder;
                    margin: 10px 0;
                }
                .preview-title {
                    font-size: 1.5em;
                }
                .preview-description {
                    font-size: 1.3em;
                }
            `}</style>
        </div>
    )
};
export default PreviewWindow