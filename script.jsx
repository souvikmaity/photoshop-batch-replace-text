var doc;

try {
    doc = app.activeDocument;
    // the front document
} catch(e) {}
var txtLayer = doc.layers.getByName('promo');
// obviously, the text layer if found

if (txtLayer) {
  for (var j = 3; j < 26; j++) {
    txtLayer.textItem.contents = 'Your Text Here';
      // update layer content
      var ext = '.png',
      dir = decodeURI(doc.path) + '/png24',
      fileName = dir + '/' + j + ext,
      i = 0;
      if (!Folder(dir).exists) Folder(dir).create();
        while (File(fileName).exists)
          fileName = dir + '/' + j + '-' + (++i) + ext;
          var file = new File(fileName),
          opts = new ExportOptionsSaveForWeb();
          with (opts) {
            format = SaveDocumentType.PNG;
            PNG24 = true;
          }
          doc.exportDocument(file, ExportType.SAVEFORWEB, opts);
          // save for web
    }
  }

if (doc) {
    doc.close(SaveOptions.DONOTSAVECHANGES);
    // close the original layered document without saving
}
doc = null;
// remove reference
