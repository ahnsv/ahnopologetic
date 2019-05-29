import React from 'react'
import Main from "../../layout/main";
import Window from "../../components/Window";

const WindowPage = () => {
    return (
        <Main>
            <Window title={`hello`}>
                <h1>Hello</h1>
            </Window>
        </Main>
    )
};

export default WindowPage