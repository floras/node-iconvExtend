INTRO
========

This extends built-in object. (buffer, string)


USAGE
========

    var Iconv = require('iconv').Iconv;
    require('iconvExtend')(Iconv);


METHOD I
=========

    (buffer).toUTF8From(charset, flag);
    (buffer).toASCIIFrom(charset, flag);
    (buffer).iconv(fromCharset, toCharset, flag);
    (string).toCharset(charset, flag);


METHOD II
=========
	
    Buffer.toUTF8From(buffer, charset, flag);
    Buffer.toASCIIFrom(buffer, charset, flag);
    Buffer.iconv(buffer, fromCharset, toCharset, flag);
    String.toCharset(string, charset, flag);


EXAMPLE
========

    var EUCKR = "HI 가".toCharset('EUC-KR');
    var EUCKR = String.toCharset("HI 가", 'EUC-KR');

    var SOURCE = fs.readFileSync('EUC-KR.html');
    var ToUTF8_1 = SOURCE.toUTF8From('EUC-KR', 'ti'); // flag : t-> '//TRANSLT', i -> '//IGNORE'
    var ToUTF8_2 = Buffer.toUTF8From(SOURCE, 'EUC-KR', 't');
