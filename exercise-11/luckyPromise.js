function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const winCondition = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (winCondition) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

luckyDraw('Joe').then(res => {
    console.log(res) 
    return luckyDraw('Caroline')
}).then(res => {
    console.log(res)
    return luckyDraw('Sabrina')
}).then(res => {
    console.log(res)
    return
}).catch(err => {
    throw(err)
})

