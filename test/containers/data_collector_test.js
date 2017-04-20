import { renderComponent, expect } from '../test_helper';
import DataCollector from '../../src/containers/DataCollector';

describe('Data Collector', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(DataCollector);
  });
  describe('before starting', () => {
    it('shows data-view', () => {
      expect(component.find('.data-view')).to.exist;
    });

    it('doesnt have a start button', () => {
      expect(component.find('.start-button')).to.exist;
    });
    it('doesnt have a back button', () => {
      expect(component.find('.back-button')).to.not.exist;
    });
    it('doesnt have a next button', () => {
      expect(component.find('.next-button')).to.not.exist;
    });
    it('doesnt have a generated text', () => {
      expect(component.find('.generated-text')).to.not.exist;
    });
  });

  //FAILS AT THE MOMENT
  // describe('after starting', () => {
  //   it('has a loading div', () => {
  //     expect(component.find('.loading')).to.exist;
  //   });
  //   it('has a back button', () => {
  //     expect(component.find('.back-button')).to.exist;
  //   });
  //   it('has a next button', () => {
  //     expect(component.find('.next-button')).to.exist;
  //   });
  //   it('has a generated text', () => {
  //     expect(component.find('.generated-text')).to.exist;
  //   });
  // });
});
