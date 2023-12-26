const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
// <div>
// <h1>Today : { (new Date()).toDateString() }</h1>
// </div>
// );

function Counter() {
    return (
        <div className="counter">
            <button class="button">+</button>
            <h2>{0}</h2>
            <button class="button">-</button>
            <button class="button">C</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Today : {(new Date()).toDateString()}</h1>
            <h3>Sum = 0</h3>
            <button class="button">Add Counter</button>
            <Counter />
        </div>
    )
}


root.render(<App />);