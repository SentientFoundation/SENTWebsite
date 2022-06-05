import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'
import ERG from '../assets/ERG_Orange.svg'
import SENT from '../assets/SENT.svg'

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[1.1rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[1.1rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center font-semibold text-[1.1rem] text-[#4F90EA]`,
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={SENT} alt='SENT' height={60} width={60} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('liquidity pool')}
            className={`${style.navItem} ${
              selectedNav === 'liquidity pool' && style.activeNavItem
            }`}
          >
            Liquidity Pool
          </div>
          <div
            onClick={() => setSelectedNav('staking')}
            className={`${style.navItem} ${
              selectedNav === 'staking' && style.activeNavItem
            }`}
          >
            Staking
          </div>
          <div
            onClick={() => setSelectedNav('charts')}
            className={`${style.navItem} ${
              selectedNav === 'charts' && style.activeNavItem
            }`}
          >
            Charts <FiArrowUpRight />
          </div>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <div className={style.navItem}>
              Home
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ERG} alt='ERG logo' height={25} width={25} />
          </div>
          <p>Ergo</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header