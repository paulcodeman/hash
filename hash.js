function hash1(text)
{
  var len = text.length, sum = 0, save = 0;
  for (var i = 0; i < len; i++)
  {
    if (save > text.charCodeAt(i)) sum += i;
    save = text.charCodeAt(i);
    sum += save;
  }
  return (len << 20) | sum;
}
