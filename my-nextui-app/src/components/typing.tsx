import TypeWriter from 'typewriter-effect'
import './typing.css'

export default function HelloWorld(){
    return (
        <div className='App'>
            <TypeWriter  onInit={(typewriter) => {
                typewriter
                    .typeString('Drive Straight. ยินดีต้อนรับ ')  
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Welcome to Drive Straight.')
                    .pauseFor(1000)
                    .start()
            }} />
        </div>
    )
}