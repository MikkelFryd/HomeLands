import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Style from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <h2>HomeLands</h2>
      <div>
        <p>Øster Uttrupvej 5</p>
        <p>9000 Aalborg</p>
      </div>
      <div>
        <p>Email: info@homelands.dk</p>
        <p>Telefon: +45 1122 3344</p>
      </div>
      <div>
        <FacebookIcon sx={{ color: "white" }} />
        <TwitterIcon sx={{ color: "white" }} />
      </div>
    </footer>
  );
};
