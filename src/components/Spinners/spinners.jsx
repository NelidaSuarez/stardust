

function SpinnerList() {
    const spinnerColors = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'dark'
    ];
  
    return (
      <div>
        {spinnerColors.map((color, index) => (
          <div key={index} className={`spinner-grow text-${color}`} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default SpinnerList;