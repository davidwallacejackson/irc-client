import {
  describeModule,
  it
} from 'ember-mocha';

describeModule('adapter:application', 'ApplicationAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
}, function() {
  // Replace this with your real tests.
  it('should exist', function() {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
