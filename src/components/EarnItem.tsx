import { FC, useEffect, useState } from 'react'
import swordImage from "../assets/swords-icon.svg"
import gotoImage from "../assets/goto-icon.svg";

interface IEarnItemProps{
    id: number,
    title: string,
    award: number,
    goal: number,
    totalClicked: number,
    balance: number,
    setBalance: (num :number) => void,
}

const EarnItem: FC<IEarnItemProps> = ({id, title, award, goal, totalClicked, balance, setBalance}) => {
    const [isBalanceUpdated, setIsBalanceUpdated] = useState<boolean>(false);

    useEffect(() => {
        if(totalClicked >= goal && isBalanceUpdated === false){
            setBalance(balance + award);
            setIsBalanceUpdated(true);
        }
    }, [totalClicked, goal, balance, award, setBalance, setIsBalanceUpdated, isBalanceUpdated])

    return (
        <div className="list__item">
            <div className="list__side">
                <p className="list__item-title">{title}</p>
                <p className="list__item-description"><img src={swordImage} alt="sword"/>{award}</p>
            </div>
            <img src={gotoImage} alt=""/>
        </div>
    )
}

export default EarnItem