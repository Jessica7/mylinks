import React from 'react';
import Icon from '../Icon';

class FileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reader: null 
    };

    this.fileReader = this.fileReader.bind(this);
    this.getImage = this.getImage.bind(this);
    this.onLoadend = this.onLoadend.bind(this);
  }

  fileReader(files) {
    this.state.reader = new FileReader();
    this.state.reader.readAsDataURL(files);
    this.onLoadend();
  }

  getImage(event) {
    this.fileReader(event.target.files[0]);
  }

  onLoadend() {
    this.state.reader.onloadend = event => {
      this.props.receiveUrl(event.target.result);
    };
  }

  render() {
    return (
      <div className="wrapper-select">
        <label htmlFor='select-file'>
          <Icon type={'fas fa-camera'} size={'small'} color={'white'} />
        </label>
        <input
          ref="upload"
          id="select-file"
          type="file"
          onChange={this.getImage}
          multiple="multiple"
          className="input-upload"
          accept="image/jpeg, image/png, image/jpg" />
      </div>
    );
  }
}

export default FileUpload;