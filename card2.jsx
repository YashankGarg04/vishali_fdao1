function fetchData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);  // false for synchronous request
  xhr.send();
  
  if (xhr.status === 200) {
    return JSON.parse(xhr.responseText);
  } else {
    throw new Error('Failed to fetch data');
  }
}

const data = fetchData('https://api.npoint.io/ded71005c9bbc9df5a82');


export default fetchData;