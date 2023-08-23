import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { notification } from 'antd';
import LoginPage from '@/pages/Login/Login';

describe('Login Page', () => {
  let mockErrorNotification: jest.SpyInstance;

  beforeEach(() => {
    mockErrorNotification = jest.spyOn(notification, 'error');
  });

  afterEach(() => {
    mockErrorNotification.mockRestore();
  });

  test('inputs for email and password are displayed', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(getByPlaceholderText('Email*')).toBeInTheDocument();
    expect(getByPlaceholderText('Пароль*')).toBeInTheDocument();
  });

  test('Login button is disabled if the fields are empty', async () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    waitFor(() => {
      fireEvent.change(getByPlaceholderText('Email*'), { target: { value: '' } });
      fireEvent.change(getByPlaceholderText('Пароль*'), { target: { value: '' } });
    });

    expect(getByText('Войти')).toBeDisabled();
  });

  test('allows the user to log in with valid credentials', () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    waitFor(() => {
      fireEvent.change(getByPlaceholderText('Email*'), { target: { value: 'correct@email.com' } });
      fireEvent.change(getByPlaceholderText('Пароль*'), { target: { value: 'correct-password' } });
      fireEvent.click(getByText('Войти'));
    });
  });

  test('does not allow the user to log in with invalid credentials', () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    waitFor(() => {
      fireEvent.change(getByPlaceholderText('Email*'), { target: { value: 'wrong@email.com' } });
      fireEvent.change(getByPlaceholderText('Пароль*'), { target: { value: 'wrong-password' } });
      fireEvent.click(getByText('Войти'));
    });
  });
});
