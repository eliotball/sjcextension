chrome.storage.local.get(["sjc_card_balance", "sjc_card_name"], function (x) {
  document.getElementById("balance").innerHTML = x.sjc_card_balance;
  document.getElementById("name").innerHTML = x.sjc_card_name;
});

document.getElementById("goto").onclick = function () {
  chrome.tabs.create({"url": "https://hall.sjc.ox.ac.uk/MealBooking/mealbooking.php"});
};
