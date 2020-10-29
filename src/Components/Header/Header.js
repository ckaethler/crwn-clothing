import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../Firebase/Firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { SelectCartHidden } from '../../Redux/Cart/CartSelectors';
import { selectCurrentUser } from '../../Redux/User/UserSelector'

import { ReactComponent as Logo} from '../../assets/images/icons/crown.svg';
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div 
                        className='option' 
                        onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null: <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: SelectCartHidden
});

export default connect(mapStateToProps)(Header);