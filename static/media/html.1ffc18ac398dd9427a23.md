
# A HTML

A **HTML** (HyperText Markup Language) egy weboldal legkisebb építőeleme. Ez a nyelv kifejezetten az oldalt felépítő elemeket írja le, bármilyen stílus nélkül. A HTML úgynevezett tag-ekből épül fel, melynek a megjelenítése a következő <*tag*>.

Az egyes tag-ek lehetnek lezárást nem igénylőek, ilyen például a <*br*>, ezen felül van olyan, amely önmagát le tudja zárni, mint az <*img*> és léteznek külön pontokon megkezdett és bezárt tag-ek is, mint a <*div*>.

A HTML egyszerűségével ellentétben rengeteg hasznos tulajdonsággal rendelkezik önmagában is. A nyelv alapismerete fontos, attól függetlenül, hogy milyen eszközökkel szeretné létrehozni az oldalát.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
A legalapabb HTML dokumentum így néz ki. Az itt található összes tag a <*html*> tag-en belül található, így ez minden elemnek a legmagasabb szintű szülője. Ezen felül a <*head*> felelős az oldal meta adatainak felsorolásáért, mint például a dokumentum címe, az abban található karakterek típusa, vagy például a böngészősávban található kis ikon (favicon). Valamint a <*body*> tag-be kerül minden olyan elem, amit meg szeretnénk jeleníteni az oldalunkon.


```html
<html>
    <body>
        <p class="">Class</p>
        <p id="">ID</p>
        <input type="text" />
    </body>
</html>
```

Az egyes HTML tag-ek rendelkezhetnek különböző tulajdonságokkal, mint például class, id vagy type. Az előbbi kettő főképp hivatkozásként szolgál CSS-nek és vagy Javascript-nek, viszont utóbbi tényleg befolyásolja az adott tag-et.


