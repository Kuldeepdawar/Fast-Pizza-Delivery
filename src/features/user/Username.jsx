import { useSelector } from 'react-redux';

function Username() {
  // take this slice name and state with username
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
