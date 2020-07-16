

const networkRequest = () => {
    setTimeout(() => {
      console.log((new Date())+':Async Code');
      setTimeout(() => {
        console.log((new Date())+':Async Code 11');
      }, 3000);
    }, 6000);
  };
  console.log((new Date())+':Hello World');
  networkRequest();
  console.log((new Date())+':The End');

  setTimeout(() => {
    console.log((new Date())+':Async Code 00');
  }, 3000);