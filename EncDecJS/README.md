# JavaScript Data Encryption and Decryption Example

This example demonstrates data encryption and decryption using the Web Cryptography API in JavaScript.

## Overview

The example consists of two HTML pages: `index.html` and `nextPage.html`.

1. **index.html**: This page performs data encryption and stores the encrypted data and key in local storage. It prompts the user for input data and then encrypts it using the AES-GCM algorithm.

2. **nextPage.html**: This page imports the encrypted data and key from local storage, decrypts the data, and displays the decrypted message.

## Usage

1. Open `index.html` in a web browser.

2. You will be prompted to enter the message you want to encrypt. If you leave it empty, the link to the next page will be disabled.

3. The encrypted data and key will be stored in local storage.

4. Navigate to `nextPage.html`.

5. The encrypted data and key will be retrieved from local storage, decrypted, and the decrypted message will be displayed.

## Code Explanation

The encryption process involves generating an AES-GCM key, exporting and importing the key, encrypting the data, and storing the encrypted data and key in local storage. The decryption process involves importing the key, decrypting the data, and displaying the decrypted message.

## Note

This example uses local storage to store the encrypted data and key, which might not be suitable for sensitive data in production scenarios.

## Clone Command

1. Clone the repository:

   ```bash
   git clone https://github.com/umair-ali-bhutto/test.git
