let eleman1=document.querySelector("#pr-1")
let eleman2=document.querySelector("section")

eleman1.addEventListener("click",function(olay){
 
  console.log("paragraf1 tiklandi")
  olay.stopPropagation()

})
eleman2.addEventListener("click",function(olay){
 
    console.log("section tiklandi")
    
  
  })
  



