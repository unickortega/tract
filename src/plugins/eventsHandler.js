global.resizeables = [];
global.scrollables = [];

// for events
// 
// 
global.onresize = ()=>{
  resizeables.forEach((el)=>{
    try{ el() }catch(ev){}
  })
};

global.onscroll = ()=>{
    scrollables.forEach((el)=>{
        try{ el() }catch(ev){}
    })
};