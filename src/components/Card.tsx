interface props {
  title: string;
  description: string;
}
const Card = ({ title, description }: props) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default Card;
