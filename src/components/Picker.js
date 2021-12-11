
import React from 'react';
import Picker from 'emoji-picker-react';
import TagFacesIcon from '@mui/icons-material/TagFaces';



class ReactPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPicker: false};
      }
    
    _onPickerButton = () => {
        const currentState = this.state.showPicker
        this.setState({
            showPicker : !currentState
        });
        console.log('Show Picker: ' + this.state.showPicker)
    }

    render() {
        return (
        <div>
            <button onClick={this._onPickerButton}>
            <TagFacesIcon />
            </button>
        </div>    
        )
    }
}

export default ReactPicker;


