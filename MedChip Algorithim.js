function autofillmedchipv1Form(e) {
  var timestamp = e.values[0];
  var firstname = e.values[1];
  var lastname = e.values[2];
  var address = e.values[3];
  var dateofbirth = e.values[4];
  var phonenumber = e.values[5];
  var height = e.values[6];
  var weight = e.values[7];
  var bloodtype = e.values[8];
  var emergencynamefl = e.values[9];
  var emergencyaddress = e.values[10];
  var emergencynumber = e.values[11];
  var doyouhaveanyallergies = e.values[12];
  var listofallergies = e.values[13];
  var doyouhaveinsurance = e.values[14];
  var nameofinsurancecompany = e.values[15];
  var policynumber = e.values[16];
  var expirydate = e.values[17];
  var emailaddress =e.values[18]

  var medchipFormFile = DriveApp.getFileById("1qKQbeIrWLjGuSfSyQybXQUxpRj_UNUVYDup8SUtfFoE");
  var medchipFormFolder = DriveApp.getFolderById ("1-raJ6wpSV4DsKZ4510u9J3cTaJsM0aaw");

  var copy = medchipFormFile.makeCopy(lastname + ',' + firstname, medchipFormFolder)
  var doc = DocumentApp.openById(copy.getId())
  var body = doc.getBody();


  body.replaceText("{{FIRSTNAME}}", firstname);
  body.replaceText("{{LASTNAME}}", lastname);
  body.replaceText("{{ADDRESS}}", address);
  body.replaceText("{{DATE OF BIRTH}}", dateofbirth);
  body.replaceText("{{PHONE NUMBER}}", phonenumber);
  body.replaceText("{{HEIGHT}}", height);
  body.replaceText("{{WEIGHT}}", weight);
  body.replaceText("{{BLOOD TYPE}}", bloodtype);
  body.replaceText("{{Emergency Name (F&L)}}", emergencynamefl);
  body.replaceText("{{Emergency Number}}", emergencynumber);
  body.replaceText("{{Emergency Address}}", emergencyaddress);
  body.replaceText("{{Do you have any Allergies?}}", doyouhaveanyallergies);
  body.replaceText("{{List of Allergies}}", listofallergies);
  body.replaceText("{{Do you have insurance?}}", doyouhaveinsurance);
  body.replaceText("{{Name of Insurance Company}}", nameofinsurancecompany);
  body.replaceText("{{Policy Number}}", policynumber);
  body.replaceText("{{Expiry Date}}", expirydate);
  body.replaceText("{{EMAILADDRESS}}", emailaddress);


  doc.saveAndClose();

}
