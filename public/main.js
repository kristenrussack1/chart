const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:8009/users");
    const data = await response.json();
    return data;
  };
  
  const addData = async () => {
    const data = await getDataFromBackend();
    const container = document.getElementById("container");
  };
  
  addData();
  
