interface CardProps {
  title: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
  imageSrc: string;
}

const Card = ({
  title,
  clubName,
  date,
  time,
  location,
  imageSrc,
}: CardProps) => {
  return (
    <div className="border rounded-lg flex gap-5 p-3">
      <img
        src={imageSrc}
        className="h-[200px] w-[200px] object-cover rounded-lg"
      ></img>
      <div className="flex flex-col justify-between">
        <h1 className="text-4xl">{title}</h1>
        <h2 className="text-3xl">{clubName}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
