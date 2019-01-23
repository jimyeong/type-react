import * as React from 'react';

class MenuBtn extends React.Component{

    public render(){
        return(
            <div>
                <button className="navbar-toggler aside-menu-toggler" type="button" data-toggle="aside-menu-show">
                    <span className="navbar-toggler-icon"/>
                </button>
            </div>
        )
    }
}


export default MenuBtn;