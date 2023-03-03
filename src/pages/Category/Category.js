import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../components/Button/Button';

const Category = () => {
  const [msg, setMsg] = useState(null);

  const { categories } = useSelector((store) => store.category);

  return (
    <>
      <div style={{
        maxWidth: '400px', marginInline: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center',
      }}
      >
        <div>
          {msg && <div>{msg}</div>}
          <Button onClick={() => setMsg(categories[0])} btnType="primary" type="button">Check status</Button>
        </div>
      </div>
    </>
  );
};

export default Category;
