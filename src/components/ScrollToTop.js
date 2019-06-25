import React, { Component } from 'react';
import Scroll from './Scroll';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityClass: '',
    };
  }

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'show') {
        this.setState({ visibilityClass: 'show' });
      }
    } else {
      if (visibilityClass === 'show') {
        this.setState({ visibilityClass: 'hide' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { visibilityClass } = this.state;
    return (
      <Scroll type="class" element="page-top" offset={100}>
        <a
          title="Go to top"
          className={`scroll-to-top rounded ${visibilityClass}`}
          href="#page-top"
        >
          <i className="fas fa-angle-up"></i>
        </a>
      </Scroll>
    );
  }
}
