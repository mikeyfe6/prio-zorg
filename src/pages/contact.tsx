import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";
import Form from "../components/forms/form";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h2>Neem contact met ons op</h2>

            <Form />
        </Layout>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Contact" />;
