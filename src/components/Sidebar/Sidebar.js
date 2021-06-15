import React from 'react';
import "./sidebar.scss";
import { sidebarMenuItems } from '../../constants/constants';
import PropTypes from 'prop-types';


const Sidebar = ({menuItemList}) => {
  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-list">
        {menuItemList?.map(menuList => {
          return <li>{menuList}</li>
        })}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  menuItemList: PropTypes.array,
}

Sidebar.defaultProps = {
  menuItemList: ['Page1' ,'Page2', 'Page 3'],
}

export default Sidebar;
