import type { NextPage } from 'next'
import Header from '../components/Header'
import Swap from '../components/Swap'
import Footer from '../components/Footer'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#1f2136] text-white select-none flex flex-col justify-between`,
}

const DEX: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Swap />
      <Footer />
    </div>
  )
}

export default DEX