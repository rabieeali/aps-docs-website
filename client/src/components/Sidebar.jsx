import Icon from "./Icon";
import { IoHome ,IoPieChart , IoMail , IoNotifications , IoSettingsSharp ,IoLogOut} from "react-icons/io5";
import '../App.css'

const menus = [
  <IoHome />,
  <IoPieChart />,
  <IoMail />,
  <IoNotifications />,
  <IoSettingsSharp />,
  <IoLogOut />,

];



function Sidebar() {
  return (
    <div className="flex flex-col gap-y-10 h-screen my-5 justify-evenly items-center  mx-auto ">
      {menus.map((menu, index) => (
        <Icon key={index} iconName={menu} className="text-2xl hover-animation md:text-4xl drop-shadow-2xl cursor-pointer" />
      ))}
    </div>
  );
}

export default Sidebar;

// IoHome
