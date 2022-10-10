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
  };

async function getResult(){
 try {
     const Tina = await luckyDraw('Tina')
     const Jorge = await luckyDraw('Jorge')
     const Julien = await luckyDraw('Julien')
    } catch(err) {
        console.log(err)
    }
};

getResult();