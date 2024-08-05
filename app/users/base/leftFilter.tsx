import styles from './css/SidebarFilter.module.css'; // Import your CSS module

const SidebarFilter = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <input type="text" placeholder="Filter" />
      </div>
      <div className={styles.lists}>
        <div>Lists</div>
        <ul>
          <li>All</li>
          <li>Watching</li>
          <li>Completed</li>
          <li>Dropped</li>
          <li>Planning</li>
        </ul>
      </div>
      <div className={styles.filters}>
        <div>Filters</div>
        <div className={styles.filterItem}>
          <label htmlFor="format">Format</label>
          <select id="format">
            <option value="">Select</option>

            </select>
        </div>
        
        <div className={styles.filterItem}>
          <label htmlFor="status">Status</label>
          <select id="status">
            <option value="">Select</option>

          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="genres">Genres</label>
          <select id="genres">
            <option value="">Select</option>

          </select>
        </div>
    
      </div>
    </div>
  );
};

export default SidebarFilter;
