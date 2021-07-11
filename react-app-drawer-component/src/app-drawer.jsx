import React from 'react';
import MenuBackground from './menu-background';
import Menu from './menu.jsx';
import HamburgerButton from './hamburger-button';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOpenMenu(event) {
    this.setState({ isOpen: true });
  }

  handleCloseMenu(event) {
    this.setState({ isOpen: false });
  }

  render() {
    const menu = this.props.menu;
    const isOpen = this.state.isOpen;
    const dummyPage = (
      <div className="page"></div>
    );
    return (
        <div>
          <MenuBackground isOpen={isOpen} onSelect={this.handleCloseMenu} />
          <Menu menu={menu} isOpen={isOpen} onSelect={this.handleCloseMenu} />
          <div className="contents">
            <HamburgerButton onOpen={this.handleOpenMenu} />
            {dummyPage}
          </div>
        </div>
    );
  }
}
