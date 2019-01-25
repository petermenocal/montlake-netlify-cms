import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";

import { Box, Button, Flex, Heading, Text } from "rebass";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.js";

export default class IndexPage extends React.Component {
  componentDidMount() {
    bulmaCarousel.attach();
  }
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const image = data.allFile.edges[0].node;
    return (
      <Layout>
        <div className="carousel carousel-animated carousel-animate-slide">
          <div className="carousel-container">
            <div className="carousel-item has-background is-active">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/merry-christmas.jpg"
                alt=""
                width="640"
                height="310"
              />
              <div className="title" style={{ textAlign: `left` }}>
                <Flex alignItems="center" justifyContent="center">
                  <Box width={[1, 1 / 2]}>
                    <Heading pb={3}>
                      133 Years of Innovative Credo-Driven Decisions That Have
                      Made Johnson & Johnson the Healthcare Leader It Is Today
                    </Heading>
                    <Text fontSize={1} pb={3}>
                      Check out this infographic breakdown of the company’s
                      annual earnings report, with key performance highlights
                      from its Consumer, Medical Devices and Pharmaceutical
                      businesses over the last year.
                    </Text>
                    <Button bg="#137fc5">Read the story</Button>
                  </Box>
                </Flex>
              </div>
            </div>
            <div className="carousel-item has-background">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/singer.jpg"
                alt=""
                width="640"
                height="310"
              />
              <div className="title" style={{ textAlign: `left` }}>
                <Flex alignItems="center" justifyContent="center">
                  <Box width={[1, 1 / 2]}>
                    <Heading pb={3}>
                      133 Years of Innovative Credo-Driven Decisions That Have
                      Made Johnson & Johnson the Healthcare Leader It Is Today
                    </Heading>
                    <Text fontSize={1} pb={3}>
                      Check out this infographic breakdown of the company’s
                      annual earnings report, with key performance highlights
                      from its Consumer, Medical Devices and Pharmaceutical
                      businesses over the last year.
                    </Text>
                    <Button bg="#137fc5">Read the story</Button>
                  </Box>
                </Flex>
              </div>
            </div>
          </div>
          <div className="carousel-navigation">
            <div className="carousel-nav-left">
              <Heading>{`<`}</Heading>
            </div>
            <div className="carousel-nav-right">
              <Heading>{`>`}</Heading>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: `30px` }} className="section">
          <Flex flexDirection="row">
            <Box
              pb={5}
              px={5}
              width={[1, 1, 1, 1 / 4]}
              style={{ textAlign: `center` }}
            >
              <img
                src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"
                style={{ borderRadius: `50%`, height: `200px`, width: `200px` }}
              />
              <Box>
                <Text textAlign="left">
                  <Link style={{ color: `#247cc0` }}>
                    Nulla neque suscipit mauris non
                  </Link>
                </Text>
                <Text color="black" textAlign="left" fontSize="small" mt={2}>
                  Vulputate nec lobortis varius ipsum velit dictum facilisis
                  enim molestie rutrum vitae nullam risus viverra potenti
                  convallis vestibulum venenatis orci
                </Text>
              </Box>
            </Box>
            <Box
              pb={5}
              px={5}
              width={[1, 1, 1, 1 / 4]}
              style={{ textAlign: `center` }}
            >
              <img
                src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"
                style={{ borderRadius: `50%`, height: `200px`, width: `200px` }}
              />
              <Box>
                <Text textAlign="left">
                  <Link style={{ color: `#247cc0` }}>
                    Nulla neque suscipit mauris non
                  </Link>
                </Text>
                <Text color="black" textAlign="left" fontSize="small" mt={2}>
                  Vulputate nec lobortis varius ipsum velit dictum facilisis
                  enim molestie rutrum vitae nullam risus viverra potenti
                  convallis vestibulum venenatis orci
                </Text>
              </Box>
            </Box>
            <Box
              pb={5}
              px={5}
              width={[1, 1 / 4]}
              style={{ textAlign: `center` }}
            >
              <img
                src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"
                style={{ borderRadius: `50%`, height: `200px`, width: `200px` }}
              />
              <Box>
                <Text textAlign="left">
                  <Link style={{ color: `#247cc0` }}>
                    Nulla neque suscipit mauris non
                  </Link>
                </Text>
                <Text color="black" textAlign="left" fontSize="small" mt={2}>
                  Vulputate nec lobortis varius ipsum velit dictum facilisis
                  enim molestie rutrum vitae nullam risus viverra potenti
                  convallis vestibulum venenatis orci
                </Text>
              </Box>
            </Box>
            <Box
              pb={5}
              px={5}
              width={[1, 1 / 4]}
              style={{ textAlign: `center` }}
            >
              <img
                src="https://jnj-content-lab.brightspotcdn.com/dims4/default/c3cbed4/2147483647/strip/true/crop/1398x1398+645+0/resize/300x300!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2Fbc%2F57%2F75e479cb44e5bf4fc4fa49dcc382%2Fgettyimages-156851659.jpg"
                style={{ borderRadius: `50%`, height: `200px`, width: `200px` }}
              />
              <Box>
                <Text textAlign="left">
                  <Link style={{ color: `#247cc0` }}>
                    Nulla neque suscipit mauris non
                  </Link>
                </Text>
                <Text color="black" textAlign="left" fontSize="small" mt={2}>
                  Vulputate nec lobortis varius ipsum velit dictum facilisis
                  enim molestie rutrum vitae nullam risus viverra potenti
                  convallis vestibulum venenatis orci
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            flexWrap="wrap"
            justifyContent="space-around"
            className="container"
            flexDirection="row"
          >
            <Box
              className="content"
              mb={4}
              p={4}
              width={[1, 1, 1 / 3]}
              style={{
                maxWidth: `880px`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                height: `400px`,
                background: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://wikiki.github.io/images/merry-christmas.jpg)`
              }}
              width={1}
            >
              <Heading fontSize={5}>Title of article here</Heading>
              <Text color="black" width={1 / 3} mt={2}>
                Vulputate nec lobortis varius ipsum velit dictum facilisis enim
                molestie rutrum vitae nullam risus viverra potenti convallis
                vestibulum venenatis orci
              </Text>
            </Box>
            {posts.map(({ node: post }) => (
              <Box
                p={3}
                className="content"
                pb={5}
                width={[1, 1, 1, 1 / 4]}
                key={post.id}
              >
                <img src="https://wikiki.github.io/images/merry-christmas.jpg" />
                <Text>
                  <Link style={{ color: `#247cc0` }} to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </Text>
                <Text fontSize={1} mt={2}>
                  Vulputate nec lobortis varius ipsum velit dictum facilisis
                  enim molestie rutrum vitae nullam risus viverra potenti
                  convallis vestibulum venenatis orci
                </Text>
              </Box>
            ))}
          </Flex>
        </div>
        <div style={{ background: `whitesmoke` }}>
          <div style={{ maxWidth: `960px`, width: `100%`, margin: `0 auto` }}>
            <Flex
              mt={3}
              p={3}
              flexDirection="row"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <Box width={1} px={4}>
                <Heading width={1} mb={2}>
                  Quick Links
                </Heading>
              </Box>
              <Box fontSize="small">
                <Text>Latest news</Text>
                <Text>About Montlake</Text>
                <Text>Legal Notice</Text>
                <Text>Employees</Text>
                <Text>Contact Us</Text>
              </Box>
              <Box fontSize="small">
                <Text>Careers</Text>
                <Text>Media Center</Text>
                <Text>Products</Text>
                <Text>Procurement</Text>
                <Text>Privacy Policy</Text>
              </Box>
              <Box fontSize="small">
                <Text>Cookie Policy</Text>
                <Text>Investors</Text>
                <Text>Our Social Impact</Text>
              </Box>
              <Box>
                <Heading>More from Montlake Bioscience</Heading>
              </Box>
            </Flex>
          </div>
        </div>
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
