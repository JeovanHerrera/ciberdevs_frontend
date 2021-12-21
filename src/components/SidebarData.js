import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Proyectos',
    path: '/projects',
    icon: <AiIcons.AiFillFolderAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Usuarios',
    path: '/users',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Inscripciones',
    path: '/subscriptions',
    icon: <AiIcons.AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Avances',
    path: '/Progress',
    icon: <GiIcons.GiSandsOfTime />,
    cName: 'nav-text'
  },
  {
    title: 'Ayuda',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];