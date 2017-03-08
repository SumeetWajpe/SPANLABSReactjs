/// <reference path="../../typings/modules/react/index.d.ts" />


import * as React from "react";

export default class Product extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { name: this.props.pName}
    }
    onClickHandler(e:any) {
        this.setState({name:'Lenovo Mobile'});
    }

    onChangeHandler(e: any) {
        this.setState({ name: e.target.value });
    }    

    render() {
        return (
            <div>

                <h1> { this.state.name} </h1>
                <input type="text" onChange= {e => this.onChangeHandler(e) } />

                <input type="button" value="Change !" onClick= {e => this.onClickHandler(e)} />
                </div>
        );
    }


}