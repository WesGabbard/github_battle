const React = require('react');
const PropTypes = require('prop-types');
const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}
class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    const {text, speed} = this.props
    const stopper = text + '...';
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({text: this.props.text}))
        : this.setState((prevState) => ({text: prevState.text + '.'}))
    }, speed)
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
}

Loading.PropTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 100
};

module.exports = Loading;