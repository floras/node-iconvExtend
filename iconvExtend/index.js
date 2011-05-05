var iconvExtend = function(iconv) {
	var ICONV = iconv;	// flag : //TRANSLIT//IGNORE
	Buffer.prototype.toUTF8From  = function(charset, flag) {		
		var flag = flag || ''; 
		var iconv = new ICONV(charset, 'UTF-8' + flag);
		return iconv.convert(this).toString('UTF-8');
	};
	Buffer.prototype.toASCIIFrom = function(charset, flag) {		
		var flag = flag || ''; 
		var iconv = new ICONV(charset, 'ASCII' + flag);
		return iconv.convert(this).toString('ASCII');
	};	
	Buffer.prototype.iconv = function(from, to, flag) {		
		var flag = flag || ''; 
		var iconv = new ICONV(from, to + flag);
		return iconv.convert(this);
	};
	Buffer.toASCIIFrom  = function (buffer, charset, flag) {
		return buffer.toASCIIFrom(charset, flag);
	};	
	Buffer.toUTF8From  = function (buffer, charset, flag) {
		return buffer.toUTF8From(charset, flag);
	};
	Buffer.iconv = function(buffer, from, to, flag) {
		return buffer.iconv(from, to, flag);
	};
	String.prototype.toCharset   = function(charset, flag) {	
		var flag = flag || ''; 
		var iconv = new ICONV('UTF-8', charset + flag);
		return iconv.convert(this.toString());
	};
	String.toCharset = function (string, charset, flag) {
		return string.toCharset(charset, flag);
	};
};
module.exports = iconvExtend;