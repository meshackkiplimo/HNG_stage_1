import { Request, Response } from 'express';
import { isPrime, isPerfect, isArmstrong, getParity, getFunFact } from '../utils/utils';

export const classifyNumber = async (req: Request, res: Response) => {
  const { number } = req.query;

  // Validate input
  if (!number || isNaN(Number(number))) {
    res.status(400).json({ number, error: true });
    return 
   
  }

  const num = Number(number);

  try {
    const prime = isPrime(num);
    const perfect = isPerfect(num);
    const armstrong = isArmstrong(num);
    const parity = getParity(num);
    const funFact = await getFunFact(num).catch(() => "No fun fact available.");

    res.json({
      number: num,
      is_prime: prime,
      is_perfect: perfect,
      properties: armstrong ? ["armstrong", parity] : [parity],
      digit_sum: num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0),
      fun_fact: funFact || "No fun fact available"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
