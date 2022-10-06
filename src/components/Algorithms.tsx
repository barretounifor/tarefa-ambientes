import React, { useState } from 'react'
import { calcFibonacci } from '../functions/calcFibonacci';
import './Algorithms.css';
import Count from './Count';
import Fibonacci from './Fibonacci';
import MDC from './MDC';
import OrderArray from './OrderArray';
import PrimeNumber from './PrimeNumber';
import Sum from './Sum';

function Algorithms() {

    const [result, setResult] = useState('Seu resultado aparecerá aqui');
    const [quantity, setQuantity] = useState("10");
    const [fibonacciVisible, setFibonacciVisible] = useState(false);
    const [primeNumberVisible, setPrimeNumberVisible] = useState(false);
    const [orderArray, setOrderArray] = useState(false);
    const [mdc, setMDCVisible] = useState(false);
    const [sum, setSumVisible] = useState(false);
    const [count, setCountVisible] = useState(false);

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
                <button className='calc-button sum' onClick={() => setSumVisible(true)}>Soma de números</button>
                <button className='calc-button sum' onClick={() => setCountVisible(true)}>Contagem</button>
            </div>
            <Fibonacci quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={fibonacciVisible} setVisible={setFibonacciVisible} />
            <PrimeNumber quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={primeNumberVisible} setVisible={setPrimeNumberVisible} />
            <OrderArray quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={orderArray} setVisible={setOrderArray} />
            <MDC quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={mdc} setVisible={setMDCVisible} />
            <Sum quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={sum} setVisible={setSumVisible} />
            <Count quantity={quantity} setQuantity={setQuantity} setResult={setResult} visible={count} setVisible={setCountVisible} />
        </div>
    )
}

export default Algorithms
