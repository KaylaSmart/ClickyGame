import React, {Component} from 'react';
import CharacterCard from "../components/CharacterCard";
import Container from 'container';
import Wrapper from '../components/wrapper';
import character from "../";


class Game extends Component {
  constructor(props){
    super(props);
        this.handleClick = this.handleClick.bind(this);
        this.mixPictures = this.mixPictures.bind(this);
        this.handleCorrectPick= this.handleCorrectPick.bind(this);
         const score = 0;
        const topscore = 0;
        }
        state ={
          character: character ,
          clicked: []
        }  

    
       
    componentDidMount(){
      this.setState({ character: this.mixPictures(this.state.character)});
    }
  
    handleClick(id){
      let correctPick = false;
      if( this.state.clicked.indexOf(id) === -1){
        this.handleCorrectPick();
        this.setState({clicked: this.state.clicked.concat(id)});
      }else{
        this.handleReset();
      }
    }
    
  
  mixPictures = character =>{
    let i = character.length - 1;
    while ( i > -1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = character[i]
    character[i] = character[j]
    character[j] = temp;
  
    }
    return character;
  }

    handleCorrectPick = () =>{
      const newScore ;
      const newTop ;
      this.setState({
        score:newScore,
        topscore: Math.max(newScore, topscore)
      })
      
    }

    handleIncorrectPick = character =>{
     this.setState({
       character: this.restart(character) ,
       score:0
     })
    
    }
  handleReset= character =>{
    const restartData = character.map(character({...character, clicked: false}));
    return this.mixPictures(restartData);
  }
  
    render() {
      return (
        <Container>
            <Wrapper />
            <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  mixPictures={this.mixPictures}
                  id={character.id}
                  img={character.img}
                />
         </Container>
      )
    }
}


export default Game ;