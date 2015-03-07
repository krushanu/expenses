var React = require('react/addons');
var GraphDate = require('../visualizations/GraphDate');
var ViewActionCreators = require('../actions/ViewActionCreators');

var GraphDateComponent = React.createClass({
  componentDidMount() {
    // wrap element in d3
    this.d3Wrapper = d3.select(this.getDOMNode());
    this.d3Wrapper.datum(this.props.data)
      .call(GraphDate.enter)
      .call(GraphDate.update);
  },
  shouldComponentUpdate(nextProps) {
    if (nextProps.data.update) {
      this.d3Wrapper.datum(nextProps.data)
        .call(GraphDate.update);
      return false;
    }
    return true;
  },
  componentDidUpate() {
    this.d3Wrapper.datum(this.props.data)
      .call(GraphDate.update);
  },
  componentWillUnMount() {

  },
  render() {
    return (
      <g className="GraphDate">
        <rect />
        <text />
      </g>
    );
  }
});

module.exports = GraphDateComponent;