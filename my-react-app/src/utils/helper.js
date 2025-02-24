export  function filter(search,list)
{
    const data = list.filter((ele)=>
    { 
        return ele.card.card.info.name.toLowerCase().includes(search.toLowerCase());
        //console.log(ele.card.card.info.name);
    })
     return data;

}