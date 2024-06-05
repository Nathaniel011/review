import './styles.scss';
import type { IProps } from './types/IProps';

function LabelArtDestacados({ text = 'ARTICULOS DESTACADOS', colorVariant = 'primary' }: IProps) {
  const getLabelColorClass = () => {
    return colorVariant === 'main'
      ? 'label-articulos-destacados--main'
      : 'label-articulos-destacados--primary';
  };

  const getBackgroundColorClass = () => {
    return colorVariant === 'main' ? 'label-articulos-destacados--main-bg' : '';
  };

  return (
    <div
      className={`label-articulos-destacados ${getLabelColorClass()} ${getBackgroundColorClass()}`}
    >
      <span className="label-articulos-destacados__text">{text}</span>
    </div>
  );
}

export default LabelArtDestacados;
