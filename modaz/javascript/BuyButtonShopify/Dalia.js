/*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'protealingerie.myshopify.com',
            storefrontAccessToken: 'f38b4aa01b02818508381d413087a162',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '5488549462166',
              node: document.getElementById('product-component-1596471417698'),
              moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              },
              "carousel-button": {
                "display": "none"
              }
            },
            "title": {
              "font-size": "17px",
              "color": "#000000"
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "20px",
              "padding-left": "31px",
              "padding-right": "31px"
            },
            "price": {
              "font-size": "16px"
            },
            "compareAt": {
              "font-size": "13.6px"
            },
            "unitPrice": {
              "font-size": "13.6px"
            }
          },
          "contents": {
            "img": false,
            "imgWithCarousel": true
          },
          "text": {
            "button": "AGEGAR AL CARRITO"
          }
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "20px",
              "padding-left": "31px",
              "padding-right": "31px"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "20px"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          }
        },
        "toggle": {
          "styles": {
            "toggle": {
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/