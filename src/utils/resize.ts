import defaultImg from "../svg/default.svg";
export const resize = (link: string | undefined, width: number) => {
  return (
    (link && link.replace("media/", `media/resize/${width}/-/`)) || defaultImg
  );
};
