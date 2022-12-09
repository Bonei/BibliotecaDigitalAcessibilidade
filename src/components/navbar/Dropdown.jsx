import React from 'react';
import { MenuItemsNav } from './index';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  const depthLevelResult = depthLevel + 1;
  const dropdownClass = depthLevelResult > 1 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        // <li key={index} className="menu-items">
        //   <a href={submenu.url}>{submenu.title}</a>
        // </li>
        <MenuItemsNav items={submenu} key={index} depthLevel={depthLevelResult} />
      ))}
    </ul>
  );
};

export default Dropdown;
