const add = (a, b) => a + b
const generateGreeting = (name = 'anonymous') => `Hello ${ name }`

test('should add two numbers', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
})

test('should return greeting', () => {
  const result = generateGreeting('Bob')

  expect(result).toBe('Hello Bob')
})

test('should return greeting for no name', () => {
  const result = generateGreeting()

  expect(result).toBe('Hello anonymous')
})


