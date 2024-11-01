import Logo from "./icons/logotive.svg";
import People from './img/people.png';
import wallet from './icons/Wallet.svg';
import bag from './icons/bag.svg';
import chart from './icons/Chart.svg';

import TeamImg from "./img/family.png";
import LogoIcon from "./icons/logo.svg";
import FcIcon from "./icons/face.svg";
import InsIcon from "./icons/insta.svg";
import TwIcon from "./icons/tw.svg";


const cards = [
    {
        img: wallet,
        title: "Financial Report",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        img: bag,
        title: "Manage Investments",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        img: chart,
        title: "Financial Report",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    }
]

const family = [
    {
        id: 1,
        img: TeamImg,
        data: "January 01, 2021",
        title: "How to Start a Successful in 2020",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 2,
        img: TeamImg,
        data: "January 01, 2021",
        title: "Grow Your Business with Email Marketing",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
    {
        id: 3,
        img: TeamImg,
        data: "January 01, 2021",
        title: "The 4 Pillars Every Online Business",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
    },
]

export {
    InsIcon,
    TwIcon,
    FcIcon,
    TeamImg,
    family,
    LogoIcon,
    Logo, People, cards
}
