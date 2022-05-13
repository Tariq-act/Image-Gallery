import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header
        placeholder='Enter a image name...'
        setSelectedImg={setSelectedImg}
      />
      {/* <Card className='images-content' /> */}
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default App;
