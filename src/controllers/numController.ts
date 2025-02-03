import { Request, Response } from 'express';
import { isPrime, isPerfect, isArmstrong, getParity, getFunFact } from '../utils/utils';

export const classifyNumber = async (req: Request, res: Response) => {
  const { number } = req.query;

  // Check if the number is provided and is a valid number
  if (!number || isNaN(Number(number))) {
    res.status(400).json({ error: "Invalid number provided" });
    return 
    
  }

  const num = Number(number);

  try {
    const prime = isPrime(num);
    const perfect = isPerfect(num);
    const armstrong = isArmstrong(num);
    const parity = getParity(num);
    const funFact = await getFunFact(num);

    const response = {
      number: num,
      is_prime: prime,
      is_perfect: perfect,
      properties: armstrong ? ["armstrong", parity] : [parity],
      digit_sum: num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0),
      fun_fact: funFact
    };

    // Send the response with the classification details
    res.json(response);

  } catch (error) {
    // Log error and send an internal server error response
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
