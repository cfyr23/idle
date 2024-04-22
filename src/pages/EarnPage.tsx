import { FC } from 'react'
import EarnList from '../components/EarnList'
import coinImage from "../assets/coin.svg";

interface IEarnPageProps{
    balance: number,
    setBalance: (num :number) => void,
    totalClicked: number,
}

const EarnPage: FC<IEarnPageProps> = ({totalClicked, balance, setBalance}) => {

    return (
        <div className="page__content earn">
            <div className="stat">
                <div className="info__balance">
                    <img src={coinImage} alt="coin"/>
                    <p>{balance}</p>
                </div>
            </div>

            <EarnList
                totalClicked={totalClicked}
                balance={balance}
                setBalance={setBalance}
            />

        </div>
    )
}

export default EarnPage