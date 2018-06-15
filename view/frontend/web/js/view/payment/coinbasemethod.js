define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'coinbasemethod',
                component: 'CoinbaseCommerce_PaymentGateway/js/view/payment/method-renderer/coinbasemethod-method'
            }
        );
        return Component.extend({});
    }
);