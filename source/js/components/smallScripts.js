import {
    removeClassInArray,
    addCustomClass,
    toggleCustomClass,
  } from "../functions/customFunctions";
  import vars from "../_vars";

const { links, blocks, seacrhs } = vars;

seacrhs && seacrhs.forEach(function(search){
  search.addEventListener('click', function(e){
    e.preventDefault();
    addCustomClass(search, 'active');
  })  
})  

blocks && blocks.forEach(function(block){
  block.querySelector('.h2o-products-block__button').addEventListener('click', function(e){
    e.preventDefault();
    toggleCustomClass(block.querySelector('.h2o-products-block__button'), 'active');
    toggleCustomClass(block.querySelector('.h2o-products-block__wrapp'), 'active');
  })  
}) 

links && links.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    removeClassInArray(links, 'active');
    addCustomClass(link, 'active');
  })
})