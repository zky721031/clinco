import style from './style.module.scss';

export default function InsuredItem({ node, getInsuredTreebyId, isRoot }) {
  const { code, name, introducer_code } = node;
  return (
    <div
      onClick={() => getInsuredTreebyId(code)}
      className={`${style.InsuredItem} ${introducer_code ? style.green : ''} ${
        code === isRoot ? style.yellow : ''
      }`}
    >
      <p className='p-0 m-0'>Id - {code}</p>
      <p className='p-0 m-0'>Name -{name}</p>
    </div>
  );
}
