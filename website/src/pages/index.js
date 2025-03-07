/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';
import GitHubButton from 'react-github-btn';

const contents = [
  {
    content:
      'Metro aims for sub-second reload cycles, fast startup and quick bundling speeds.',
    image: '/metro/img/content/high-speed-train.png',
    title: 'Fast',
  },
  {
    content: 'Works with thousands of modules in a single application.',
    image: '/metro/img/content/scales.png',
    title: 'Scalable',
  },
  {
    content: 'Supports every React Native project out of the box.',
    image: '/metro/img/content/atom.png',
    title: 'Integrated',
  },
];

const Button = ({children, href}) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}>
        {children}
      </Link>
    </div>
  );
};

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <div className={classnames('hero hero-dark', styles.heroBanner)}>
      <div className="container">
        <img
          className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
          src={'./img/metro.svg'}
          alt="Metro"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={classnames(styles.heroButtons, 'name', 'margin-vert--md')}>
          <Button href={useBaseUrl('docs/getting-started')}>Get Started</Button>
          <Button href={useBaseUrl('docs/api')}>Learn More</Button>
        </div>
        <GitHubButton
          href="https://github.com/facebook/metro"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star facebook/metro on GitHub">
          Star
        </GitHubButton>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout title="Metro">
      <HomeSplash />
      <div className="container">
        <div class="row">
          {contents.map(({content, title, image}) => {
            return (
              <div className="col col--4 margin-vert--md">
                <div
                  className={classnames(
                    styles.blockContainer,
                    'padding-horiz--md',
                  )}>
                  <img
                    src={image}
                    className={classnames(styles.blockImage)}
                    alt=""
                  />
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
