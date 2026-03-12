import css from "../app/assets/svg/skills/css.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import java from "../app/assets/svg/skills/java.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import n8n from "../app/assets/svg/skills/n8n-color.svg";
import python from "../app/assets/svg/skills/python.svg";
import react from "../app/assets/svg/skills/react.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import wordpress from "../app/assets/svg/skills/wordpress.svg";
import zapier from "../app/assets/svg/skills/zapier-color.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "python":
      return python;
    case "java":
      return java;
    case "mysql":
      return mysql;
    case "git":
      return git;
    case "wordpress":
      return wordpress;
    case "n8n":
      return n8n;
    case "zapier":
      return zapier;
    default:
      break;
  }
};
