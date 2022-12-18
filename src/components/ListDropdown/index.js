import './ListDropdown.css';

const ListDropdown = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListDropdown;
