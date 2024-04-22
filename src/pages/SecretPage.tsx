import { FC, useState } from 'react'
import coinImage from "../assets/coin.svg";
import energyImage from "../assets/energy-icon.svg";

interface ISecretPageProps{
    balance: number,
    setBalance: (num :number) => void,
}

const SecretPage: FC<ISecretPageProps> = ({balance, setBalance}) => {



    return (
        <div className="page__content battle">
            <div className="stat">
                <div className="info__balance">
                    <img src={coinImage} alt="coin"/>
                    <p>{balance}</p>
                </div>
                <div className="info__energy">
                    <img src={energyImage} alt="energy"/>
                    <p>100/1000</p>
                </div>
            </div>

            <div className="battle__progress">
                <p>1</p>
            </div>

            <div className="list__wrap">
                <p className="list__title">Сила рода</p>
                <div className="list__items-wrap">
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                </div>
            </div>

            <div className="list__wrap">
                <p className="list__title">Великие подвиги</p>
                <div className="list__items-wrap">
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                    <div className="list__item">
                        <div className="list__side">
                            <p className="list__item-title">Славянский зажим яйцами</p>
                            <p className="list__item-description">+1 к силе войска</p>
                        </div>
                        <button className="btn list__item-btn"><img src={coinImage} alt="coin"/>100</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecretPage