request = new XMLHttpRequest;
request.open('GET', '//hall.sjc.ox.ac.uk/MealBooking/transactionhistory.php', true);
request.send();

request.onload = function() {
  var balance = this.response.match(/Sundries= (.*?)&/g) || ["?.??"];
  var name = this.response.match(/<h3 align="center">(.*?)&/g) || ["Unknown"];
  chrome.storage.local.set({'sjc_card_balance': balance[0].slice(10, -1)}, function () {});
  chrome.storage.local.set({'sjc_card_name': name[0].slice(19, -1)}, function () {});
}
