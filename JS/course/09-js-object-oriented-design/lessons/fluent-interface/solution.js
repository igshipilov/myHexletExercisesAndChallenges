// ======== MY =================
// export default function normalize(data) {
//   const normalizedData = data.map((obj) => {
//     const { name, country } = obj;
//     const normalizdedName = name.toLowerCase().trim();
//     const normalizdedCountry = country.toLowerCase().trim();

//     return { name: normalizdedName, country: normalizdedCountry };
//   });

//   const citiesGroupedByCountry = normalizedData.reduce((acc, obj) => {
//     const currentCountry = obj.country;
//     const currentCity = obj.name;
//     const group = acc[currentCountry] ?? [];

//     if (group.includes(currentCity)) {
//       return { ...acc };
//     } return { ...acc, [currentCountry]: group.concat(obj.name).sort() };
//   }, {});

//   return citiesGroupedByCountry;
// }
// =============================

// ======== TEACHER ============
export default function normalize(data) {
  return data
    .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
    .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
    .map(({ city, country }) => [country, city])
    .sort() // sort countries and cities

    .reduce((acc, [country, city]) => {
    // Содаём массив городов:
      //  -- если в исходном `acc` уже есть такой ключ со значением в нём, то возвращаем существующее значение (у нас это массив)
      //  -- иначе создаём пустой массив
      const citiesAcc = acc[country] ?? [];

      // Добавляем в массив городов текущий город
      const cities = citiesAcc.concat(city);

      // Избавляемся от дублей городов – так работает Set (да и вообще все все объекты содержат уникальные ключи)
      const uniqueCities = new Set(cities);

      return { ...acc, [country]: [...uniqueCities] };
    }, {});
}
// ============================

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'chICago', country: 'usa' },
  { name: 'Washington', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
  { name: 'Samara', country: '  ruSsiA' },
];

console.log(normalize(countries));
