import Image from "./Image";
import "../scss/PersonCard.scss";
import person_fallback from "../assets/user_fallback.png";

const PersonCard = ({ person }: any) => {
  return (
    <article>
      <div className="profile_pic">
        <Image
          src={
            person?.profile_path
              ? `https://image.tmdb.org/t/p/original${person?.profile_path}`
              : person_fallback
          }
          alt="profile"
          width="120px"
        />
      </div>
      <div className="name_role">
        <p className="name">{person?.name}</p>
        <p className="character">{person?.character}</p>
      </div>
    </article>
  );
};

export default PersonCard;
