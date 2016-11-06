/**
 * Base Score
 */
function BaseScore(id)
{
    EventEmitter.call(this);

    this.id              = id;
    this.score           = 0;
    this.roundScore      = 0;
}

BaseScore.prototype = Object.create(EventEmitter.prototype);
BaseScore.prototype.constructor = BaseScore;

/**
 * Equal
 *
 * @param {Score} score
 *
 * @return {Boolean}
 */
BaseScore.prototype.equal = function(score)
{
    return this.id === score.id;
};

/**
 * This score
 *
 * @param {Number} score
 */
BaseScore.prototype.addScore = function(score)
{
    var e = new Error('dummy');
    var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
        .replace(/^\s+at\s+/gm, '')
        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
        .split('\n');
    console.log(stack);
    console.log('addScore(', score, ')');
    this.setRoundScore(this.roundScore + score);
};

/**
 * Resolve score
 *
 * @param {Number} score
 */
BaseScore.prototype.resolveScore = function()
{
    var e = new Error('dummy');
    var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
        .replace(/^\s+at\s+/gm, '')
        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
        .split('\n');
    console.log(stack);
    console.log('resolveScore()');
    this.setScore(this.score + this.roundScore);
    this.roundScore = 0;
};

/**
 * This round score
 *
 * @param {Number} score
 */
BaseScore.prototype.setRoundScore = function(score)
{

    var e = new Error('dummy');
    var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
        .replace(/^\s+at\s+/gm, '')
        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
        .split('\n');
    console.log(stack);

    console.log('setRoundScore()');
    this.roundScore = score;
};

/**
 * This score
 *
 * @param {Number} score
 */
BaseScore.prototype.setScore = function(score)
{
    console.log('setScore(', score, ')');
    this.score = score;
};

/**
 * Clear
 */
BaseScore.prototype.clear = function()
{
    console.log('clear()');
    this.roundScore          = 0;
};

/**
 * Destroy
 */
BaseScore.prototype.destroy = function()
{
    console.log('destroy');
    this.clear();
};

/**
 * Serialize
 *
 * @return {Object}
 */
BaseScore.prototype.serialize = function()
{
    return {
        id: this.id,
        score: this.score
    };
};
