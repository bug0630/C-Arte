export default function SelectBox({ options }) {
  const handleChange = (event) => {
    event.stopPropagation(); // 이벤트 전파 방지
  };

  return (
    <div className="selectBox">
      <select onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
