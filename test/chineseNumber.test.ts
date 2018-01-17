import {NumberToChinese, ChineseToNumber} from '../src';
import {expect} from 'chai';

describe('数字转中文', function() {
    it('0 应该返回 零', function() {
        expect(NumberToChinese(0)).to.be.equal('零');
    });
    it('1 应该返回 一', function() {
        expect(NumberToChinese(1)).to.be.equal('一');
    });
    it('10 应该返回 十', function() {
        expect(NumberToChinese(10)).to.be.equal('十');
    });
    it('11 应该返回 十一', function() {
        expect(NumberToChinese(11)).to.be.equal('十一');
    });
    it('20 应该返回 二十', function() {
        expect(NumberToChinese(20)).to.be.equal('二十');
    });
    it('100 应该返回 一百', function() {
        expect(NumberToChinese(100)).to.be.equal('一百');
    });
    it('101 应该返回 一百零一', function() {
        expect(NumberToChinese(101)).to.be.equal('一百零一');
    });
    it('111 应该返回 一百一十一', function() {
        expect(NumberToChinese(111)).to.be.equal('一百一十一');
    });
    it('1010 应该返回 一千零一十', function() {
        expect(NumberToChinese(1010)).to.be.equal('一千零一十');
    });
    it('111000 应该返回 十一万一千', function() {
        expect(NumberToChinese(111000)).to.be.equal('十一万一千');
    });
    it('200100 应该返回 二十万零一百', function() {
        expect(NumberToChinese(200100)).to.be.equal('二十万零一百');
    });
    it('3214511000 应该返回 三十二亿一千四百五十一万一千', function() {
        expect(NumberToChinese(3214511000)).to.be.equal('三十二亿一千四百五十一万一千');
    });
});

describe('中文转数字', function() {
    it('零 应该返回 0', function() {
        expect(ChineseToNumber('零')).to.be.equal(0);
    });
    it('一 应该返回 1', function() {
        expect(ChineseToNumber('一')).to.be.equal(1);
    });
    it('十 应该返回 10', function() {
        expect(ChineseToNumber('十')).to.be.equal(10);
    });
    it('十一 应该返回 11', function() {
        expect(ChineseToNumber('十一')).to.be.equal(11);
    });
    it('二十 应该返回 20', function() {
        expect(ChineseToNumber('二十')).to.be.equal(20);
    });
    it('一百 应该返回 100', function() {
        expect(ChineseToNumber('一百')).to.be.equal(100);
    });
    it('一百零一 应该返回 101', function() {
        expect(ChineseToNumber('一百零一')).to.be.equal(101);
    });
    it('一百一十一 应该返回 111', function() {
        expect(ChineseToNumber('一百一十一')).to.be.equal(111);
    });
    it('一千零一十 应该返回 1010', function() {
        expect(ChineseToNumber('一千零一十')).to.be.equal(1010);
    });
    it('十一万一千 应该返回 111000', function() {
        expect(ChineseToNumber('十一万一千')).to.be.equal(111000);
    });
    it('二十万零一百 应该返回 200100', function() {
        expect(ChineseToNumber('二十万零一百')).to.be.equal(200100);
    });
    it('三十二亿一千四百五十一万一千 应该返回 3214511000', function() {
        expect(ChineseToNumber('三十二亿一千四百五十一万一千')).to.be.equal(3214511000);
    });
});