function generateReceipt() {

    // -----------------------------
    // GET USER INPUT
    // -----------------------------

    let playerName = document.getElementById("playerName").value;
    let membershipLevel = document.getElementById("membershipLevel").value;
    let ticketsPurchased = parseInt(document.getElementById("ticketsPurchased").value);

    let ticketPrice = 14.75;
    let serviceFeeRate = 0.06;


    // -----------------------------
    // STRING METHOD
    // Capitalize name properly
    // -----------------------------

    playerName = playerName.charAt(0).toUpperCase() 
                + playerName.slice(1).toLowerCase();


    // -----------------------------
    // NUMBER METHOD
    // -----------------------------

    let subtotal = ticketsPurchased * ticketPrice;
    subtotal = subtotal.toFixed(2);   // number method


    // -----------------------------
    // IF CONDITIONAL
    // Bulk discount
    // -----------------------------

    let discount = 0;

    if (ticketsPurchased >= 5) {
        discount = subtotal * 0.15;
    } else {
        discount = 0;
    }


    // -----------------------------
    // SWITCH STATEMENT
    // -----------------------------

    let membershipBonus;

    switch(membershipLevel) {

        case "silver":
            membershipBonus = "Free Drink Voucher";
            break;

        case "gold":
            membershipBonus = "Free Snack + Priority Seating";
            break;

        case "platinum":
            membershipBonus = "VIP Lounge Access + Free Merch";
            break;

        default:
            membershipBonus = "Standard Access";
    }


    // -----------------------------
    // FINAL CALCULATIONS
    // -----------------------------

    let serviceFee = (subtotal - discount) * serviceFeeRate;
    let total = (subtotal - discount + serviceFee).toFixed(2);


    // -----------------------------
    // CONCATENATED STRING VARIABLE
    // -----------------------------

    let receipt = "------ GAME NIGHT RECEIPT ------\n"
        + "Player: " + playerName + "\n"
        + "Membership Level: " + membershipLevel.toUpperCase() + "\n"
        + "Bonus: " + membershipBonus + "\n"
        + "Tickets Purchased: " + ticketsPurchased + "\n"
        + "Price per Ticket: $" + ticketPrice + "\n"
        + "Subtotal: $" + subtotal + "\n"
        + "Discount: $" + discount.toFixed(2) + "\n"
        + "Service Fee: $" + serviceFee.toFixed(2) + "\n"
        + "TOTAL DUE: $" + total + "\n"
        + "--------------------------------";


    // OUTPUT
    document.getElementById("receiptOutput").innerText = receipt;
}
