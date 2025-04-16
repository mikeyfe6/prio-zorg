import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface SrcImagesQuery {
    coaching: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    mentoring: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    opvoedondersteuning: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    bemiddeling: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
}

export const useSrcImages = () => {
    const data = useStaticQuery<SrcImagesQuery>(graphql`
        query {
            # // coaching
            coaching: file(relativePath: { eq: "usp/coaching.jpg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            # // mentoring
            mentoring: file(relativePath: { eq: "usp/mentoring.avif" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            # // opvoedondersteuning
            opvoedondersteuning: file(
                relativePath: { eq: "usp/opvoedondersteuning.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            # // bemiddeling
            bemiddeling: file(relativePath: { eq: "usp/bemiddeling.jpg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);

    return {
        coaching: data.coaching.childImageSharp.gatsbyImageData,
        mentoring: data.mentoring.childImageSharp.gatsbyImageData,
        opvoedondersteuning:
            data.opvoedondersteuning.childImageSharp.gatsbyImageData,
        bemiddeling: data.bemiddeling.childImageSharp.gatsbyImageData,
    };
};
