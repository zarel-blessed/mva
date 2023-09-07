const Wrapper = ({ children }: { children: React.JSX.Element }) => {
  return (
    <section
      className="wrapper"
      style={{ width: `100%`, maxWidth: `1200px`, margin: `0 auto` }}
    >
      {children}
    </section>
  );
};

export default Wrapper;
