interface Props {
  name: string;
  value: any;
  text?: string;
}
export const Row: React.FC<Props> = ({ name, value, text }) => {
  return (
    <>
      {(value && (
        <div className="fullGame__out__in__left__rowDiv">
          <div className="fullGame__out__in__left__rowDiv__name">{name}</div>
          <div className="fullGame__out__in__left__rowDiv__value">
            {value}
            {text}
          </div>
        </div>
      )) || <></>}
    </>
  );
};
