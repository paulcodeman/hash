function hash1(text)
{
  var len = text.length, sum = 0, save = 0;
  for (var i = 0; i < len; i++)
  {
    if (save > text.charCodeAt(i)) sum += i;
    else save = text.charCodeAt(i);
    sum += save;
  }
  return (len << 20) | sum;
}

function hash2(text)
{
  var salt = Math.floor(Math.random() * 100) + 1; // добавить случайный salt
  var len = text.length, sum = 0, save = 0;
  for (var i = 0; i < len; i++)
  {
    if (save > text.charCodeAt(i)) sum += i;
    else save = text.charCodeAt(i);
    sum += save;
  }
  return (len << 20) | sum | salt; // объединить salt с результатом
}


function hash3(text)
{
  var sha256 = new Hashes.SHA256; // использовать SHA-256
  return sha256.hex(text); // вернуть хэш в шестнадцатеричном формате
}


function hash4(text)
{
  var len = text.length, sum = 0, save = 0;
  for (var i = 0; i < len; i++)
  {
    if (save > text.charCodeAt(i)) sum += i;
    else save = text.charCodeAt(i);
    sum += save;
  }
  var mask = 0xFACB; // битовая маска
  return (len << 20) ^ sum ^ mask; // использовать xor для объединения маски
}
