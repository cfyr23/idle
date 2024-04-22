import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import {Routes, Route, Link} from "react-router-dom";
import "./styles/css/main.css";
import BoostsPage from "./pages/BoostsPage";
import EarnPage from "./pages/EarnPage";
import SecretPage from "./pages/SecretPage";

function App() {
    const [balance, setBalance] = useState<number>(0);
    const [clickValue, setClickValue] = useState<number>(1);
    const [totalClicked, setTotalClicked] = useState<number>(0);

    useEffect(() => {
        const storedBalance = localStorage.getItem("balance");
        const storedClickValue = localStorage.getItem("clickValue");
        const storedTotalClicked = localStorage.getItem("totalClicked");
        if (storedBalance && storedClickValue && storedTotalClicked) {
            const parsedBalance = JSON.parse(storedBalance);
            const parsedClickValue = JSON.parse(storedClickValue);
            const parsedTotalClicked = JSON.parse(storedTotalClicked);
            setBalance(parsedBalance);
            setClickValue(parsedClickValue);
            setTotalClicked(parsedTotalClicked);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("balance", JSON.stringify(balance));
        localStorage.setItem("clickValue", JSON.stringify(clickValue));
        localStorage.setItem("totalClicked", JSON.stringify(totalClicked));
    }, [balance, clickValue, totalClicked]);

    return (
        <div className="app">
            <div className="page">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                balance={balance}
                                setBalance={setBalance}
                                clickValue={clickValue}
                                totalClicked={totalClicked}
                                setTotalClicked={setTotalClicked}
                            />
                        }
                    ></Route>
                    <Route
                        path="/boosts"
                        element={
                            <BoostsPage
                                clickValue={clickValue}
                                setClickValue={setClickValue}
                                balance={balance}
                                setBalance={setBalance}
                            />
                        }
                    ></Route>
                    <Route
                        path="/earn"
                        element={
                            <EarnPage
                                balance={balance}
                                setBalance={setBalance}
                                totalClicked={totalClicked}
                            />
                        }
                    ></Route>
                    <Route
                        path="/secret"
                        element={
                            <SecretPage
                                balance={balance}
                                setBalance={setBalance}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
            <div className="nav">
                <Link to='/'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_14_1480)">
                            <path
                                d="M8.49618 28.8273L7.48925 30.1236L6.41106 31.5123C6.29231 31.6658 6.14043 31.788 5.96993 31.872C5.80025 31.9551 5.61025 32.0001 5.416 32.0001C4.57787 32.0001 3.973 31.1976 4.20462 30.3917L5.04787 27.454L5.47881 25.9542L8.49618 28.8273Z"
                                fill="#A67C52"/>
                            <path
                                d="M28.0855 32C27.8903 32 27.702 31.955 27.5315 31.8719C27.361 31.7879 27.2091 31.6657 27.0895 31.5122L26.0113 30.1235L25.0044 28.8272L28.0218 25.954L28.4528 27.4538L29.2968 30.3915C29.5276 31.1975 28.9236 32 28.0855 32Z"
                                fill="#A67C52"/>
                            <path
                                d="M28.4528 27.4539C27.7546 28.4439 26.9335 29.3414 26.0113 30.1235L25.0044 28.8272L28.0218 25.954L28.4528 27.4539Z"
                                fill="#936841"/>
                            <path
                                d="M31.0639 17.5558C31.0639 25.4612 24.6557 31.8694 16.7503 31.8694C8.84483 31.8694 2.43665 25.4612 2.43665 17.5558C2.43665 16.0254 2.67671 14.5502 3.12296 13.1675C3.32996 12.5219 3.58277 11.8959 3.87627 11.2944H29.6243C29.9178 11.8959 30.1706 12.5219 30.3776 13.1675C30.8238 14.5502 31.0639 16.0254 31.0639 17.5558Z"
                                fill="#A67C52"/>
                            <path
                                d="M5.47867 25.9541L8.4961 28.8274L7.48917 30.1236C6.56704 29.3415 5.74585 28.4439 5.04773 27.454L5.47867 25.9541Z"
                                fill="#936841"/>
                            <path
                                d="M6.16933 17.5559C6.16933 15.3104 6.68596 13.1854 7.60889 11.2944H3.87633C2.95339 13.1853 2.43677 15.3104 2.43677 17.5559C2.43677 25.4613 8.84496 31.8695 16.7504 31.8695C17.383 31.8695 18.0058 31.828 18.6167 31.7484C11.5931 30.8339 6.16933 24.8287 6.16933 17.5559Z"
                                fill="#936841"/>
                            <path
                                d="M28.2543 8.24725C28.2543 6.90069 27.1628 5.80919 25.8162 5.80919C25.769 5.80919 25.7222 5.81087 25.6757 5.8135C25.6994 5.67719 25.7123 5.53719 25.7123 5.39419C25.7123 4.04763 24.6208 2.95613 23.2742 2.95613C23.0494 2.95613 22.832 2.98719 22.6253 3.04419C22.4159 1.9105 21.4229 1.05144 20.2285 1.05144C19.7637 1.05144 19.3292 1.18163 18.9595 1.4075C18.5712 0.57625 17.7282 0 16.75 0C15.7719 0 14.9289 0.57625 14.5404 1.40744C14.1707 1.18162 13.7363 1.05138 13.2714 1.05138C12.077 1.05138 11.084 1.91038 10.8746 3.04413C10.6679 2.98713 10.4504 2.95606 10.2257 2.95606C8.87911 2.95606 7.78761 4.04756 7.78761 5.39412C7.78761 5.53713 7.80061 5.67712 7.82423 5.81344C7.77767 5.81081 7.73092 5.80912 7.68367 5.80912C6.33711 5.80912 5.24561 6.90063 5.24561 8.24719"
                                fill="#FDBB00"/>
                            <path
                                d="M12.0102 5.80919C12.0574 5.80919 12.1042 5.81087 12.1507 5.8135C12.127 5.67719 12.1141 5.53731 12.1141 5.39419C12.1141 4.04775 13.2056 2.95613 14.5522 2.95613C14.777 2.95613 14.9945 2.98719 15.2011 3.04419C15.4105 1.9105 16.4035 1.05144 17.5979 1.05144C18.0627 1.05144 18.4972 1.18163 18.8669 1.4075C18.8813 1.37663 18.8975 1.34694 18.9132 1.31675C18.5072 0.535063 17.6919 0 16.75 0C15.7719 0 14.9289 0.576187 14.5404 1.40744C14.1707 1.18162 13.7363 1.05138 13.2714 1.05138C12.0771 1.05138 11.084 1.91038 10.8747 3.04413C10.6679 2.98713 10.4505 2.95606 10.2257 2.95606C8.87929 2.95606 7.78766 4.04756 7.78766 5.39412C7.78766 5.53713 7.80073 5.67712 7.82429 5.81344C7.77773 5.81081 7.73098 5.80912 7.68379 5.80912C6.33723 5.80912 5.24573 6.90063 5.24573 8.24719H9.57217C9.57217 6.90069 10.6637 5.80919 12.0102 5.80919Z"
                                fill="#EDAB06"/>
                            <path
                                d="M14.5598 6.52685C14.5598 5.4871 13.7169 4.64429 12.6772 4.64429C11.6376 4.64429 10.7947 5.48716 10.7947 6.52685"
                                fill="#EDAB06"/>
                            <path
                                d="M21.0549 5.35937C21.0549 4.31962 20.212 3.47681 19.1724 3.47681C18.1327 3.47681 17.2898 4.31968 17.2898 5.35937"
                                fill="#EDAB06"/>
                            <path
                                d="M25.5541 8.24731C25.5541 7.20756 24.7112 6.36475 23.6715 6.36475C22.6318 6.36475 21.7889 7.20762 21.7889 8.24731"
                                fill="#EDAB06"/>
                            <path
                                d="M8.21718 11.5133H4.03587C3.52012 11.5133 3.05349 11.3046 2.71587 10.967C2.37824 10.6293 2.16956 10.1628 2.16956 9.64695C2.16956 8.61626 3.00512 7.78064 4.03587 7.78064H9.53974H18.7016H29.4641C29.9791 7.78064 30.4456 7.98933 30.7841 8.32695C31.1217 8.66458 31.3304 9.13114 31.3304 9.64695C31.3304 10.6776 30.4949 11.5133 29.4641 11.5133H11.1015"
                                fill="#A67C52"/>
                            <path
                                d="M30.3776 13.1674H3.12292C3.32992 12.5218 3.58274 11.8957 3.87624 11.2943H29.6243C29.9178 11.8957 30.1706 12.5218 30.3776 13.1674Z"
                                fill="#936841"/>
                            <path
                                d="M7.25943 9.64695C7.25943 8.61626 8.09499 7.78064 9.12574 7.78064H4.03587C3.00518 7.78064 2.16956 8.6162 2.16956 9.64695C2.16956 10.1627 2.37824 10.6293 2.71587 10.967C3.05349 11.3046 3.52006 11.5133 4.03587 11.5133H8.21724H9.12581C8.61006 11.5133 8.14343 11.3046 7.80581 10.967C7.46812 10.6293 7.25943 10.1628 7.25943 9.64695Z"
                                fill="#936841"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_14_1480">
                                <rect width="32" height="32" fill="white" transform="translate(0.75)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Казна</p>
                </Link>
                <Link to='/secret'>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/anonymous-mask.png"
                         alt="anonymous-mask"/>
                    <p>Битва</p>
                </Link>
                <Link to='/earn'>
                    <img width="40" height="40" src="https://img.icons8.com/officel/40/cheap-2.png" alt="cheap-2"/>
                    <p>Клады</p>
                </Link>
                <Link to='/boosts'>
                    <img width="40" height="40"
                         src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-Vodka-beverage-goofy-color-kerismaker.png"
                         alt="external-Vodka-beverage-goofy-color-kerismaker"/>
                    <p>Други</p>
                </Link>
            </div>
        </div>
    );
}

export default App;
