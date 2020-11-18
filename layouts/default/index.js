import React from 'react';
import classNames from 'classnames';
// import './global.scss';
import { firePageView } from 'lib/gtag';
import { SponsorBanner } from '../../components/sponsor-banner';

class DefaultLayout extends React.Component {
  state = {
    isBannerClosed: false
  };

  // componentDidMount() {
  //   firePageView(window.location.pathname);
  // }

  render() {
    return (
      <div className="font-inter">
        {/* <div className={ classNames('banner-wrap', { 'd-none': this.state.isBannerClosed }) }>
          <SponsorBanner onCloseBanner={() => this.setState({ isBannerClosed: true })} />
        </div>
        <div className={ classNames('body-wrap', { 'sponsor-banner-visible': !this.state.isBannerClosed }) }>
        </div> */}
        <div className="relative bg-white overflow-hidden">
          <div className="relative pt-6 pb-8 md:pb-10 lg:pb-12 xl:pb-16">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
