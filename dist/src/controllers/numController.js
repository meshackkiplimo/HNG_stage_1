"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyNumber = void 0;
const utils_1 = require("../utils/utils");
const classifyNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number } = req.query;
    // Check if the number is provided and is a valid number
    if (!number || isNaN(Number(number))) {
        res.status(400).json({ error: "Invalid number provided" });
        return;
    }
    const num = Number(number);
    try {
        const prime = (0, utils_1.isPrime)(num);
        const perfect = (0, utils_1.isPerfect)(num);
        const armstrong = (0, utils_1.isArmstrong)(num);
        const parity = (0, utils_1.getParity)(num);
        const funFact = yield (0, utils_1.getFunFact)(num);
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
    }
    catch (error) {
        // Log error and send an internal server error response
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.classifyNumber = classifyNumber;
