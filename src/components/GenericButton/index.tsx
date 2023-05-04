import './styles.css';

type Props = {
  text: string;
};

const GenericButton = ({ text }: Props) => {
  return (
    <div className='generic-btn-container mt-4'>
      <button className='btn btn-primary'>
        <h6>{text}</h6>
      </button>
    </div>
  );
};

export default GenericButton;
