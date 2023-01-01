import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filter-selector';
import { setFilter } from '../store/filters/filter-action';

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  return (
    <div className='filter-btn'>
      <button onClick={() => dispatch(setFilter('all'))} style={{ color: activeFilter === 'all' ? 'red' : '#fff' }}>
        all
      </button>

      <button onClick={() => dispatch(setFilter('active'))} style={{ color: activeFilter === 'active' ? 'red' : '#fff' }}>
        active
      </button>

      <button onClick={() => dispatch(setFilter('done'))} style={{ color: activeFilter === 'done' ? 'red' : '#fff' }}>
        done
      </button>
    </div>
  );
};

export { Filters };
