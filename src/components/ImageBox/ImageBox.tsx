import "./imageBox.css";

interface ImageBoxProps {
  src: string;
}
const ImageBox: React.FC<ImageBoxProps> = ({ src }) => {
  return (
    <div className='ImageBox'>
      <img src={src} />
    </div>
  );
};

export default ImageBox;
