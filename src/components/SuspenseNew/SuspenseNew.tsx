
import {Suspense, use} from 'react'

const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// const fetchMessage = async () => {
//     await delay(1000)
//     return 'Hello, world!'
// 

// const Message = () => {
    // //状态
    // const [loading, setLoading] = useState(false);
    // const [message, setMessage] = useState('');
    // //副作用
    // useEffect(() => {
    //     setLoading(true);
    //     fetchMessage().then(
    //         (message) => {
    //             setMessage(message);
    //         }
    //     ).finally(() => {
    //         setLoading(false);
    //     })
    // }, [])
    // return <div>{loading ? 'Loading...' : message}</div>
// }
const fetchMessage = (): Promise<string> => {
    return new Promise((resolve) => {
        delay(1000).then(() => {
            resolve('Hello, world!')
        })
    })
}

interface MessageProps {
    messagePromise: Promise<string>
}

const Message = ({ messagePromise }: MessageProps) => {
    const message = use(messagePromise)
    return <div>Message:{message}</div>
}
const SuspenseNew = () => {
    const messagePromise = fetchMessage()
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Message messagePromise={messagePromise} />
            </Suspense>
        </div>
    )
}

export default SuspenseNew;