import { NextLink, NextLinkContainer, NextLinkSmall } from './styled';
import { Fragment } from 'react';
import { Content } from '~/templates/global/grid';
import ContentNav from './ContentNav';
import GlobalTemplate from '~/templates/global/Template';
import { DatePublished } from '~/templates/global/styled';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import themes from '~/styles/themes';
import posed from 'react-pose';
import { spring } from 'popmotion';

const ContentArea = posed.div({
  flip: {
    transition: props => spring({ ...props, stiffness: 1000, damping: 35 })
  }
});

export default class Template extends React.PureComponent {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    const {
      children,
      title,
      id,
      description,
      section,
      published,
      theme,
      next
    } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <GlobalTemplate
        title={`${title} | ${themes[theme].name}`}
        description={description}
        theme={theme}
      >
        <Header section={section} />
        <ContentNav
          isOpen={isMenuOpen}
          toggleMenu={this.toggleMenu}
          section={section}
          id={id}
        />
        <ContentArea pose="flip">
          <Content>
            {published && <DatePublished>{published}</DatePublished>}
            {children}
            {next && themes[theme].data.content[section][next] ? (
              <NextLinkContainer>
                <NextLink href={`/${section}/${next}`}>
                  <NextLinkSmall>Next</NextLinkSmall>
                  {themes[theme].data.content[section][next].title}
                </NextLink>
              </NextLinkContainer>
            ) : null}
          </Content>
        </ContentArea>
        <Footer />
      </GlobalTemplate>
    );
  }
}
