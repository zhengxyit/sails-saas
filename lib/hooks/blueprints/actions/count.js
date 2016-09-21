/**
 * Module dependencies
 */
var actionUtil = require('../actionUtil');

/**
 * Count Record
 *
 * get
 *
 * The API execution results will return a total of
 *
 * Required:
 * @param  Not essential condition
 *
 * Optional:
 * @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
 */

module.exports = function findOneRecord(req, res) {
  var Model = actionUtil.parseModel(req);
  var query = Model.count().where(actionUtil.parseCriteria(req));
  query = actionUtil.populateRequest(query, req);
  query.exec(function found(err, result) {
    if (err) return res.serverError(err);
      res.json({count:result})
  });
};
