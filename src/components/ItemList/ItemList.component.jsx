import { useContext, useState } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

export function ItemList() {
  const context = useContext(ItemsContext);
  const [queryState, setQueryState] = useState({});
  const updateQuery = (event) => {
    let value = null;

    if (event.target.value === "true") {
      value = true;
    } else if (event.target.value === "false") {
      value = false;
    }

    setQueryState((state) => ({
      ...state, [event.target.name]: value
    }));
  }

  const itemElements = context.getItems(queryState).map((item) => (
    <div key={item.id}>
      <input type="checkbox"
        checked={item.isDone}
        onChange={context.markItemAsDone(item)}
      />
      <span>{item.text} ({item.displayCreatedAt()})</span>
      {item.isDone &&
        <span>&mdash; Completed at: {item.displayCompletedAt()}</span>
      }
      <button type="button" onClick={context.deleteItem(item)}>
        Delete
      </button>
    </div>
  ));

  const countAll = 0;
  const countCompleted = 0;
  const countOpen = 0;


  return (
    <div>
      <div>
        <button onClick={updateQuery} name="completed" value="">
          All items ({countAll})
        </button>
        <button onClick={updateQuery} name="completed" value="true">
          Completed items ({countCompleted})
        </button>
        <button onClick={updateQuery} name="completed" value="false">
          Open items ({countOpen})
        </button>
      </div>
      {queryState.completed === null && <div>All items</div>}
      {queryState.completed && <div>Completed items</div>}
      {queryState.completed === false && <div>Open items</div>}
      <div>
        {itemElements}
      </div>
    </div>
  );
}