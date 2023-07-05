import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function CustomLayout(props) {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout {...props}>
            <div className="container">
                <div className="row">
                    <main className="col col--12">
                        {/* Main content */}
                        <div className="main-content">{props.children}</div>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

export default CustomLayout;
