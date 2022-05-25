import React from 'react'
import './Navbar.css'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: 
        [ 
            'Winning isn’t everything, but wanting to win is.',
            'Dreaming, after all, is a form of planning.',
            'Your time is limited, so don’t waste it living someone else’s life.',
            'Every strike brings me closer to the next home run.'
        ],
        input2: 
        [ 
            'Vince Lombardi',
            'Gloria Steinem',
            'Steve Jobs',
            'Babe Ruth'
        ],
        input3: 
        [ 
            'lightblue',
            'Green',
            'Brown',
            'MediumOrchid'
        ],
        submit: 'Dream big and dare to fail.',
        submit: '',
        random: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      const len = this.state.input.length;
      const result = Math.floor(Math.random() * len);
      this.setState({
        submit: this.state.input[result],
        submit2: this.state.input2[result],
        color: this.state.input3[result]
      })
    }

    render() {
      return (
        <html style={{backgroundColor: this.state.color}}>
          <body>
            <div className='div-container'>           
            <section style={{backgroundColor: 'white'}}>
                <h1 style={{color: this.state.color}}>{this.state.submit}</h1>                 
                <h3 style={{color: this.state.color}}>{this.state.submit2}</h3>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit' style={{backgroundColor: this.state.color}}>New Quote</button>
                </form>
            </section>
            </div>
            
          </body>
        </html>
      );
    }
  }

export default MyForm