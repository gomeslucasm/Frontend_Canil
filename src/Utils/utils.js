export async function awaitTime(times) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const yourFunction = async (time) => {
    await delay(time);
    console.log(String(time / 1000) + "segundos");
  };
  await yourFunction(times);
}

export const filterAnimalById = (data,id) => {

  var filtered = data.map((dict,index)=>{
    var x = undefined;
    if(dict.id === id){
      x = [dict, index];
    }
    return x;
  })
  filtered = filtered.filter((value)=>{return value !== undefined})
  /* Retorna um array com o animal em questão e o seu índice no array do state dos animais */  
  return [filtered[0][0],filtered[0][1]]
};
