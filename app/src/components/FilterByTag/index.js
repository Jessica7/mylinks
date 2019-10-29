import React from 'react';

class FilterByTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags : ['business', 'sport', 'technology', 'lifeStyle'],
    };
  }

  getTag = (event) => {
    const tag = event.target.dataset.tag;
    const { clearFilterByOne, checkedTags, selectTag } = this.props
    if (checkedTags.includes(tag)) {
      clearFilterByOne(tag);
    } else {
      selectTag(tag);
    }
  }

  applyTagStyle = (tag) => {
    let className = 'tag ';
    if (this.props.checkedTags.includes(tag)) {
       return className.concat('active');
    }
    return className;
  }

  render () {
    return (
      <div className="filter-tag">
        <span className="title">Filter By:</span>
        {
          this.state.tags.map((tag, index) => {
            return (
              <button 
                onClick={this.getTag}
                className={this.applyTagStyle(tag)}
                key={index}
                data-tag={tag}
                data-index={index}>
                {tag}
              </button>
            );
          })
        }
        <button
          className="clear"
          onClick={this.props.clearFilteringAllTags}>
          {'x'}
        </button>
      </div>
    );
  }
};

export default FilterByTag;
