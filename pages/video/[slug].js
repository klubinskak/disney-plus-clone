import { gql, GraphQLClient } from "graphql-request";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Link from "next/link";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String) {
      video(where: { slug: $pageSlug }) {
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

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const video = data.video;

  return {
    props: {
      video,
    },
  };
};

const changeToSeen = async (slug) => {
  await fetch('/api/changeToSeen', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ slug })
  })
}

const Video = ({ video }) => {
  const videoUrl = video.mp4.url;

  return (
    <>
    <div className="relative">
      <img className="w-full h-full" src={video.thumbnail.url} />
      <div className="absolute top-1/4 pl-5">
        <h2 className="text-2xl lg:text-6xl">{video.title}</h2>
        <p className="text-xs lg:text-lg md:mt-3">2022</p>
        <p className="text-xs lg:text-lg">{video.tags.join(",")}</p>
        <div className="flex gap-3 items-center">
          <Link href={{ pathname: "/video/Play", query: { video: videoUrl } }}>
            <button className="bg-white text-black h-[35px] w-[90px] lg:h-[56px] lg:w-[198px] md:h-[50px] md:w-[160px] items-center flex justify-center gap-3 md:text-xl rounded">
              <BsFillPlayFill
                className="text-md md:text-4xl"
                onClick={changeToSeen(video.slug)}
              />
              PLAY{" "}
            </button>
          </Link>
          <button className="bg-black w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] border-2 border-white rounded-full items-center flex flex-col justify-center">
            <AiOutlinePlus className="text-sm md:text-xl" color="white" />
          </button>
          <button className="bg-black w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] border-2 border-white rounded-full items-center flex flex-col justify-center">
            <MdOutlineFavoriteBorder className="text-sm md:text-xl" color="white" />
          </button>
        </div>
        <p className="text-sm md:text-xl w-[60%]">{video.description}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
