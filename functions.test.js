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
    const result = functions.isNullnull(d, e);
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
    const lastname = 'Perez';
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result).toEqual("Pepito Perez");
  });

  it('should be return Shirly when I sent Mass', () => {
    //ARRANGE
    const lastname = 'Mass';
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result).toEqual("Shirly Mass");
  });
})
