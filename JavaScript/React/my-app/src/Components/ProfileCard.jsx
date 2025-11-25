import "./ProfileCard.css";
function ProfileCard({ name, course, college, Avatar }) {
  return (
    <div className="profile-card">
      <img className="logo" src={Avatar} alt="" />
      <h2>{name}</h2>
      <p>{course}</p>
      <p>{college}</p>
    </div>
  );
}

export default ProfileCard;
