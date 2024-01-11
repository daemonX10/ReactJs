import Sidebar, { SidebarItem } from './components/SideBar'
import { Home, Users, Settings, LogOut } from 'lucide-react'

const App = () => {
  return (
    <div className='w-1/4'>
    <Sidebar>
      <SidebarItem icon={<Home />} text="Home" active />
      <SidebarItem icon={<Users />} text="Users" alert={true} />
      <SidebarItem icon={<Settings />} text="Settings" />
      <SidebarItem icon={<LogOut />} text="Log Out" />
    </Sidebar>

    </div>
  )
}

export default App