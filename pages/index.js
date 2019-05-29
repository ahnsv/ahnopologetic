import React from 'react'
import Main from '../layout/main'
import Window from '../components/Window'
import PreviewWindow from '../components/PreviewWindow'

const Index = () => (
    <Main>
        <div className="top-nav">
            What do you want?
        </div>
        <div className="dashboard">
            <div className="dashboard--row">
                <h1>Hello, this is Sangtae Ahn</h1>
                <PreviewWindow title={`프로필`} description={`안상태가 누구죠?`} link={`/windows`}>
                    <Window title={`hello`} theme={`preview`}>
                        <h1>hello</h1>
                    </Window>
                </PreviewWindow>
            </div>
            <div className="dashboard--row">
                <h1>Projects</h1>
            </div>
            <div className="dashboard--row">
                <h1>Career</h1>
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
            .top-nav {
                margin-bottom: auto;
                height: 7%;
                width: 100%;
            }
            .dashboard {
                flex: 1 1 auto;
                width: 100%;
                overflow-y: auto;
            }
            .dashboard--row {
                padding: 0 5vw;
                animation: fade 500ms linear;
                margin: 3vh 0;
            }
        `}</style>
    </Main>
);

export default Index