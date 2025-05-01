const table = document.createElement('table');
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        cell.innerText = `Row ${i + 1} Col ${j + 1}`;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.getElementById('dynamic-container').appendChild(table);

    const colorButton = document.createElement('button');
    colorButton.innerText = "Hover Over Me";
    colorButton.style.backgroundColor = 'red';
    colorButton.addEventListener('mouseover', () => {
      colorButton.style.backgroundColor = 'green';
    });
    colorButton.addEventListener('mouseout', () => {
      colorButton.style.backgroundColor = 'red';
    });
    document.getElementById('dynamic-container').appendChild(colorButton);

    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Focus Me';
    textBox.style.backgroundColor = 'green';
    textBox.addEventListener('focus', () => {
      textBox.style.backgroundColor = 'yellow';
    });
    textBox.addEventListener('change', () => {
      alert('Hello! You changed the text.');
    });
    document.getElementById('dynamic-container').appendChild(document.createElement('br'));
    document.getElementById('dynamic-container').appendChild(textBox);

    const liInput = document.createElement('input');
    liInput.type = 'text';
    liInput.placeholder = 'Enter item for list';

    const liButton = document.createElement('button');
    liButton.innerText = 'Add Item (Double Click)';
    liButton.addEventListener('dblclick', () => {
      const text = liInput.value.trim();
      if (text !== '') {
        const li = document.createElement('li');
        li.innerText = text;
        document.getElementById('item-list').appendChild(li);
        liInput.value = '';
      }
    });

    document.getElementById('dynamic-container').appendChild(document.createElement('br'));
    document.getElementById('dynamic-container').appendChild(liInput);
    document.getElementById('dynamic-container').appendChild(liButton);

    const keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.placeholder = 'Type here...';

    const keyCounter = document.createElement('input');
    keyCounter.type = 'text';
    keyCounter.readOnly = true;
    keyCounter.placeholder = 'Key Press Count';
    let count = 0;

    keyInput.addEventListener('keydown', () => {
      count++;
      keyCounter.value = count;
    });

    document.getElementById('dynamic-container').appendChild(document.createElement('br'));
    document.getElementById('dynamic-container').appendChild(keyInput);
    document.getElementById('dynamic-container').appendChild(keyCounter);
      
