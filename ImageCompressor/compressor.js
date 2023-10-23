document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const compressButton = document.getElementById("compressButton");
    const downloadLink = document.getElementById("downloadLink");
    const originalImage = document.getElementById("originalImage");
    const compressedImage = document.getElementById("compressedImage");

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            originalImage.src = e.target.result;
            originalImage.style.display = "block";
            compressedImage.style.display = "none";
        };

        reader.readAsDataURL(file);
    });

    compressButton.addEventListener("click", function () {
        if (!fileInput.files.length) {
            alert("Please select an image first.");
            return;
        }

        const quality = 0.7; // Adjust the compression quality as needed
        const imageFile = fileInput.files[0];

        const reader = new FileReader();
        reader.onload = function () {
            const img = new Image();

            img.src = reader.result;

            img.onload = function () {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);

                canvas.toBlob(function (blob) {
                    const compressedUrl = URL.createObjectURL(blob);
                    compressedImage.src = compressedUrl;
                    compressedImage.style.display = "block";
                    downloadLink.href = compressedUrl;
                    downloadLink.style.display = "block";
                }, "image/jpeg", quality);
            };
        };

        reader.readAsDataURL(imageFile);
    });
});
