import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Users } from './UsersList/UsersList';
import { Footer } from './Footer/Footer';
import { Container } from './Layout/Layout.styled';
import { MainButton } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { fetchUsers } from '../Api/fetchUsers';
let page = 1;
export const App = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers(page);
      if (users.length === 0) {
        toast('Users not found', {
          position: 'top-right',
          autoClose: 1500,
          theme: 'dark',
        });
      } else {
        try {
          setStatus('pending');
          if (users.length !== 0) {
            setStatus('resolved');
            setUsers(users);
          }
        } catch (err) {
          setStatus('rejected');
          console.log(err.message);
          toast(
            {
              message: err.message,
              type: 'error',
            },
            {
              position: 'top-right',
              autoClose: 1500,
              theme: 'dark',
            }
          );
        }
      }
    };
    getUsers();
  }, []);
  const loadMore = async () => {
    setStatus('pending');
    try {
      const newUsers = await fetchUsers((page + 1));
       page += 1;
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
      setStatus('resolved');
    } catch (err) {
      setStatus('rejected');
    }
  };

  if (status === 'idle') {
    return (
      <Layout>
        <Header />
        <main className="main">
          <Container className="main__container"></Container>
        </main>
        <Footer />
        <GlobalStyle />
        <ToastContainer
          autoClose={15000}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  }

  if (status === 'pending') {
    return (
      <Layout>
        <Header />
        <main className="main">
          <Container className="main__container">
            <Users users={users} />
            <MainButton className="button" onClick={loadMore}>
              Loading...
            </MainButton>
          </Container>
        </main>
        <Footer />
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  }
  if (status === 'resolved') {
    return (
      <Layout>
        <Header />
        <main className="main">
          <Container className="main__container">
            <Users users={users} />
            <MainButton className="button" onClick={loadMore}>
              Load more
            </MainButton>
          </Container>
        </main>
        <Footer />
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  }

  if (status === 'rejected') {
    return (
      <Layout>
        <Header />
        <main className="main">
          <Container className="main__container">
            {toast('Something went wrong', {
              position: 'center',
              autoClose: 25000,
              theme: 'dark',
            })}
          </Container>
        </main>
        <Footer />
        <GlobalStyle />
        <ToastContainer
          autoClose={2500}
          style={{ boxShadow: '0px -0px 3px whitesmoke', height: '70px' }}
        />
      </Layout>
    );
  }
};
