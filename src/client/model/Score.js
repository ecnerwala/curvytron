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
