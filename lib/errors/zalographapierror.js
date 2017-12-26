/**
 * `FacebookGraphAPIError` error.
 *
 * References:
 *   - https://developers.zalo.me/docs/api/social-api/phu-luc/ma-loi-post-1067
 *
 * @constructor
 * @param {string} [message]
 * @param {string} [type]
 * @param {number} [code]
 * @param {number} [subcode]
 * @param {string} [traceID]
 * @access public
 */
function ZaloGraphAPIError(message, type, code, subcode, traceID) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'ZaloGraphAPIError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.traceID = traceID;
  this.status = 500;
}

// Inherit from `Error`.
ZaloGraphAPIError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = ZaloGraphAPIError;
