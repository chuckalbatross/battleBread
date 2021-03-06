// This component is the input field for the messaging feature. 
// The form does not accept typed entries, you must use the provided 
// buttons/vocabulary to compose the message.
// There is no way to delete a word after you enter it into the form. 
// This could be a possible added feature.
// When the component mounts, it called setUser to bring in the 
// user information. We need the know their username, and level to 
// import their currently allowed vocabulary words.

import React from 'react';
import ChatHist from './ChatHist.jsx';
import ChatWords from './ChatWords.jsx';
import { getUsers, setChat } from '../actions.js';
import { connect } from 'react-redux';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        player: this.props.p1.username,
        level: this.props.p1.level,
        newMessage: '',
        list: ['you\'re', 'bread', 'toast']
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  componentDidMount() {
    // var userInfo = getUsers();
    // console.log(">>>>>>>>>>>>>>>>>", userInfo)
    // this.setState({
    //   player: ,
    //   level: ,
      // list: this.props.p1.phrases,
    // })
  }

  handleSubmit(player, text) {
    setChat(player, text);
    console.log('message sent')
    console.log(this.state)
    
  }

  updateMessage(e) {
    var oldMessage = this.state.newMessage
    this.setState({
      newMessage: oldMessage + ' ' + e
    })
    console.log('send words!')
    console.log("PROPSS", this.props)
  }

  render() {
    return(
        <div className='chatBox'>
          <ChatHist />
            <form className="chatInput">
                  <textarea className='textArea' readOnly="readonly" type="text" placeholder={this.state.newMessage} id="newMessage" value={this.state.message}/>
                  <button type="button" className="submitChat" onClick={() => {this.handleSubmit(this.state.player, this.state.message)}}>SEND</button>
            </form>
            <div className="chatWords">
              { this.state.list.map((item, index) => <ChatWords item={item} key={index} updateMessage={this.updateMessage}/>)}
            </div>
        </div>)
  } 
}
  
const mapStateToProps = ({ user } = state) => ({ ...user });
export default connect(mapStateToProps)(ChatInput);

//hi