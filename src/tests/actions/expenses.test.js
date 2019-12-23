import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action =removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should s ', () => {
    const action = editExpense('123',{new: '456'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
         id : '123',
         updates : {
             new: '456'
         }
        
    })
})