function TaskCard({title, value, status}) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <p>{status}</p>
    </article>
  );
}

export default TaskCard;