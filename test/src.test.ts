import {numberToChinese, chineseToNumber} from '../src';
import {expect} from 'chai';

describe('数字转中文', function() {
    it('0 应该返回 零', function() {
        expect(numberToChinese(0)).to.be.equal('零');
    });
    it('1 应该返回 一', function() {
        expect(numberToChinese(1)).to.be.equal('一');
    });
    it('10 应该返回 十', function() {
        expect(numberToChinese(10)).to.be.equal('十');
    });
    it('11 应该返回 十一', function() {
        expect(numberToChinese(11)).to.be.equal('十一');
    });
    it('20 应该返回 二十', function() {
        expect(numberToChinese(20)).to.be.equal('二十');
    });
    it('100 应该返回 一百', function() {
        expect(numberToChinese(100)).to.be.equal('一百');
    });
    it('101 应该返回 一百零一', function() {
        expect(numberToChinese(101)).to.be.equal('一百零一');
    });
    it('111 应该返回 一百一十一', function() {
        expect(numberToChinese(111)).to.be.equal('一百一十一');
    });
    it('1010 应该返回 一千零一十', function() {
        expect(numberToChinese(1010)).to.be.equal('一千零一十');
    });
    it('111000 应该返回 十一万一千', function() {
        expect(numberToChinese(111000)).to.be.equal('十一万一千');
    });
    it('200100 应该返回 二十万零一百', function() {
        expect(numberToChinese(200100)).to.be.equal('二十万零一百');
    });
    it('3214511000 应该返回 三十二亿一千四百五十一万一千', function() {
        expect(numberToChinese(3214511000)).to.be.equal('三十二亿一千四百五十一万一千');
    });
});

describe('中文转数字', function() {
    it('零 应该返回 0', function() {
        expect(chineseToNumber('零')).to.be.equal(0);
    });
    it('一 应该返回 1', function() {
        expect(chineseToNumber('一')).to.be.equal(1);
    });
    it('十 应该返回 10', function() {
        expect(chineseToNumber('十')).to.be.equal(10);
    });
    it('十一 应该返回 11', function() {
        expect(chineseToNumber('十一')).to.be.equal(11);
    });
    it('二十 应该返回 20', function() {
        expect(chineseToNumber('二十')).to.be.equal(20);
    });
    it('一百 应该返回 100', function() {
        expect(chineseToNumber('一百')).to.be.equal(100);
    });
    it('一百零一 应该返回 101', function() {
        expect(chineseToNumber('一百零一')).to.be.equal(101);
    });
    it('一百一十一 应该返回 111', function() {
        expect(chineseToNumber('一百一十一')).to.be.equal(111);
    });
    it('一千零一十 应该返回 1010', function() {
        expect(chineseToNumber('一千零一十')).to.be.equal(1010);
    });
    it('十一万一千 应该返回 111000', function() {
        expect(chineseToNumber('十一万一千')).to.be.equal(111000);
    });
    it('二十万零一百 应该返回 200100', function() {
        expect(chineseToNumber('二十万零一百')).to.be.equal(200100);
    });
    it('三十二亿一千四百五十一万一千 应该返回 3214511000', function() {
        expect(chineseToNumber('三十二亿一千四百五十一万一千')).to.be.equal(3214511000);
    });
});