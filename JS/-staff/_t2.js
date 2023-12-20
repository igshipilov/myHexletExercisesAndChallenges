export default function protect(obj, protectedProps) {
  const handler = {
    set: (target, prop, value) => {
      if (protectedProps.includes(prop)) {
        throw new Error(`Error: Access to '${prop}' is restricted`);
      } else {
        target[prop] = value;
        return true;
      }
    },
    get: (target, prop) => {
      if (protectedProps.includes(prop)) {
        throw new Error(`Error: Access to '${prop}' is restricted`);
      } return target[prop];
    },
  };

  return new Proxy(obj, handler);
}

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
protectedUser.name = 'Jane';
protectedUser.age = 21;

console.log(protectedUser.name);
console.log(protectedUser.age);

console.log(protectedUser.password);
protectedUser.password = 'testPassword';
console.log(protectedUser.password);
