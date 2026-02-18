import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponents from './components/PostsComponent';

// create the client
const queryClient = new QueryClient();

function App() {
  return(
    // provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1> React Query Data Fetching</h1>
         <PostsComponents />
      </div> 
    </QueryClientProvider>
  );
}

export default App;