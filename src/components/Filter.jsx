/* eslint-disable react/prop-types */
function Filter({name, options, onChange, param, filters}) {
  return (
    <div className="flex flex-col justify-start text-left">
      <label>{name}</label>
      <select
        className="border-solid border-2 border-zinc-200 py-2 rounded-lg"
        name="pais"
        id="pais"
        onChange={e => {
          let value = parseFloat(e.target.value);
          if (e.target.value === '3 o mas') {
            value = '3 o mas'
          }
          onChange(prev => ({...prev, [param]: !isNaN(value) ? value : e.target.value}));
        }}
        value={filters?.[param] || ''}
      >
        {
          options.map(o => <option value={o} key={`filter-${o}`}>{o}</option>)
        }
      </select>
    </div>
  )
}

export default Filter
