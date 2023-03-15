import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { Box } from './Box/Box';
import { getImages } from 'services';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { useState, useEffect } from 'react';
import { Button } from './Button';

export function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const abortController = new AbortController();

    const fetchImages = async () => {
      setIsloading(true);
      try {
        const items = await getImages(searchQuery, page);
        setItems(prevStateItems => [...prevStateItems, ...items]);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();

    return () => {
      abortController.abort();
    };
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setItems([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
    setIsloading(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery items={items} />
      {items.length !== 0 && <Button onClick={handleLoadMore} />}
      {isLoading && (
        <Box position="fixed" top="46%" right="46%">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            margin="0 auto"
          />
        </Box>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     items: [],
//     searchQuery: '',
//     page: 1,
//     isLoading: false,
//   };

//   nextItems = JSON.stringify(this.state.items);

//   async componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.searchQuery;
//     const nextQuery = this.state.searchQuery;
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     const { page } = this.state;
//     if (nextQuery !== prevQuery || prevPage !== nextPage) {
//       this.setState({ isLoading: true });
// try {
//   const items = await getImages(nextQuery, page);
//   this.setState(prevState => ({
//     items: [...prevState.items, ...items],
//     isLoading: false,
//   }));
// } catch (error) {
//   console.log(error);
// }
//     }
//   }

// handleFormSubmit = searchQuery => {
//   this.setState({ searchQuery, items: [], page: 1 });
// };

// handleLoadMore = async () => {
//   this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
// };

//   render() {
//     const { items, isLoading } = this.state;

//     // if (status === 'idle') {
//     //   return (
//     //     <div className="App">
//     //       <Searchbar onSubmit={this.handleFormSubmit} />
//     //       <ToastContainer
//     //         position="top-right"
//     //         autoClose={3000}
//     //         hideProgressBar={false}
//     //         newestOnTop={false}
//     //         closeOnClick
//     //         rtl={false}
//     //         pauseOnFocusLoss
//     //         draggable
//     //         pauseOnHover
//     //         theme="light"
//     //       />
//     //     </div>
//     //   );
//     // }

//     // if (status === 'pending') {
//     //   return (
//     //     <div className="App">
//     //       <Searchbar onSubmit={this.handleFormSubmit} />
//     // <Box position="absolute" top="50%" right="50%">
//     //   <RotatingLines
//     //     strokeColor="grey"
//     //     strokeWidth="5"
//     //     animationDuration="0.75"
//     //     width="96"
//     //     visible={true}
//     //     margin="0 auto"
//     //   />
//     // </Box>
//     //     </div>
//     //   );
//     // }

//     // if (status === 'resolved') {
//     //   return (
//     //     <div className="App">
//     //       <Searchbar onSubmit={this.handleFormSubmit} />
//     //       <ImageGallery items={items} />
//     //       <Button onClick={this.handleLoadMore} />
//     //       <ToastContainer
//     //         position="top-right"
//     //         autoClose={3000}
//     //         hideProgressBar={false}
//     //         newestOnTop={false}
//     //         closeOnClick
//     //         rtl={false}
//     //         pauseOnFocusLoss
//     //         draggable
//     //         pauseOnHover
//     //         theme="light"
//     //       />
//     //     </div>
//     //   );
//     // }

// return (
//   <div className="App">
//     <Searchbar onSubmit={this.handleFormSubmit} />
//     <ImageGallery items={items} />
//     {items.length !== 0 && <Button onClick={this.handleLoadMore} />}
//     {isLoading && (
//       <Box position="fixed" top="46%" right="46%">
//         <RotatingLines
//           strokeColor="grey"
//           strokeWidth="5"
//           animationDuration="0.75"
//           width="96"
//           visible={true}
//           margin="0 auto"
//         />
//       </Box>
//     )}
//     <ToastContainer
//       position="top-right"
//       autoClose={3000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="light"
//     />
//   </div>
// );
//   }
// }
