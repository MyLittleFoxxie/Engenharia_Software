import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import Button from '@mui/material/Button';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartCount, cartList, cartTotal }) => {

 const sucesso = () => toast("Pedido realizado com sucesso!");
 const erro = () => toast("Falha ao realizar o pedido!");

        const handleClick = (event) => {
          event.preventDefault();
          const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cartList)
                    };
              const apiUrl = 'http://localhost:8080/api/produtos/realizarPedido';
              fetch(apiUrl, requestOptions)
                  .then((response) => {
                    response.json()
                    if (response.ok) {
                    sucesso();
                        console.log('This is your response', response);
                    } else {

                    }
                  })
                  .catch(err => {
                    erro();
                     throw new Error(err)
              });
        };

  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
          <Button
            onClick={handleClick}
            className='pedido-header'
            medium
            variant="text">Realizar Pedido</Button>
            <ToastContainer />
        </div>
        )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
