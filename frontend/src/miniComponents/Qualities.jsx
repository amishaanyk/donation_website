import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "At the heart of our mission lies a commitment to fostering sustainable community development. We believe in empowering local communities by addressing their unique needs and challenges. Our projects are designed to create long-lasting, positive changes through education, infrastructure, and economic opportunities. By working closely with community leaders and members, we ensure that our initiatives are culturally sensitive, relevant, and effective in promoting self-reliance and growth.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency is the cornerstone of our operations. We are dedicated to maintaining open and honest communication with our donors, volunteers, and the communities we serve. Every dollar donated is accounted for, and we provide detailed reports on how funds are utilized. Our financial records and project updates are readily available, ensuring that you can trust your contributions are making a genuine difference. We believe that transparency builds trust and credibility, which are essential for fostering long-term support and engagement.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "We understand the importance of measuring the impact of our work to ensure that we are truly making a difference. Our rigorous impact measurement framework allows us to evaluate the effectiveness of our projects and programs systematically. By collecting and analyzing data, we can track progress, identify areas for improvement, and celebrate successes. This evidence-based approach helps us refine our strategies, maximize our resources, and demonstrate the tangible benefits of your support.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
