import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantList from './RestaurantList';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('RestaurantList', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });
  context('without restaurants', () => {
    it("doesn't exist", () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
        restaurantInfo: {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
      }));
      const { getByRole } = render(<RestaurantList restaurants={[]} />);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
  context('with restaurants', () => {
    it('renders a list of restaurants', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {
            id: 100, name: '마녀주방', category: '한식', address: '서울시 강남구',
          },
          {
            id: 101, name: '시카고피자', category: '양식', address: '이태원동',
          },
          {
            id: 102, name: '키와미', category: '일식', address: '분당구 정자동',
          },
        ],
        restaurantInfo: {
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
      }));
      const { getByText, getByRole } = render(<RestaurantList />);

      expect(getByText(/마녀주방 | 한식 | 서울시 강남구/i)).not.toBeNull();
      expect(getByText(/시카고피자 | 양식 | 이태원동/i)).not.toBeNull();
      expect(getByText(/키와미 | 일식 | 분당구 정자동/i)).not.toBeNull();

      expect(getByRole('list').children).toHaveLength(3);
    });
  });
});
