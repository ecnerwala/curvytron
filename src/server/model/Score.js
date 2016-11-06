/**
 * Score
 *
 * @param {ID} id
 */
function Score(id)
{
    BaseScore.call(this, id);
}

Score.prototype = Object.create(BaseScore.prototype);
Score.prototype.constructor = Score;

/**
 * Set score
 *
 * @param {Number} score
 */
Score.prototype.setScore = function(score)
{
    BaseScore.prototype.setScore.call(this, score);
    console.log('emiting score');
    this.emit('score', this);
};

/**
 * Set round score
 *
 * @param {Number} score
 */
Score.prototype.setRoundScore = function(score)
{
    BaseScore.prototype.setRoundScore.call(this, score);
    this.emit('score:round', this);
};
