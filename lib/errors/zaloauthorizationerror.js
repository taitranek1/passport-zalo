/**
 * `ZaloAuthorizationError` error.
 *
 * ZaloAuthorizationError represents an error in response to an
 * authorization request on Facebook.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 * References:
 *   - https://developers.zalo.me/docs/api/social-api/phu-luc/ma-loi-post-1067
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function ZaloAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'ZaloAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

// Inherit from `Error`.
ZaloAuthorizationError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = ZaloAuthorizationError;
