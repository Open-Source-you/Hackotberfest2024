var storeData=[]

const getData=()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(
        res=>{
            
            storeData=res.data.map(obj=>({...obj}))
            
        }
    ).then(function(){
        const myContent=document.querySelector(".myContent")
    
    myContent.innerHTML=storeData.map((elem)=> {
        
    return`
    <div class='card'>
            <img src=${elem.image} alt="dddfgd">
                    <div>
                    
                        <h3>${elem.name}</h3>
                        <h3>${elem.symbol}</h3>
                        <h3>${elem.current_price}</h3>
            
                    </div>
        </div>
   
  `
});

    }

    )
    
}
getData();
