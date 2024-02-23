const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const b = 6;
    const c = 8;
    //ACT
    const result = functions.multiply(b, c);
    //ASSERT
    expect(result).toEqual(48);

  })
});
describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    const d = null;
    const e = null;
    //ACT
    const result = functions.isNull(d, e);
    //ASSERT
    expect(result).toBeNull();
  });

  it('should be return null', () => {
    //ARRANGE
    const name = null;
    const lastname = null;
    //ACT
    const result = functions.isNull(name, lastname);
    //ASSERT
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const f = true;
    //ACT
    const result = functions.checkTruthy(f);
    //ASSERT
    expect(result).toBeTruthy();
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastName = 'Perez';
    //ACT
    const result = functions.addLastName(lastName);
    //ASSERT
    expect(result).toEqual({firstname: 'Pepito', lastname: 'Perez'});
  });

  it('should be return Shirly Mass when I sent Shirly', () => {
    // Arrange
    const lastName = 'Mass';
    
    // Act
    const result = functions.addLastName(lastName);
    
    // Assert
    expect(result.lastname).toBe('Mass');
  });

  
  it('should be return multiple when I sent false and one numbers', () => {
    //ARRANGE
    const g = false;
    const h = 20;
    //ACT
    const result = functions.multiply(g, h);
    //ASSERT
    expect(result).toEqual(0);

  });

})
