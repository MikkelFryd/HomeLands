import Style from "./search.module.scss";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <div className={Style.searchcontainer}>
      <input placeholder="Indtast søgeord" type="text" />
      <button>
        <SearchIcon sx={{ color: "white" }} />
      </button>
    </div>
  );
};
