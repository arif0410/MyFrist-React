import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    componentDidMount() {
        this.setState({ count: 5 });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count === 10) {
            this.setState({ count: 0 });
            console.log("prevState.count", prevState.count);
            console.log("this.state.count", this.state.count);
        }   
    }
    render() {
        return (
            <div className="flex  w-100 text-center justify-center items-center">
                <h1 className="text-3xl mr-5 font-bold">{this.state.count}</h1>
                <button className="bg-slate-700 px-4 py-2 rounded-lg text-white " onClick={this.incrementCount}>+</button>
            </div>
        );
    }
}

export default Counter;
