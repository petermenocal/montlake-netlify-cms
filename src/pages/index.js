import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(data);
    const image = data.allFile.edges[0].node;
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundSize: `cover`,
            backgorundPosition: `center center`,
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`
          }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              color: "white",
              padding: "1rem",
              textAlign: "center"
            }}
          >
            Vision &middot; Innovation &middot; Science
          </h2>
        </div>
        <section className="section">
          <div className="container">
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: "1px solid #333", padding: "2em 4em" }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    allFile(
      filter: { id: { regex: "/fe8ae2e7-5c0f-562d-a85a-f7ff27ba59ca/g" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1050) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
