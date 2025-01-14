const RestaurantForm = ({
  restaurant,
  onChangeName,
  onChangeType,
  onChangeAddress,
  onSubmit,
}) => {
  const handleChangeName = (e) => onChangeName(e.target.value);

  const handleChangeType = (e) => onChangeType(e.target.value);

  const handleChangeAddress = (e) => onChangeAddress(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChangeName}
      />
      <input
        name="category"
        placeholder="분류"
        value={restaurant.type}
        onChange={handleChangeType}
      />
      <input
        name="address"
        placeholder="주소"
        value={restaurant.address}
        onChange={handleChangeAddress}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default RestaurantForm;
