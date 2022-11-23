import type { NextPage } from 'next'
import Header from '../components/Header'

const styles ={
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between'
}
const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <h2>Hello</h2>
      <h2>Bye</h2>
    </div>
  )
}

export default Home
