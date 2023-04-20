import * as React from 'react';
import { adaptRes } from './adapters';
import './style.css';

const itemApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { groupId: 1, nombre: 'Mario' },
        { groupId: 2, nombre: 'Lucia' },
        { groupId: 1, nombre: 'Luis' },
        { groupId: 1, nombre: 'Carmen' },
        { groupId: 3, nombre: 'Boris' },
        { groupId: 2, nombre: 'Oscar' },
      ]);
    }, 500);
  });

export default function App() {
  const [data, setData] = React.useState<MyGroupType>({});
  React.useEffect(() => {
    const fetchData = async () => {
      const res = (await itemApi()) as Users[];
      const adaptedRes = adaptRes(res);
      setData(adaptedRes);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <main className="container">
      <h2>
        React Practice by:{' '}
        <a
          href="https://www.youtube.com/@CodigoMentorTutoriales"
          target="_blank"
          rel="noreferrer"
        >
          CodigoMentor
        </a>
      </h2>{' '}
      {Object.keys(data).map((key) => (
        <React.Fragment key={key}>
          <h3 style={{marginBottom: 4}} > {`Grupo ${key}:`} </h3>
          <ul>
            {data[key].map(({ nombre }) => (
              <li>{nombre}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </main>
  );
}
