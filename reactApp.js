class Team extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      shots: 0,
      score: 0
    }
  }

  shotHandler = () => {
    if(Math.random() > .5){
      this.setState((state, props) => ({
        score: state.score + 1
      }));
    }
    this.setState((state, props) => ({
      shots: state.shots + 1 
      
      
    }));
  }



  render() {
    return (<h1>
      {this.props.name}
      <img alt="team logo" width="250" src={this.props.logo} />
      shots: {this.state.shots}
      score: {this.state.score}

      <button onClick= {this.shotHandler}>Shoot</button>
    </h1>)
  }

}
// Deafault App component that all other compents are rendered through
function App(props) {
  return (
    <div>
      <Team name="Gainesville Giraffes" logo="giraffelogo.jpg" />
      <Team name="Zionsville Zebras" logo="zebralogo.jpg" />
    </div>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);