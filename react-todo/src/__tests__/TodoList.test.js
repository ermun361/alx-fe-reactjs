import React  from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList correctly and shows initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();

    });


    test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    
    // 1. Simulate typing
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    
    // 2. Simulate form submission (Using submit on the input is more reliable in JSDOM)
    fireEvent.submit(input);

    // 3. Verify the new todo appears in the list
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // 4. Verify input is cleared
    expect(input.value).toBe('');
  });

  
    test('toggles a todo item as completed', () => {
        render(<TodoList />);

        const todoItem = screen.getByText('Learn React');
    
        //Initial state: not completed
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        // click to Toggle back to not completed
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
     });

        test('deletes a todo item', () => {
        render(<TodoList />);

        const todoToDelete = screen.getByText('Learn React');
        const deleteButton = screen.getAllByText('Delete')[0]; // First delete button

        fireEvent.click(deleteButton);

        expect(todoToDelete).not.toBeInTheDocument();
        });
    });
