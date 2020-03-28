$(document).ready(function () {

    //panggil sem
    semuaData();
    dataNegara();

    //untuk refresh otomatis
    setInterval(function () {
        semuaData();
        dataNegara();
    }, 3000);

    function semuaData() {
        $.ajax({
            url: 'https://coronavirus-19-api.herokuapp.com/all',
            success: function (data) {
                try {
                    var json = data;
                    var kasus = data.cases;
                    var korban = data.deaths;
                    var sembuh = data.recovered;

                    $('#data-kasus').html(kasus);
                    $('#data-korban').html(korban);
                    $('#data-sembuh').html(sembuh);
                } catch {
                    alert('Error');
                }
            }
        });
    }

    function dataNegara() {
        $.ajax({
            url: 'https://coronavirus-19-api.herokuapp.com/countries',
            success: function (data) {
                try {
                    var json = data;
                    var html = [];

                    if (json.length > 0) {
                        var i;
                        for (i = 0; i < json.length; i++) {
                            var dataNegara = json[i];
                            var namaNegara = dataNegara.country;

                            if (namaNegara == 'Indonesia') {
                                var kasus = dataNegara.cases;
                                var korban = dataNegara.deaths;
                                var sembuh = dataNegara.recovered;

                                $('#data-id').html(
                                    'Positif : ' + kasus + ' Orang<br>Meninggal : ' + korban + ' Orang<br>Sembuh : ' + sembuh + ' Orang<br>'
                                )
                            }
                        }
                    }
                } catch {
                    alert('Error');
                }
            }
        });
    }



});