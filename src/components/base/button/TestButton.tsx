export interface TestButtonProps {
  children: React.ReactNode;
}

const TestButton: React.FC<TestButtonProps> = ({ children }) => {
  return <button type="button">{children}</button>;
};

export default TestButton;
