function TaskCard({title, value, status, onToggle}) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <p>{status}</p>
      <button onClick={onToggle}>Change Status</button>
    </article>
  );
}

export default TaskCard;