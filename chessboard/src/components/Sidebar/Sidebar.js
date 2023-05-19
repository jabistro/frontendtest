import React, { useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = ({ clickedSquares }) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [clickedSquares]);

    return (
        <div className='sidebar'>
            <div className='intro'>
                <div className='intro__avatar'></div>
                <p className='intro__txt'>Hi, I'm chess champ Charles! I'll keep track of which squares you click from here on out.</p>
            </div>
            <div className='log' style={{ display: "flex", width: "100%", justifyContent: "space-around"}}>
                {clickedSquares && clickedSquares.map((square, idx) => {
                    return (
                        <div className='log__output__wrap' key={idx}>
                            <div className='log__output__avatar'></div>
                            <p className='log__output__txt'>{`You clicked on ${square}.`}</p>
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default Sidebar