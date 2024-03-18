import React from "react";
import Slider from "../Slider/Slider";
const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="text-container">
          <h1>Simple, Meet Flexible</h1>
          <p>
            You made it. Now it’s time to get it in front of people. With baked
            in SEO tools, a bustling community, one-click social links, and a
            bunch of easy ways to get paid, you’re all set.
          </p>
        </div>
      </div>
      <Slider />

      <div className="grid-container">
        <Card
          title="SEO, to go"
          description="Get found faster thanks to built-in search engine optimization tools. Clean URLs, automatic sitemaps, and custom titles and descriptions help put your blog at the top of the stack in search results."
        />
        <Card
          title="Find your audience"
          description="Say hello to a huge community of bloggers, creators, and avid readers, every time you publish. WordPress.com’s built-in Reader means millions of people can easily find, follow, and share your blog."
        />
        <Card
          title="Take it to social"
          description="Put the word out on social media with no extra work. Set up automatic social updates once. Then leave it to WordPress.com to update Facebook, Tumblr, and LinkedIn every time you hit publish."
        />
        <Card
          title="Get paid for what you made"
          description="Let your audience support your hard work with built-in monetization tools. From shipping out merch to selling downloadable content, taking donations to offering subscriptions and memberships. Everything you need to collect payments is baked right in."
        />
      </div>
    </div>
  );
};

export default Main;
