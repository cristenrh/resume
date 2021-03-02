import React from 'react';


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};


function ListDisplay() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    people: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
  //   const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
   const apiUrl = `https://swapi.dev/api/people`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((people) => {
        setAppState({ loading: false, people: people });
      });
  }, [setAppState]);


  return (
      <div className="App">
          <div className="resume">
              <div className="site-banner-header">
                  <section  className="hero">
                      <div  className="hero-body">
                          <div  className="container">
                              <div  className="site-banner-header">
                                  <h1  className="resume">
                                      Home
                                  </h1>
                              </div>
                          </div>
                      </div>
                  </section>

                  <div className='repo-container'>
                  <ListLoading isLoading={appState.loading} repos={appState.repos} />
                  </div>
              </div>
          </div>
      </div>
      );
    }

export default List;