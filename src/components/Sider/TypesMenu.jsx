import React, { useState } from 'react';
import { LuPalmtree } from "react-icons/lu";
import { MdOutlineLocalHotel } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { Menu } from 'antd';

const items = [
  {
    label: 'Attractions',
    key: '1',
    icon: <LuPalmtree />,
  },
  {
    label: 'Hotels',
    key: '2',
    icon: <MdOutlineLocalHotel />,
  },
  {
    label: 'Restaurants',
    key: '3',
    icon: <IoFastFoodOutline />,
  }
];

const TypesMenu = ({ selected, setSelected }) => {
  const [current, setCurrent] = useState(selected);
  const onClick = (e) => {
    setCurrent(e.key);
    setSelected(e.key);
  };

  return <Menu style={{ width: '100%', justifyContent: 'center' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TypesMenu;