$(document).ready(function () {
    console.log("page is ready!");

    var orderClients = [];
    var firstName = "";
    var lastName = "";

    $.ajax({
        url: "/api/orders",
        method: "GET"
    }).done(function (response) {
        $(".order-body").empty();

        for (i = 0; i < response.length; i++) {
            var tableRow = $("<tr class='order-row'>");
            var orderId = $("<td class='order-id'>");
            var orderFirstName = $("<td class='order-first-name'>");
            var orderLastName = $("<td class='order-last-name'>");
            var orderFrameQuantity = $("<td class='order-frame-quantity'>");
            var orderDateReceived = $("<td class='order-date-received'>");
            var orderDateDue = $("<td class='order-date-due'>");
            var orderDetails = $("<td class='order-details'>");
            var details = $("<a>Details</a>");

            orderClients.push(response[i]);

            orderId.attr("data-order-id", response[i].id);
            orderId.text(response[i].id);

            orderFirstName.attr("data-order-id", response[i].id);
            orderFirstName.attr("first-client-id-" + response[i].client_id);

            orderLastName.attr("data-order-id", response[i].id);
            orderLastName.attr("id", "last-client-id" + response[i].client_id);

            orderFrameQuantity.attr("data-order-id", response[i].id);
            if (response[i].order_quantity != null) {
                orderFrameQuantity.text(response[i].order_quantity);
            } else {
                orderFrameQuantity.text("0");
            };

            orderDateReceived.attr("data-order-id", response[i].id);
            orderDateReceived.text(response[i].createdAt);

            orderDateDue.attr("data-order-id", response[i].id);
            if (response[i].date_due != null) {
                orderDateDue.text(response[i].date_due);
            } else {
                orderDateDue.text("n/a");
            };

            details.attr("href", "/view/orders/" + response[i].id);
            orderDetails.append(details);


            $.ajax({
                url: "/api/clients/" + response[i].client_id,
                method: "GET"
            }).done(function (res) {
                firstName = res.first_name;
                lastName = res.last_name;

                console.log(firstName);
                console.log(lastName);
                orderFirstName.text(firstName);
                orderLastName.text(lastName);
            
            });

           


            // $.ajax({
            //     url: "/api/clients/" + response[i].client_id,
            //     method: "GET"
            // }).done(function (res) {
            //     console.log(res);

            //     orderFirstName.attr("data-client-id", res.id);
            //     orderFirstName.text(res.first_name);

            //     orderLastName.attr("data-client-id", res.id);
            //     orderLastName.text(res.last_name);

            // });

            tableRow.append(orderId);
            tableRow.append(orderFirstName);
            tableRow.append(orderLastName);
            tableRow.append(orderFrameQuantity);
            tableRow.append(orderDateReceived);
            tableRow.append(orderDateDue);
            tableRow.append(orderDetails);

            $(".order-body").append(tableRow);

        };

    });


    //console.log(orderClients);




});