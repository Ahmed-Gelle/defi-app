import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../../assets/eth.png'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { Styles } from './styles'
import Link from 'next/link'

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [userName, setUserName] = useState<string>()
  const connectWallet = ()=>{}


  return (
    <div className={Styles.wrapper}>
        <Link href="/" >
      <div className={Styles.headerLogo}>
        <Image src={logo} alt='uniswap' height={56} width={256} />
      </div>
      </Link>
      <div className={Styles.nav}>
        <div className={Styles.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${Styles.navItem} ${
              selectedNav === 'swap' && Styles.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${Styles.navItem} ${
              selectedNav === 'pool' && Styles.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${Styles.navItem} ${
              selectedNav === 'vote' && Styles.activeNavItem
            }`}
          >
            Vote
          </div>
          <a
            href='https://info.uniswap.org/#/'
            target='_blank'
            rel='noreferrer'
          >
            <div className={Styles.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={Styles.buttonsContainer}>
        <div className={`${Styles.button} ${Styles.buttonPadding}`}>
          <div className={Styles.buttonIconContainer}>
            <Image src={ethLogo} alt='eth logo' height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={Styles.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {true ? (
          <div className={`${Styles.button} ${Styles.buttonPadding}`}>
            <div className={Styles.buttonTextContainer}>{userName}</div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${Styles.button} ${Styles.buttonPadding}`}
          >
            <div className={`${Styles.buttonAccent} ${Styles.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
        <div className={`${Styles.button} ${Styles.buttonPadding}`}>
          <div className={`${Styles.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header