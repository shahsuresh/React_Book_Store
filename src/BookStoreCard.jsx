import React from "react";

const book1 = {
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7627-525x793.jpeg",
  name: "The Whispers by Ashley Audrain",
  number: 1,
  description: `The Whispers begins with a young boy falling from his window in the middle of the night. His family watches him from his hospital room, where he lies in a coma. While his mother waits by his side, refusing to speak to anyone, the family’s friends and neighbors wait back home, each confronting their own role in the events that led up to the tragedy. Over the course of one week, the mothers in each of these four families are forced to face their own secrets and the uncomfortable truths that connect them to one another – all while anxiously awaiting the fate of the young boy. This novel faces uncomfortable truths of its own: intuitions we ignore, the sacrifices of motherhood and what happens when we put our needs ahead of our children`,
};
const book2 = {
  image:
    "https://thestoryexchange.org/app/uploads/2023/06/IMG_7628-525x793.jpeg",
  name: "All the Gold Stars by Rainesford Stauffer ",
  number: 2,
  description: `The newest book from journalist and author Rainesford Stauffer focuses on the psychology around ambition. From getting gold stars on our homework in grade school, to attending the “right” college, to putting in extra hours at work, Stauffer evaluates how the cultural, personal and societal pressures around ambition have led to a nationwide burnout epidemic. She combines her personal narrative with interviews with students, parents, workers, psychologists and labor organizers to show the common pressures everyone is facing and the consequences that follow. By asking hard questions. `,
};
const BookStoreCard = () => {
  return (
    <div>
      <div
        id="container"
        style={{
          marginLeft: "10%",

          width: "80%",
          display: "flex",
          marginBottom: "50px",
        }}
      >
        <div
          id="number"
          style={{
            margin: "-40px 0px 0px 35px",
            fontFamily: "Lora Bold",

            fontSize: "60px",
            position: "absolute",
            width: "50px",
            backgroundColor: "#ffd032",
          }}
        >
          {book1.number}
        </div>
        <div id="book-image">
          <img
            src={book1.image}
            alt=""
            style={{ width: "440px", height: "660px" }}
          ></img>
        </div>
        <div id="book-desc" style={{ textAlign: "left", paddingLeft: "50px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontFamily: "cursive",
              color: "#212529",
            }}
          >
            {book1.name}
          </h2>
          <span
            style={{
              fontSize: "21px",
              fontFamily: "monospace",
              color: "#212529",
            }}
          >
            {book1.description}
          </span>
        </div>
      </div>
      <hr
        style={{ width: "80%", borderWidth: "2px", textAlign: "center" }}
      ></hr>
      <div
        id="container"
        style={{
          marginLeft: "10%",
          width: "70%",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <div id="book-desc" style={{ textAlign: "left", paddingRight: "50px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontFamily: "cursive",
              color: "#212529",
            }}
          >
            {book2.name}
          </h2>
          <span
            style={{
              fontSize: "21px",
              fontFamily: "monospace",
              color: "#212529",
            }}
          >
            {book2.description}
          </span>
        </div>

        <div id="book-image">
          <img
            src={book2.image}
            alt=""
            style={{ width: "440px", height: "660px" }}
          ></img>
        </div>
        <div
          id="number"
          style={{
            margin: "-40px 0px 0px 490px",
            fontFamily: "Lora Bold",
            fontSize: "60px",
            position: "absolute",
            width: "50px",
            backgroundColor: "#ffd032",
          }}
        >
          {book2.number}
        </div>
      </div>
      <hr
        style={{ width: "80%", borderWidth: "2px", textAlign: "center" }}
      ></hr>
    </div>
  );
};

export default BookStoreCard;
