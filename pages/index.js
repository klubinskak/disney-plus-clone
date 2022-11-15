import { gql, GraphQLClient } from "graphql-request";
import Section from "../components/Section";
import Link from "next/link";
import Image from "next/image";
import disneyLogo from "../assets/disney-button.png";
import pixarLogo from "../assets/pixar.png";
import marvelLogo from "../assets/marvel-button.png";
import starWarsLogo from "../assets/star-wars-button.png";
import netGeoLogo from "../assets/pixar.png";
import starLogo from "../assets/star-button.png";



export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const videosQuery = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const accountsQuery = gql`
  query {
    account(where: {id: "clai5vq04105m0cujojfbbpdp"}) {
      username,
      password,
      avatar {
        url
      }
    }
  }
  `

  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  
  return {
    props: {
      videos,
    },
  };
};


const Home = ({ videos}) => {

  
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre));
  };

  const unSeenVideos = (videos) => {
    return videos.filter((video) => video.seen == false || video.seen == null);
  };

  return (
    <>
      <div className="">
        <div className="">
          <img
            className="w-full h-[450px]"
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
          />
        </div>
        <div className="grid grid-cols-3 place-items-center lg:flex lg:justify-center lg:items-center lg:gap-3 lg:p-3 p-3 gap-2">
          <Link href="#disney">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="disney">
              <Image src={disneyLogo} alt="disneyLogo"/>
            </div>
          </Link>
          <Link href="#pixar">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="pixar">
              <Image src={pixarLogo}  alt="pixarLogo"/>
            </div>
          </Link>
          <Link href="#star-wars">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="star-wars">
            <Image src={starWarsLogo} alt="starWarsLogo" />
            </div>
          </Link>
          <Link href="#nat-geo">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="nat-geo">
            <Image src={netGeoLogo}  alt="netGeoLogo"/>
            </div>
          </Link>
          <Link href="#marvel">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="marvel">
            <Image src={marvelLogo} alt="marvelLogo" />
            </div>
          </Link>
          <Link href="#star">
            <div className="bg-[#212436] rounded-md w-[150px] h-[80px] md:w-[200px] md:h-[100px]" id="star">
            <Image src={starLogo} alt="starLogo"/>
            </div>
          </Link>
        </div>
        <Section rowID='1' genre={"Recommended for you"} videos={unSeenVideos(videos)} />
        <Section rowID='2' genre={"Family"} videos={filterVideos(videos, "family")} />
        <Section
          rowID='3'
          genre={"Star Wars"}
          id="star-wars"
          videos={filterVideos(videos, "star wars")}
        />
        <Section
          rowID='4'
          genre={"Disney"}
          id="disney"
          videos={filterVideos(videos, "disney")}
        />
        <Section
        rowID='5'
          genre={"National Geographic"}
          id="nat-geo"
          videos={filterVideos(videos, "national geographic")}
        />
        <Section
        rowID='6'
          genre={"Pixar"}
          id="pixar"
          videos={filterVideos(videos, "pixar")}
        />
        <Section
        rowID='7'
          genre={"Marvel"}
          id="marvel"
          videos={filterVideos(videos, "marvel")}
        />
        <Section rowID='8' genre={"Thriller"} videos={filterVideos(videos, "thriller")} />
        <Section rowID='9' genre={"Classic"} videos={filterVideos(videos, "classic")} />
      </div>
    </>
  );
};

export default Home;
