import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnim = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                'Chat with your own AI',
                1000,
                'Powered by OpenAi',
                2000,
                'Very Own Customized GPT',
                3000,
                
            ]}
            speed={50}
            style={{ fontSize: '60px', color: "white", display: "inline-block", textShadow: "1px 1px 20px #000",  }}
            repeat={Infinity}
        />
    )
}

export default TypingAnim
