import axios from 'axios';

export const isPrime  =(num:number):boolean=>{
    if (num<2) return false;
    for (let i=2; i<=Math.sqrt(num); i++){
        if (num%i===0) return false;
    }
    return true;
}

export const isPerfect = (num:number):boolean=>{
    let sum =1;
    for(let i =2; i<=num/2; i++){
        if (num%i===0) sum+=i;
    }
    return sum===num && num!==1;
}

export const isArmstrong = (num:number):boolean=>{
    const digits    = num.toString().split('').map(Number);
    const power     = digits.length;
    const sum       = digits.reduce((acc, digit)=>acc+Math.pow(digit, power), 0);
    return sum===num;
}
export const getParity = (num: number): string => {
    return num % 2 === 0 ? "even" : "odd";
  };

export const getFunFact=async (num:number):Promise<string> => {

    try {
        const response = await  axios.get(`http://numbersapi.com/${num}/math`);
        return response.data.text;

        
    } catch (error) {
           console.error("Error fetching fun fact:", error);
            return  "no fun fact available";
        
    }
}