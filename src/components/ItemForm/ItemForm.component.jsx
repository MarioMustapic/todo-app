export function ItemForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" placeholder="TODO: Buy milk"
        name="item" value={props.value} onChange={props.onChange}
        required autoComplete="off"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
