(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[509],{"./src/stories/pages/MainPageInteraction.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuccessInteraction:function(){return SuccessInteraction},__namedExportsOrder:function(){return __namedExportsOrder}});var _SuccessInteraction$p,_SuccessInteraction$p2,_SuccessInteraction$p3,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),_pages_MainPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/pages/MainPage.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Pages/MainPage",decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})}]};__webpack_exports__.default=meta;var _play,TYPING_SPEED={delay:500},SuccessInteraction={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_pages_MainPage__WEBPACK_IMPORTED_MODULE_2__.Z,{})},play:(_play=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().mark((function _callee5(_ref){var canvasElement,step,canvas,purchaseProduct;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return canvasElement=_ref.canvasElement,step=_ref.step,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement),localStorage.clear(),purchaseProduct=function purchaseProduct(productOrder){var selectedCartIconButton=canvas.getAllByLabelText("cart-icon-button")[productOrder];return(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(selectedCartIconButton).toBeVisible(),selectedCartIconButton},_context5.next=6,step("Purchase Product",(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().mark((function _callee(){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)((function(){localStorage.clear();var secondCartIconButton=purchaseProduct(1);_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(secondCartIconButton)}));case 2:case"end":return _context.stop()}}),_callee)}))));case 6:return _context5.next=8,new Promise((function(resolve){return setTimeout(resolve,2e3)}));case 8:return _context5.next=10,step("Raise Quantity",(function(){var quantityInputButton=_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getByRole("spinbutton");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(quantityInputButton).toBeInTheDocument();var quantityInput=_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getByLabelText("quantity-input");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(quantityInput).toHaveValue(1),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.clear(quantityInput),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(quantityInput,"12",TYPING_SPEED)}));case 10:return _context5.next=12,new Promise((function(resolve){return setTimeout(resolve,2e3)}));case 12:return _context5.next=14,step("Purchase Another Product",(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().mark((function _callee2(){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return window.scrollTo({top:900,behavior:"smooth"}),_context2.next=3,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)((function(){var ninthCartIconButton=purchaseProduct(7);_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(ninthCartIconButton)}));case 3:case"end":return _context2.stop()}}),_callee2)}))));case 14:return _context5.next=16,new Promise((function(resolve){return setTimeout(resolve,2e3)}));case 16:return _context5.next=18,step("Purchase Another Product",(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().mark((function _callee3(){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)((function(){window.scrollTo({top:0,behavior:"smooth"})}));case 2:return _context3.next=4,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)((function(){var firstCartIcon=purchaseProduct(0);_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(firstCartIcon)}));case 4:case"end":return _context3.stop()}}),_callee3)}))));case 18:return _context5.next=20,new Promise((function(resolve){return setTimeout(resolve,2e3)}));case 20:return _context5.next=22,step("Cancel Purchasing Product",(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().mark((function _callee4(){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.X_)((function(){var firstInput=_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getAllByLabelText("quantity-input")[0];(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(firstInput).toBeInTheDocument(),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.clear(firstInput),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(firstInput,"0",TYPING_SPEED)}));case 2:case"end":return _context4.stop()}}),_callee4)}))));case 22:localStorage.clear();case 23:case"end":return _context5.stop()}}),_callee5)}))),function play(_x){return _play.apply(this,arguments)})};SuccessInteraction.parameters=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},SuccessInteraction.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_SuccessInteraction$p=SuccessInteraction.parameters)||void 0===_SuccessInteraction$p?void 0:_SuccessInteraction$p.docs),{},{source:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  render: () => <MainPage />,\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    localStorage.clear();\n    const purchaseProduct = (productOrder: number) => {\n      const allCartIconButtons = canvas.getAllByLabelText('cart-icon-button');\n      const selectedCartIconButton = allCartIconButtons[productOrder];\n      expect(selectedCartIconButton).toBeVisible();\n      return selectedCartIconButton;\n    };\n    await step('Purchase Product', async () => {\n      await waitFor(() => {\n        localStorage.clear();\n        const secondCartIconButton = purchaseProduct(1);\n        userEvent.click(secondCartIconButton);\n      });\n    });\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await step('Raise Quantity', () => {\n      const quantityInputButton = screen.getByRole('spinbutton');\n      expect(quantityInputButton).toBeInTheDocument();\n      const quantityInput = screen.getByLabelText('quantity-input');\n      expect(quantityInput).toHaveValue(1);\n      userEvent.clear(quantityInput);\n      userEvent.type(quantityInput, '12', TYPING_SPEED);\n    });\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await step('Purchase Another Product', async () => {\n      window.scrollTo({\n        top: 900,\n        behavior: 'smooth'\n      });\n      await waitFor(() => {\n        const ninthCartIconButton = purchaseProduct(7);\n        userEvent.click(ninthCartIconButton);\n      });\n    });\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await step('Purchase Another Product', async () => {\n      await waitFor(() => {\n        window.scrollTo({\n          top: 0,\n          behavior: 'smooth'\n        });\n      });\n      await waitFor(() => {\n        const firstCartIcon = purchaseProduct(0);\n        userEvent.click(firstCartIcon);\n      });\n    });\n    await new Promise(resolve => setTimeout(resolve, 2000));\n    await step('Cancel Purchasing Product', async () => {\n      await waitFor(() => {\n        const quantityInputs = screen.getAllByLabelText('quantity-input');\n        const firstInput = quantityInputs[0];\n        expect(firstInput).toBeInTheDocument();\n        userEvent.clear(firstInput);\n        userEvent.type(firstInput, '0', TYPING_SPEED);\n      });\n    });\n    localStorage.clear();\n  }\n}"},null===(_SuccessInteraction$p2=SuccessInteraction.parameters)||void 0===_SuccessInteraction$p2||null===(_SuccessInteraction$p3=_SuccessInteraction$p2.docs)||void 0===_SuccessInteraction$p3?void 0:_SuccessInteraction$p3.source)})});var __namedExportsOrder=["SuccessInteraction"]},"?4f7e":function(){}}]);