import React from 'react';

class FilterByTag extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tags : ['Business', 'Sports', 'Tech', 'Style']
    };

    this.getTag = this.getTag.bind(this);
  }

  getTag (e) {
    const tag = e.target.dataset.tag;
    this.props.selectTag(tag);
  }

  render () {
    return (
      <div className="filter-tag">
        <span className="title">Filter By:</span>
        {
          this.state.tags.map((tag, index) => {
            return (
              <a  onClick={this.getTag}
                  href="javascript:void(0)"
                  className="tag"
                  key={index}
                  data-tag={tag}>{tag}</a>
            );
          })
        }
        <a href="javascript:void(0)" className="clear" onClick={this.props.clearFilter}>{'clear'}</a>
      </div>
    );
  }
};

export default FilterByTag;
