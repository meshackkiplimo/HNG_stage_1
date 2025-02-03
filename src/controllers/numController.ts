import {Request,Response} from 'express';
import { isPrime,isPerfect,isArmstrong,getParity,getFunFact } from '../utils/utils';

export const classifyNumber = async (req:Request,res:Response)=>{
    const {number} = req.query;
    if (!number || isNaN(Number(number))) 
    return 
    res.status(400).json({error: "Invalid  number provided"});


const num = Number(number);

try {
    const prime = isPrime(num);
    const perfect = isPerfect(num);
    const armstrong = isArmstrong(num);
    const parity = getParity(num);
    const funFact = await getFunFact(num);

    const response = {
        number:num,
        is_prime:prime,
        is_perfect:perfect,
       properties:armstrong ? ["armstrong",parity]:[parity],
       digit_sum : num.toString().split('').map(Number).reduce((acc, digit)=>acc+digit, 0),
       
        fun_fact:funFact
    }
    res.json(response);
    
    
} catch (error) {

    console.error(error);
    res.status(500).json({error:"Internal server error"});
    
}
}
