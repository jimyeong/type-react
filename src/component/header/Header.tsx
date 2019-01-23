import * as React from 'react';
import Logo from './header-left/Logo';
import NavBtns from './header-left/NavBtns';
import MenuBtn from './header-left/MenuBtn';


class Header extends React.Component{

    public render(){
        return(
            <div className="app-header navbar">
                <header className="header app-header navbar clearfix">
                    <div className="header-column header--left">
                        <Logo/>
                        <MenuBtn/>
                        <NavBtns/>
                        <div className="blue">
                            dasd
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default Header;