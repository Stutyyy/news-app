import React from "react";

const NewsItems = (props) => {
  let { title, description, imgUrl, newsUrl } = props;
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={imgUrl}
          alt="content"
        />
        <h2 className="text-lg text-white font-medium title-font mb-4">
          {title}...
        </h2>
        <p className="leading-relaxed text-base">{description}...</p>
        <a
          href={newsUrl}
          target="_blank"
          className="text-indigo-400 inline-flex items-center mt-3"
          rel="noreferrer"
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
