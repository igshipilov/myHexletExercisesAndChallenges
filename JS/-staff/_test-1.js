// BEGIN (write your solution here)
let cart;

test('bucket', () => {
  cart = makeCart();
  const product1 = { name: 'car', price: 3 };
  const product2 = { name: 'house', price: 10 };

  expect(cart.items).toEqual([]);

  cart.addItem(product1, 5);
  expect(cart.getItems()).toEqual([
    { product: product1, count: 5 },
  ]);
  expect(cart.getItems().length).toEqual(1);
  expect(cart.getCount()).toEqual(5);
  expect(cart.getCost()).toEqual(15);

  cart.addItem(product2, 2);
  expect(cart.items).toEqual([
    { product: product1, count: 5 },
    { product: product2, count: 2 },
  ]);
  expect(cart.getItems().length).toEqual(2);
  expect(cart.getCount()).toEqual(7);
  expect(cart.getCost()).toEqual(35);
});

// END



