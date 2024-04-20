import { FC, useEffect, useState } from 'react'
import coinImage from '../assets/coin.webp'
import { Link } from 'react-router-dom'
import CanvasClick from '../components/CanvasClick';

interface IHomeProps{
    balance: number,
    setBalance: (num :number) => void,
    clickValue: number,
    totalClicked: number,
    setTotalClicked: (num: number) => void,
}

const HomePage: FC<IHomeProps> = ({balance, setBalance, clickValue, totalClicked, setTotalClicked}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isCanvasShowed, setIsCanvasShowed] = useState<boolean>(false);
    const [isImageClicked, setIsImageClicked] = useState<boolean>(false);

    const handleImageClick = () => {
        setIsImageClicked(true);
        setIsCanvasShowed(true);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        setTimeout(() => {
            setIsImageClicked(false)
        }, 50)
    }, [isImageClicked])

    useEffect(() => {
        setTimeout(() => {
            setIsCanvasShowed(false)
        }, 50)
    }, [isCanvasShowed])

    return (
        <div className='home'>
            <div className="home__balance">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_2379)">
                        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FFAD38"/>
                        <path d="M24 45.3626C35.7982 45.3626 45.3626 35.7982 45.3626 24C45.3626 12.2017 35.7982 2.63733 24 2.63733C12.2017 2.63733 2.63733 12.2017 2.63733 24C2.63733 35.7982 12.2017 45.3626 24 45.3626Z" fill="#FFC066"/>
                        <path d="M8.63642 15.0461C8.4912 15.0461 8.34401 15.0061 8.21229 14.9222C7.84357 14.6876 7.73501 14.1986 7.96976 13.83C11.4851 8.3078 17.4777 5.01099 24 5.01099C30.5223 5.01099 36.5149 8.3077 40.0302 13.8299C40.2649 14.1985 40.1563 14.6875 39.7877 14.9221C39.419 15.157 38.9301 15.0482 38.6954 14.6796C35.4721 9.61617 29.9784 6.59339 24 6.59339C18.0215 6.59339 12.5279 9.61636 9.30457 14.6796C9.15382 14.9165 8.89789 15.0461 8.63642 15.0461Z" fill="#FD9A0C"/>
                        <path d="M20.3813 12.132H18.8462C18.4092 12.132 18.0549 12.4862 18.0549 12.9232C18.0549 13.3602 18.4092 13.7145 18.8462 13.7145H21.4363L20.3813 12.132Z" fill="#CA7B0A"/>
                        <path d="M29.1538 12.132H27.6187L26.5637 13.7144H29.1538C29.5908 13.7144 29.9451 13.3601 29.9451 12.9231C29.9451 12.4861 29.5908 12.132 29.1538 12.132Z" fill="#CA7B0A"/>
                        <path d="M33.0835 14.2551C31.209 14.2551 29.6895 15.7748 29.6895 17.6491H27.6187V12.1318H26.4423C25.7427 12.1318 25.1756 12.6989 25.1756 13.3986V17.649H24H22.8245V13.3986C22.8245 12.6989 22.2574 12.1318 21.5578 12.1318H20.3814V17.6491H18.3106C18.3106 15.7747 16.791 14.2551 14.9166 14.2551C13.0423 14.2551 11.5226 15.7748 11.5226 17.6491V30.562C15.1374 30.562 18.0937 27.7425 18.3124 24.1828C18.3124 24.1823 18.4934 24.1818 18.4934 24.1813H20.2999C20.2999 25.8524 21.2803 27.2792 22.6623 27.8495L19.6695 33.8939C19.6695 33.8939 21.4684 34.7077 24.0001 34.7077C26.5319 34.7077 28.3308 33.8939 28.3308 33.8939L25.338 27.8495C26.72 27.2792 27.7004 25.8523 27.7004 24.1813H29.5068C29.5068 24.1819 29.6878 24.1824 29.6878 24.1828C29.9065 27.7426 32.8627 30.562 36.4776 30.562V17.6491C36.4775 15.7747 34.9579 14.2551 33.0835 14.2551Z" fill="#FD9A0C"/>
                        <path d="M26.9011 42.6022H21.0989C20.6619 42.6022 20.3076 42.2479 20.3076 41.8109C20.3076 41.3739 20.6619 41.0197 21.0989 41.0197H26.9011C27.338 41.0197 27.6923 41.3739 27.6923 41.8109C27.6923 42.2479 27.338 42.6022 26.9011 42.6022Z" fill="#FD9A0C"/>
                        <path d="M29.8021 39.0506H18.1977C17.7608 39.0506 17.4065 38.6964 17.4065 38.2594C17.4065 37.8224 17.7608 37.4681 18.1977 37.4681H29.8021C30.2391 37.4681 30.5934 37.8224 30.5934 38.2594C30.5934 38.6964 30.2391 39.0506 29.8021 39.0506Z" fill="#FD9A0C"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_14_2379">
                            <rect width="48" height="48" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>{balance}</p>
            </div>
            <div 
                className={isImageClicked ? "home__coin clicked" : "home__coin"} 
                onClick={(e) => {
                    handleImageClick()
                    setBalance(balance + clickValue)
                    setTotalClicked(totalClicked + clickValue)
                    handleMouseMove(e)
                }}
            >
                <img src={coinImage} alt="coin" />
            </div>

            {/* canvas for click value */}
            {position.x && position.y && isCanvasShowed ? <CanvasClick x={position.x} y={position.y} click={clickValue} /> : null}

            <div className="home__nav">
                <Link to='/secret'>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/anonymous-mask.png" alt="anonymous-mask"/>
                    <p>Секрет</p>
                </Link>
                <Link to='/earn'>
                    <img width="40" height="40" src="https://img.icons8.com/officel/40/cheap-2.png" alt="cheap-2"/>
                    <p>Подгоны</p>
                </Link>
                <Link to='/boosts'>
                    <img width="40" height="40" src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-Vodka-beverage-goofy-color-kerismaker.png" alt="external-Vodka-beverage-goofy-color-kerismaker"/>
                    <p>Киоск</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
