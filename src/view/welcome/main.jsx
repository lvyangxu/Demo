let React = require("react");
let ReactDom = require("react-dom");
let Radio = require("karl-component-radio");
let Select = require("karl-component-select");
let Nav = require("karl-component-nav");
let Carousel = require("karl-component-carousel");
let Chart = require("karl-component-chart");

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
let navOptions = ["option 1", "option 2", "option 3"];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRadioValue: "",
            currentSelectValue: selectOptions.filter(d=> {
                return d.checked;
            }).map(d=> {
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
                    <a className="anchor" href="#chart"></a>
                    Chart
                </h3>
                <Chart title="chart" yAxisText="kg" x="date"
                       y={[
                           {id: "apple", name: "apple"},
                           {id: "banana", name: "banana"},
                           {id: "pear", name: "pear"},
                       ]}
                       data={[
                           {date: "2016-9-11", apple: 1, banana: 2, pear: 3},
                           {date: "2016-9-13", apple: 0.03, banana: 3, pear: 2},
                           {date: "2016-9-12", apple: 5, banana: 47},
                           {date: "2016-9-14", apple: 0.05, banana: 7, pear: 4},
                           {date: "2016-9-15", apple: 0.08, banana: 6}
                       ]}/>

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
                    {this.state.hasOwnProperty("currentSelectValue") ? this.state.currentSelectValue : selectOptions.filter(d=> {
                        return d.checked;
                    }).map(d=> {
                        return d.name;
                    }).join("，")}
                </div>

                <h3>
                    <a className="anchor" href="#nav"></a>
                    Nav
                </h3>
                <Nav data={navOptions} height={200}>
                    <div className="navPanel">nav panel 1，some element...</div>
                    <div className="navPanel">nav panel 2，some element...</div>
                    <div className="navPanel">nav panel 3，some element...</div>
                </Nav>

                <h3>
                    <a className="anchor" href="#carousel"></a>
                    Carousel
                </h3>
                <Carousel>
                    <div><img src="image/1.jpg"/></div>
                    <div><img src="image/2.jpg"/></div>
                    <div><img src="image/3.jpg"/></div>
                    <div><img src="image/4.jpg"/></div>
                </Carousel>



            </div>
        )
    }

}

ReactDom.render(<App/>, document.getElementById("app"));