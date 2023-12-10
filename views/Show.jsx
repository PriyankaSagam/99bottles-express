const React = require('react')
class Show extends React.Component {
  render () {
   const bottle = this.props.bottles;
    return (
      <div>
      <h1>{ bottle + ' Bottles of beer on the wall.' }</h1>
      <nav>
        { bottle > 0 ? <a href={`/${bottle-1}`}> take one down, pass it around</a> : <a href={`/`}> Star Over Please....</a>}
      </nav>
      </div>
      );
     }
   }
  module.exports  = Show;