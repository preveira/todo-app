import { MantineProvider } from '@mantine/core';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Header />
      <Todo />
      <Footer />
    </MantineProvider>
  );
};

export default App;
