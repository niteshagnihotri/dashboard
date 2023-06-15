import MainHeader from './components/Main/Header'
import SubHeader from './components/Main/SubHeader'
import Task from './components/Main/Task'

export default function Home() {
  return (
    <div className="flex flex-col w-full py-8 px-6 sm:px-10">
      <MainHeader />
      <SubHeader />
      <div className="w-full">
        <Task/>
      </div>
    </div>
  )
}
