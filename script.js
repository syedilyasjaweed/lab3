
        function change() {
            //GRABBING INPUT
            billt = Number(document.getElementById("billtotal").value);
            var x = document.querySelector('input[type="range"]').value;
            console.log(billt);
            console.log(x);

            // CALCULATION
            reward = x/100;
            document.getElementById("tip_per").value = x + ("%");
            tipval = reward * billt;
            document.getElementById("tip_amt").value = "$ " + (tipval.toFixed(2));
            finaltotal = tipval + billt;
            document.getElementById("f_total").value = "$ " +(finaltotal.toFixed(2));
        }
