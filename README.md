# Simple Sundanese Translator
Program Simple Sundanese Translator menggunakan RegEx Pattern Matching ini dibuat untuk memenuhi kebutuhan tugas dalam proses pendaftaran menjadi asisten Lab IRK

### Prerequisites
1. [Node js](https://nodejs.org/en/)
make sure you have add the path C:\Windows\System32 and the path of nodejs installation to your environment variable.

### Installation
1. Open 2 command prompt, then go to the root of the directory

2. Go to simplesundanesetranslator directory

```
cd simplesundanesetranslator
```

3. Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

4. Install server and client dependencies

```
yarn
cd src
cd module
yarn
```

5. Go back to simplesundanesetranslator directory

6. Start the server

```
yarn server
```

7. On the other command prompt, start the client

```
yarn client
```

### Usage
Masukan teks yang ingin di translate ke kotak sebelah kiri
Untuk menerjemahkan, tekan tombol "TRANSLATE"
Hasil akan muncul di kotak sebelah kanan
Untuk mengganti mode translasi, tekan tombol "SWITCH"

### Test Case
```
Sunda - Indonesia
Sunda : nami abdi Riyugan
Indonesia : nama saya Riyugan
```

```
Sunda - Indonesia
Sunda : abdi teh sanes jalma Bandung
Indonesia : saya bukan orang Bandung
```

```
Sunda - Indonesia
Sunda : anjeun sumping ti mana?
Indonesia : kamu tiba dari mana?
```

```
Indonesia - Sunda
Indonesia : nama saya Riyugan
Sunda : nami abdi Riyugan
```

```
Indonesia - Sunda
Indonesia : nama adik kamu siapa?
Sunda : nami rai anjeun teh saha?
```

```
Indonesia - Sunda
Indonesia : saya tidak bisa bahasa Sunda
Sunda : abdi henteu tiasa bahasa Sunda
```

### Link Video Youtube
Video Youtube demonstrasi aplikasi bisa dilihat di pranala [ini](https://youtu.be/bYZGIXb5yvU)