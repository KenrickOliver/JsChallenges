// Day 18 of JS Challenges

/* FCC Cash Register
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
*/

function checkCashRegister(price, cash, cid) {
    //Store of monies multiplied by 100 to avoid weird JS Rounding errors.
    const moneyObj = {
        'PENNY': 1,
        'NICKEL': 5,
        'DIME': 10,
        'QUARTER': 25,
        'ONE': 100,
        'FIVE': 500,
        'TEN': 1000,
        'TWENTY': 2000,
        'ONE HUNDRED': 10000
    }

    let cidObj = cid.reduce((acc, [moneyType, amt]) => {
        return {
            ...acc,
            [moneyType]: Math.round(amt * 100)
        }
    }, {})

    let amtLeftToPay = Math.round((cash-price) * 100)
    let changeToGive = [];

    
   

    const takeMoneyFromCid = (amtLeftToPay, cidObj, changeToGive, moneyType) => {
        // if
        if (amtLeftToPay >= moneyObj[moneyType] && cidObj[moneyType]) {
            if (amtLeftToPay >= cidObj[moneyType]) {
            const amtToSubtract = cidObj[moneyType];
            amtLeftToPay -= amtToSubtract
            changeToGive.push([moneyType, amtToSubtract / 100]);
            cidObj[moneyType] = 0;
           } else {
               const amtToSubtract = Math.floor(amtLeftToPay / moneyObj[moneyType]) * moneyObj[moneyType]
               amtLeftToPay -= amtToSubtract
               changeToGive.push([moneyType, amtToSubtract / 100]);
               cidObj[moneyType] -= amtToSubtract;
           }
        }

        return [amtLeftToPay, cidObj, changeToGive];
    }  

    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'ONE HUNDRED')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'TWENTY')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'TEN')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'FIVE')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'ONE')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'QUARTER')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'DIME')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'NICKEL')
    [amtLeftToPay, cidObj, changeToGive] = 
    takeMoneyFromCid(amtLeftToPay, cidObj, changeToGive, 'PENNY')
  

    if(amtLeftToPay > 0) {
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    }

    const amtLeftInCid = Object.values(cidObj).reduce((a,b) => {
      return a+b;    
    },0)

    if(amtLeftInCid) {
        return {status: 'OPEN', change: changeToGive}
    }

    return {status: "CLOSED", change: cid};
}
    
   
  
  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

//  ---------------------------------------
function checkCashRegister(price, cash, cid) {

    let amtLeftToPay = Math.round((cash - price) * 100);
  
    let cidObj = cid.reduce((acc, [moneyType, amt]) => {
      return {
        ...acc,
        [moneyType]: Math.round(amt * 100)
      }
    }, {});
  
    let changeToGive = [];

    const denominations = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY'];
const moneyDict = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000
};

const takeOutMoneyFromCid = (amtLeftToPay, cidObj, changeToGive, moneyType) => {
  if (amtLeftToPay >= moneyDict[moneyType] && cidObj[moneyType]) {
    if (amtLeftToPay >= cidObj[moneyType]) {
      const amtToSubtract = cidObj[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract / 100]);
      cidObj[moneyType] = 0;
    } else {
      const amtToSubtract =
        Math.floor(amtLeftToPay / moneyDict[moneyType]) * moneyDict[moneyType];
      amtLeftToPay -= amtToSubtract;
      changeToGive.push([moneyType, amtToSubtract/ 100]);
      cidObj[moneyType] -= amtToSubtract;
    }
  }

  return [amtLeftToPay, cidObj, changeToGive];
};


  
    denominations.forEach(moneyType => {
      [amtLeftToPay, cidObj, changeToGive] =
        takeOutMoneyFromCid(amtLeftToPay, cidObj, changeToGive, moneyType);
    });
  
    if (amtLeftToPay > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
  
    const amtLeftInCid = Object.values(cidObj).reduce((acc, amt) => acc + amt, 0);
  
    if (amtLeftInCid > 0) {
      return {status: 'OPEN', change: changeToGive};
    }
  
    return {status: "CLOSED", change: cid};
  }