import { ITagsProps } from '@interfaces/common';
import CloseIcon from '@assets/icons/close.svg';

import './styles.scss';

function Tags({ items, onDelete }: ITagsProps) {
  return (
    <div className="tags">
      {items.map(item => (
        <div className="tag-tile">
          <span>{item}</span>
          <button className="tag-tile-button" onClick={() => onDelete(item)}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Tags;
