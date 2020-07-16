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
              node: document.getElementById('product-component-1594940282785'),
              moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "button": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px",
              "padding-left": "100px",
              "padding-right": "100px"
            },
            "quantityInput": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px"
            }
          },
          "buttonDestination": "modal",
          "contents": {
            "options": false
          },
          "text": {
            "button": "View product"
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
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px",
              "padding-left": "100px",
              "padding-right": "100px"
            },
            "quantityInput": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px"
            }
          },
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              "font-size": "14px",
              "padding-top": "15px",
              "padding-bottom": "15px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px"
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
            },
            "count": {
              "font-size": "14px"
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/