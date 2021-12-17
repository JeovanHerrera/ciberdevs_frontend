import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiFillFolderAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Subscriptions',
    path: '/subscriptions',
    icon: <AiIcons.AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Progress',
    path: '/Progress',
    icon: <GiIcons.GiSandsOfTime />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];