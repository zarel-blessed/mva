interface Props {
  src: string;
  alt: string;
  width: string;
}

const Image = ({ src, alt, width }: Props) => {
  return (
    <div
      style={{
        width: `${width}`,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: `block`,
          width: `100%`,
        }}
        className="image"
      />
    </div>
  );
};

export default Image;
