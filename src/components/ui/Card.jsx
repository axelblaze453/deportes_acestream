export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-gray-700 p-4 rounded-lg shadow ${className}`} {...props}>
      {children}
    </div>
  );
}