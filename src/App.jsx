import { useEffect, useState } from 'react';
import AppRedux from './AppRedux';
import { http } from './utils';
import './App.scss';

import { Button, Input, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import InsuredItem from './components/InsuredItem';

function App() {
  const [insuredTree, setInsuredTree] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isRoot, setIsRoot] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get(`/policyholders?code=001`);
        setInsuredTree(() => data);
        setIsRoot(() => data[0].code);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  }, []);

  const getInsuredTreebyId = async (id) => {
    try {
      const { data } = await http.get(`/policyholders?code=${id}`);
      setInsuredTree(() => data);
      setIsRoot(() => data[0].code);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const searchInsureItem = (val) =>
    val ? getInsuredTreebyId(val) : getInsuredTreebyId('001');

  const renderList = (nodes) =>
    nodes.map((node) => (
      <li key={node.code}>
        <InsuredItem
          node={node}
          getInsuredTreebyId={getInsuredTreebyId}
          isRoot={isRoot}
        />
        {renderUl(node.l)}
        {renderUl(node.r)}
      </li>
    ));

  const renderUl = (nodes) => {
    if (!nodes) return;
    return <ul>{renderList(nodes)}</ul>;
  };

  return (
    <AppRedux>
      <div className='container'>
        <h1>Clinco - Insured Tree Test</h1>
        <Divider />
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onPressEnter={() => searchInsureItem(inputValue)}
          onBlur={() => searchInsureItem(inputValue)}
          placeholder='Search...'
          prefix={<SearchOutlined />}
          allowClear
          style={{ width: '400px' }}
        />
        <Divider />
        <Button onClick={() => getInsuredTreebyId('001')}>
          Default InsuredTree
        </Button>
        <div className='mt-35'>{renderUl(insuredTree)}</div>
      </div>
    </AppRedux>
  );
}

export default App;
