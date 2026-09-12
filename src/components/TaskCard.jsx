import { Link } from 'react-router-dom';

function TaskCard({ title, description, status, onToggle, onDelete, id }) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{status}</p>
      <button onClick={onToggle}>Change Status</button>
      <button onClick={onDelete}>Delete task</button>
      <Link to={`/tasks/${id}`}>
        View Details
      </Link>
    </article>
  );
}

export default TaskCard;