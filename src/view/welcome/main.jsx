let React = require("react");
let ReactDom = require("react-dom");
let Radio = require("karl-component-radio");
let Select = require("karl-component-select");

let radioOptions = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6", "option 7", "option 8", "option 9", "option 10", "option 11"];
let selectOptions = [
    {id: "o1", name: "option 1", checked: true},
    {id: "o2", name: "option 2", checked: true},
    {id: "o3", name: "option 3", checked: false},
    {id: "o4", name: "option 4", checked: true},
    {id: "o5", name: "option 5", checked: true},
    {id: "o6", name: "option 6", checked: false},
    {id: "o7", name: "option 7", checked: true},
    {id: "o8", name: "option 8", checked: true},
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRadioValue: "",
            currentSelectValue: selectOptions.filter(d=>{
                return d.checked;
            }).map(d=>{
                return d.name;
            }).join("，")
        };
        let bindArr = [];
        bindArr.forEach(d=> {
            this[d] = this[d].bind(this);
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h3>
                    <a className="anchor" href="#radio"></a>
                    Radio
                </h3>
                <Radio data={radioOptions} defaultBlank callback={(d)=> {
                    this.setState({
                        currentRadioValue: d
                    });
                }}/>
                <div className="current-value">
                    Current Value ：
                    {this.state.hasOwnProperty("currentRadioValue") ? this.state.currentRadioValue : ""}
                </div>

                <h3>
                    <a className="anchor" href="#select"></a>
                    Select
                </h3>
                <Select data={selectOptions} optionNumPerColumn={5} callback={(d)=> {
                    d = d.filter(d1=> {
                        return d1.checked;
                    }).map(d1=> {
                        return d1.name;
                    }).join("，");
                    this.setState({
                        currentSelectValue: d
                    });
                }}/>
                <div className="current-value">
                    Current Value ：
                    {this.state.hasOwnProperty("currentSelectValue") ? this.state.currentSelectValue : selectOptions.filter(d=>{
                        return d.checked;
                    }).map(d=>{
                        return d.name;
                    }).join("，")}
                </div>

                <h3>
                    <a className="anchor" href="#nav"></a>
                    Nav
                </h3>

                <h3>
                    <a className="anchor" href="#table"></a>
                    Table
                </h3>
            </div>
        )
    }

}

ReactDom.render(<App/>, document.getElementById("app"));