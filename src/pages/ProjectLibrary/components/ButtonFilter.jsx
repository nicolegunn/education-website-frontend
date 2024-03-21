export default function ButtonFilter({ handleClick }) {
  return (
    <div>
      <button onClick={(evt) => handleClick(evt)}></button>
    </div>
  );
}
