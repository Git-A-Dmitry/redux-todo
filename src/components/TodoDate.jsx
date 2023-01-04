function TodoDate() {
  const todoDate = new Date();
  const day = todoDate.getDate();
  const month = todoDate.getMonth() + 1;
  const year = todoDate.getFullYear();
  const initialDate = day + '.' + month + '.' + year;

  return (
    <div>
      <h2 className='date'>TODAY IS: {initialDate} – JUST DO IT 😱</h2>
    </div>
  );
}

export { TodoDate };
