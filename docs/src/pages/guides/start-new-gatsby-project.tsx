import React from 'react';
import { Row, Col } from 'oah-ui';
import MdxContent from '../../mdx/guides/start-new-project.mdx';
import SEO from '../../components/SEO';
import GuideStyle from '../../components/GuideStyle';

function StartNewProject() {
  return (
    <Row>
      <SEO title="Start new project" />
      <Col breakPoint={{ xs: 12 }}>
        <GuideStyle>
          <MdxContent />
        </GuideStyle>
      </Col>
    </Row>
  );
}

export default StartNewProject;