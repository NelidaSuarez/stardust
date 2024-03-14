

const spinners2 = () => {
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
      <div key={index} className={`spinner-border text-${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ))}
  </div>
  )
}

export default spinners2