// @ts-check

import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

// BEGIN (write your solution here)
export default function getInvalidBooks(books) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive(),
    link: yup.string().min(1).url(),
    genre: yup.mixed().oneOf(genres),
  });

  const invalidBooks = books.filter((book) => !schema.isValidSync(book));

  return invalidBooks;
}
// END
