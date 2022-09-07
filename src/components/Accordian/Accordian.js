import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/KeyboardArrowUp';
import './Accordian.css';


const Questions = ({ item, i, toggle, selected }) => {
  return (
      <div className='item'>
          <div className='question' onClick={() => toggle(i)}>
              <p className='accordian__question'>{item.question}</p>
              <span>{selected === i ? <ExpandLessIcon /> : <ExpandMoreIcon /> }</span>
          </div>
          <div className={selected === i ? 'answer show' : 'answer' }>
              {item.answer}
          </div>
      </div>
  );
};

export default Questions;