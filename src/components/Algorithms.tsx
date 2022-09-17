import React, { useState } from 'react'
import { calcFibonacci } from '../functions/calcFibonacci';
import './Algorithms.css';
import Fibonacci from './Fibonacci';
import MDC from './MDC';
import OrderArray from './OrderArray';
import PrimeNumber from './PrimeNumber';

function Algorithms() {

    const [result, setResult] = useState('Seu resultado aparecerá aqui');
    const [quantity, setQuantity] = useState("10");
    const [fibonacciVisible, setFibonacciVisible] = useState(false);
    const [primeNumberVisible, setPrimeNumberVisible] = useState(false);
    const [orderArray, setOrderArray] = useState(false);
    const [mdc, setMDCVisible] = useState(false);

    return (
        <div className='algorithms-container'>

            <div className='result-container'>
                <p>{result}</p>
            </div>

            <div className='buttons-container'>
                <button className='calc-button' onClick={() => setFibonacciVisible(true)}>Fibonacci</button>
                <button className='calc-button' onClick={() => setOrderArray(true)}>Ordenar Array</button>
                <button className='calc-button' onClick={() => setPrimeNumberVisible(true)}>Número primo</button>
                <button className='calc-button mdc' onClick={() => setMDCVisible(true)}>MDC</button>
            </div>
            <Fibonacci quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={fibonacciVisible} setVisible={setFibonacciVisible} />
            <PrimeNumber quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={primeNumberVisible} setVisible={setPrimeNumberVisible} />
            <OrderArray quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={orderArray} setVisible={setOrderArray} />
            <MDC quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={mdc} setVisible={setMDCVisible} />
        </div>
    )
}

export default Algorithms
