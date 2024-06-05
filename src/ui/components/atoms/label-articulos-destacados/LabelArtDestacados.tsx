import type { IProps } from './types/IProps';
import './styles.scss';

export const LabelArtDestacados = (props: IProps) => {

  const { text, color = 'primary' } = props;
  const colorText = `label-articulos-destacados--${color}`;

  return (
    <div className={`label-articulos-destacdos ${colorText}`}>
      <span>{text}</span>
    </div>
  );
}
