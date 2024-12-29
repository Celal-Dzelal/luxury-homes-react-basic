import CardStyle from "./Cards.module.css";

const imageNames = [
  "1(1).jpeg",
  "1(2).jpeg",
  "1(3).jpeg",
  "1(4).jpeg",
  "1(5).jpeg",
  "1(6).jpeg",
  "1(7).jpeg",
  "1(8).jpeg",
  "1(9).jpeg",
  "1(10).jpeg",
  "1(11).jpeg",
  "1(12).jpeg",
];

const images = imageNames.map((name) => require(`../../assets/images/${name}`));

function Cards() {
  return (
    <div className={CardStyle.cards}>
      {images.map((src, index) => (
        <div className={CardStyle.imageBox}>
          <img
            key={index}
            src={src}
            alt={`Card ${index + 1}`}
            className={CardStyle.image}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
