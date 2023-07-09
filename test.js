const { stringConcat } = require('./index')

describe('stringConcat', () => {
  it('should concatenate two strings', () => {
    const result = stringConcat('hello').stringConcat('world').stringConcat();
    expect(result).toBe('hello world');
  });

  it('should return the initial string if no additional string is passed', () => {
    const result = stringConcat('hello').stringConcat();
    expect(result).toBe('hello');
  });

  it('should handle an empty initial string', () => {
      const result = stringConcat('').stringConcat('world').stringConcat();
    expect(result).toBe('world');
  });

  it('should handle multiple additional strings', () => {
    const result = stringConcat('hello').stringConcat('beautiful').stringConcat('world').stringConcat();
    expect(result).toBe('hello beautiful world');
  });
    
    it('should return a object if the last call is omitted', () => {
        const result = stringConcat('hello').stringConcat('world');
        expect(typeof result).toBe('object');
  });
});