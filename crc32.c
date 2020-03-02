dword gen_table_line(dword line)
{
	if (line & 1)
	{
		line >>= 1;
		line ^= -306674912;
		return line;
	}
	return line>>1;
}

dword generate_table_crc()
{
	dword adr = 0;
	dword i = 0;
	dword line = 0;
	dword position = 0;
	adr = malloc(256*4);
	position = adr;
	for (i=0; i<256; i++)
	{
		line = i;
		line = gen_table_line(line);
		line = gen_table_line(line);
		line = gen_table_line(line);
		line = gen_table_line(line);
		
		line = gen_table_line(line);
		line = gen_table_line(line);
		line = gen_table_line(line);
		line = gen_table_line(line);

		DSDWORD[position] = line;
		position += 4;
	}
	return adr;
}

dword crc32(dword data, len)
{
	dword i = 0;
	dword l = 0;
	dword c = -1;
	dword cc = 0;
	dword T = 0;
	T = generate_table_crc();
	while (i < len)
	{
		cc = c^DSBYTE[data];
		cc &= 0xFF;
		cc = DSDWORD[4*cc+T];
		c >>= 8;
		c ^= cc;
	}
	return c^-1;
}
