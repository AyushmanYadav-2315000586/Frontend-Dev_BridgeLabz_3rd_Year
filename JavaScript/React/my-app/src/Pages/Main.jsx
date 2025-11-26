import ProfileCard from "../Components/ProfileCard";
import Me from "../Me.jpeg";
import "./Main.css";
export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <ProfileCard
          name="Ayushman Yadav"
          course="B-Tech (Computer Science and Engineering)"
          college="GLA University"
          Avatar={Me}
        />
      </div>
    </div>
  );
}
