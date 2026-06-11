function predictPrice() {

    let open = parseFloat(
        document.getElementById("open").value
    );

    let high = parseFloat(
        document.getElementById("high").value
    );

    let low = parseFloat(
        document.getElementById("low").value
    );

    let volume = parseFloat(
        document.getElementById("volume").value
    );

    if (
        isNaN(open) ||
        isNaN(high) ||
        isNaN(low) ||
        isNaN(volume)
    ) {
        alert("Semua input harus diisi!");
        return;
    }

    if (
        open < 0 ||
        high < 0 ||
        low < 0 ||
        volume < 0
    ) {
        alert("Nilai tidak boleh negatif!");
        return;
    }

    let closePrice =
        -8.765359795284894 +
        (-0.521365141 * open) +
        (0.853484222 * high) +
        (0.665360304 * low) +
        (0.000000000673873513 * volume);

    document.getElementById("result").innerHTML =
        `
        Prediksi Harga Close Bitcoin
        <br><br>
        <span style="color:#f59e0b;">
            $${closePrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
        </span>
        `;
}