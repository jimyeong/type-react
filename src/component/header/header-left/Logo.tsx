import * as React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component{

    public render(){
        return(
            <div className="_logo">
                <Link to="/">
                    Logo
                </Link>
            </div>
        )
    }
}


export default Logo;