const TicTacToe = require('../src/tic-tac-toe.js');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

global.expect = chai.expect;
global.sinon = sinon;
chai.use(sinonChai);

describe('TicTacToe', () => {
    describe('#getCurrentPlayerSymbol', () => {
        it('should return correct player symbol before any turns', () => {
            const game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');
        });

        it('should return correct player symbol after 1st turn', () => {
            const game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');
        });

        it('should return correct player symbol', () => {
            let game;

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game = new TicTacToe();
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getCurrentPlayerSymbol()).to.equal('o')
        });
    });
    describe('#getFieldValue', () => {
        it('should return correct field value', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getFieldValue(0, 0)).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);


            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(0, 0)).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(1, 1)).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getFieldValue(1, 0)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(1, 2)).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(1, 0)).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getFieldValue(1, 1)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getFieldValue(2, 0)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 2)).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(1, 1)).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getFieldValue(2, 1)).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getFieldValue(0, 2)).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getFieldValue(0, 1)).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getFieldValue(2, 2)).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getFieldValue(0, 0)).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getFieldValue(1, 2)).to.equal('o')

        });
    });
    describe('#isDraw', () => {
        it('should return false if game is not finished or there is a winner, and true if it is a draw', () => {
            const game = new TicTacToe();
            game.nextTurn(1, 1);
            game.nextTurn(0, 0);
            game.nextTurn(0, 1);
            game.nextTurn(1, 2);
            game.nextTurn(0, 2);
            game.nextTurn(2, 1);
            game.nextTurn(1, 0);
            game.nextTurn(2, 2);
            game.nextTurn(0, 1);
            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);
        });
        it('should return false if game is not finished or there is a winner, and true if it is a draw', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isDraw()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isDraw()).to.equal(false);

        });
    });
    describe('#noMoreTurns', () => {
        it('should true if game field is full and false otherwise', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.noMoreTurns()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.noMoreTurns()).to.equal(true);

        });
    });
    describe('#getWinner', () => {
        it('should return null when no winner: 1st turn', () => {
            const game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);
        });

        it('should return null when no winner: 2nd turn', () => {
            const game = new TicTacToe();
            game.nextTurn(1, 0);
            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);
        });

        it('should return X after win-line', () => {
            const game = new TicTacToe();
            game.nextTurn(1, 0);
            game.nextTurn(2, 0);
            game.nextTurn(1, 1);
            game.nextTurn(2, 1);
            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal('x');
        });

        it('should return winner of the game or null', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);


            game = new TicTacToe();
            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 0);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(0, 2);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(1, 1);
            expect(game.getWinner()).to.equal(null);

            game.nextTurn(2, 0);
            expect(game.getWinner()).to.equal('x')

        });
    });
    describe('#isFinished', () => {
        it('should not declare game as finished after 1st turn', () => {
            const game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
        });

        it('should declare game as finished after last turn', () => {
            const game = new TicTacToe();
            game.nextTurn(0, 0);
            game.nextTurn(0, 1);
            game.nextTurn(0, 2);
            game.nextTurn(1, 0);
            game.nextTurn(1, 1);
            game.nextTurn(1, 2);
            game.nextTurn(2, 0);
            game.nextTurn(2, 1);
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(true);
        });

        it('should return winner of the game or null', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(true);


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(true)

        });
    });
    describe('#nextTurn', () => {
        it('should update game state correctly', () => {
            let game;

            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('o');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(true);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(true);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('o');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(true);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('o');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');


            game = new TicTacToe();
            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(true);
            expect(game.isDraw()).to.equal(true);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');


            game = new TicTacToe();
            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(1, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 1)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 1);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 1)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(0, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 2)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(0, 0);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(0, 0)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('o');

            game.nextTurn(2, 2);
            expect(game.isFinished()).to.equal(false);
            expect(game.getWinner()).to.equal(null);
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(2, 2)).to.equal('o');
            expect(game.getCurrentPlayerSymbol()).to.equal('x');

            game.nextTurn(1, 0);
            expect(game.isFinished()).to.equal(true);
            expect(game.getWinner()).to.equal('x');
            expect(game.noMoreTurns()).to.equal(false);
            expect(game.isDraw()).to.equal(false);
            expect(game.getFieldValue(1, 0)).to.equal('x');
            expect(game.getCurrentPlayerSymbol()).to.equal('o')

        });
    });
});
