var assert = require('power-assert');
var moment = require('../index.js');

describe('moment-jst', function(){
  describe('moment.jst', function() {
    describe('utcを渡す', function(done) {
      it('9時間追加されたmomentオブジェクトが返るべき', function(done) {
        var utc = '2015-02-13T00:00:00.000Z';
        assert(moment.jst(utc).format("YYYY-MM-DD HH:mm:ss") === '2015-02-13 09:00:00');
        done();
      });
    });
    describe('jstを渡す', function(done) {
      it('タイムゾーン変更なしでmomentオブジェクトが返るべき', function(done) {
        var jst = '2015-02-13T09:00:00.000+09:00';
        assert(moment.jst(jst).format("YYYY-MM-DD HH:mm:ss") === '2015-02-13 09:00:00');
        assert(moment.jst(new Date(jst)).format("YYYY-MM-DD HH:mm:ss") === '2015-02-13 09:00:00');
        done();
      });
    });
  });
  describe('moment.prototype.jst', function() {
    describe('utcを渡す', function(done) {
      it('9時間追加されたmomentオブジェクトが返るべき', function(done) {
        var utc = '2015-02-13T00:00:00.000Z';
        assert(moment.utc(utc).jst().format("YYYY-MM-DD HH:mm:ss") === '2015-02-13 09:00:00');
        done();
      });
    });
    describe('タイムゾーンのデータがない日付情報をutcで受けて変換する', function(done) {
      it('9時間追加されたmomentオブジェクトが返るべき', function(done) {
        var dt = '2015-02-13';
        assert(moment.utc(dt).jst().format("YYYY-MM-DD HH:mm:ss") === '2015-02-13 09:00:00');
        done();
      });
    });
  });
});
