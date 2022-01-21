let randomEmail = Math.random().toString(36).slice(2, 8)
let randomName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

const newUser = {
        firstName: `D${randomName}`,
        lastName: 'Rodriguez',
        email: `testUser${randomEmail}@gmail.com`,
        password: 'Hello@12345'
};

export default newUser;
