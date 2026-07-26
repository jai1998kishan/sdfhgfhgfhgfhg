export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`section container-x ${className}`}>
      {children}
    </section>
  );
}