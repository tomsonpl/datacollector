import { renderComponent, expect } from '../test_helper';
import Table from '../../src/components/common/Table';

describe('Table', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Table);
  });

  it('a thead', () => {
    expect(component.find('thead')).to.exist;
  });

  it('has a tr', () => {
    expect(component.find('tr')).to.exist;
  });
   it('has a tbody', () => {
    expect(component.find('tbody')).to.exist;
  });
});
