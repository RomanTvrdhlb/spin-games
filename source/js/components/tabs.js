import {
  removeClassInArray,
  addCustomClass,
  toggleCustomClass,
} from "../functions/customFunctions";
import vars from "../_vars";

import { isMobile } from '../functions/check-viewport';

const { tabsParrents } = vars;

// --------------- tabs custom function --------------- //
const tabsFunction = function (
  tabsDataInitArray,
  tabsNavAttr,
  tabsContentAttr,
  active = "active"
) {
  tabsDataInitArray &&
    tabsDataInitArray.forEach((tabParent) => {
      if (tabParent) {
        const tabNav = [...tabParent.querySelectorAll(`[${tabsNavAttr}]`)];
        const tabContent = [
          ...tabParent.querySelectorAll(`[${tabsContentAttr}]`),
        ];

        tabNav.map((nav) => {
          nav.addEventListener("click", (e) => {
            e.preventDefault();
            const activeTabAttr = e.target.getAttribute(`${tabsNavAttr}`);
            removeClassInArray(tabNav, active);
            removeClassInArray(tabContent, active);
            addCustomClass(
              tabParent.querySelector(`[${tabsNavAttr}="${activeTabAttr}"]`),
              active
            );
            addCustomClass(
              tabParent.querySelector(
                `[${tabsContentAttr}="${activeTabAttr}"]`
              ),
              active
            );
          });
        });
      }
    });
};

tabsFunction(tabsParrents, "data-tab", "data-tab-content");





const seacrhs = document.querySelectorAll('.h2o-main-search');

seacrhs.forEach(function(search){

  search.addEventListener('click', function(e){
    e.preventDefault();
    addCustomClass(search, 'active');
  })  
})  

const blocks = document.querySelectorAll('.h2o-products-block');

blocks.forEach(function(block){

  block.querySelector('.h2o-products-block__button').addEventListener('click', function(e){
    e.preventDefault();
    toggleCustomClass(block.querySelector('.h2o-products-block__button'), 'active');
    toggleCustomClass(block.querySelector('.h2o-products-block__wrapp'), 'active');
  })  
}) 

const links = document.querySelectorAll('.h2o-main-nav__link');

links.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    removeClassInArray(links, 'active');
    addCustomClass(link, 'active');
  })
})