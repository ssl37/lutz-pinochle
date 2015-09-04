'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('pinochle App', function() {

  describe('pinochle hand view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the pinochle hand as a user types into the search box', function() {

      var pinochle_hand = element.all(by.repeater('card in hand'));
      var suit = element(by.model('suit'));
      var value = element(by.model('val'));

      expect(pinochle_hand.count()).toBe(12);

      suit.sendKeys('H');
      expect(pinochle_hand.count()).toBe(4);

      suit.clear();
      value.sendKeys('9');
      expect(pinochle_hand.count()).toBe(2);
    });

    it('should be possible to control suit order via the drop down select box', function() {

	    var suitColumn = element.all(by.repeater('card in hand').column('card.suit'));
	    var value = element(by.model('val'));

	    function getNames() {
		return suitColumn.map(function(elm) {
			return elm.getText();
		    });
	    }

	    value.sendKeys('J'); //let's narrow the dataset to make the test assertions shorter

	    expect(getNames()).toEqual([
					"D",
					"H",
					"S"
					]);

	    element(by.model('hand_order')).element(by.css('option[value="-suit"]')).click();

	    expect(getNames()).toEqual([
					"S",
					"H",
					"D"
					]);
	});
      });
});
