import React, { useState } from 'react';
import { View, TextField, Button, Divider, ListBox, Item, Content } from '@adobe/react-spectrum';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Importing icons from react-icons
import './AirportService.css'; // Import your CSS file for AirportService styling

const AirportService = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = () => {
    if (newItemText.trim() === '') return;
    const newItem = {
      id: items.length + 1,
      text: newItemText.trim(),
    };
    setItems([...items, newItem]);
    setNewItemText('');
  };

  const handleEditItem = (id, newText) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDeleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <View padding="size-200">
      <h2>Airport Service</h2>

      {/* Add Item Form */}
      <View marginBottom="size-200">
        <TextField
          label="New Item"
          value={newItemText}
          onChange={setNewItemText}
          width="size-2400"
        />
        <Button variant="cta" onPress={handleAddItem} marginStart="size-100">
          Add Item
        </Button>
      </View>

      <Divider size="M" />

      {/* Todo List */}
      <Content>
        <ListBox selectionMode="multiple">
          {items.map(item => (
            <Item key={item.id}>
              <View >
                <div className='todolist'>
                <TextField
                  className='item'
                  value={item.text}
                  onChange={value => handleEditItem(item.id, value)}
                />
                <Button variant="overBackground" onPress={() => handleDeleteItem(item.id)}>
                  <AiOutlineDelete /> {/* Using AiOutlineDelete icon from react-icons */}
                </Button>
                <Button variant="overBackground" marginStart="size-100">
                  <AiOutlineEdit /> {/* Using AiOutlineEdit icon from react-icons */}
                </Button>
                </div>
              </View>
            </Item>
          ))}
        </ListBox>
      </Content>
    </View>
  );
};

export default AirportService;
