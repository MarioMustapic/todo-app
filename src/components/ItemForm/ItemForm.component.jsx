export function ItemForm (props) {
    return (
        <form onSubmit={props.onSubmit}>
          <input type="text" placeholder="TODO: buy milk"
          name={props.name} value={props.value} onChange={props.onChange} />
          <button type="submit">Submit</button>
        </form>
    )
}