describe('Test Suite', () => {
    it('2 + 2 equals 4', () => {
        expect(2 + 2).toBe(4);
    });
    it('object, add key-value', () => {
        let obj = {key: 'value'};
        obj['newKey'] = 4;
        expect(obj).toEqual({key: 'value', newKey: 4})
    });
    it('2 + 2 <= 5', () => {
        expect(2 + 2).toBeLessThanOrEqual(5);
    });
})