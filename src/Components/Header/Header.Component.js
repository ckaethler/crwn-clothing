import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../Firebase/Firebase.Utils';
import CartIcon from '../CartIcon/CartIcon.Component';
import CartDropdown from '../CartDropdown/CartDropdown.Component';
import { SelectCartHidden } from '../../Redux/Cart/Cart.Selectors';
import { selectCurrentUser } from '../../Redux/User/User.Selectors';

import { ReactComponent as Logo} from '../../assets/images/icons/crown.svg';
import { TopNavContainer, LogoContainer, NavLinksContainer, NavLinkContainer } 
    from './Header.Styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <TopNavContainer>

            {/* LOGO */}
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>

            {/* TOP NAVIGATION LINKS */}
            <NavLinksContainer>
                <NavLinkContainer to="/shop">SHOP</NavLinkContainer>
                <NavLinkContainer to="/shop">CONTACT</NavLinkContainer>

                {/* SETS LINK ACCORDING TO USERS AUTHENTICATION STATUS */}
                {
                    currentUser ? 
                    <NavLinkContainer 
                        as='div' 
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </NavLinkContainer>
                    : 
                    <NavLinkContainer 
                        to='/signin'
                    >SIGN IN</NavLinkContainer>
                }

                {/* CART */}
                <CartIcon />
            </NavLinksContainer>

            {/* TOGGLES WHEN USER CLICKS CART DROPDOWN */}
            { hidden ? null: <CartDropdown />}
        </TopNavContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: SelectCartHidden
});

export default connect(mapStateToProps)(Header);