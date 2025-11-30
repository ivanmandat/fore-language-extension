# MemoryStream

MemoryStream
-


# MemoryStream


## Описание


Класс MemoryStream реализует
 временный поток в памяти ПК.


## Комментарии


Поток в памяти ПК может использоваться для передачи данных между различными
 объектами разрабатываемого приложения. Используется при работе с двоичными
 данными ([BinaryReader](../BinaryReader/BinaryReader.htm),
 [BinaryWriter](../BinaryWriter/BinaryWriter.htm)) и текстовыми
 данными ([TextReader](../TextReader/TextReader.htm), [TextWriter](../TextWriter/TextWriter.htm)).Также
 данный поток может использоваться для сохранения/чтения настроек различных
 объектов репозитория при вызове соответствующих методов объектов.


## Свойства объекта класса, унаследованные от [IMemoryStream](../../Interface/IMemoryStream/IMemoryStream.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Capacity](../../Interface/IMemoryStream/IMemoryStream.Capacity.htm)


		 Свойство Capacity определяет
		 объем памяти в байтах, выделяемой под поток.


## Свойства объекта класса, унаследованные от [IIOStream](../../Interface/IIOStream/IIOStream.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Position](../../Interface/IIOStream/IIOStream.Position.htm)


		 Свойство Position определяет
		 позицию в потоке.


		 ![](../../Property_Image.gif)
		 [Size](../../Interface/IIOStream/IIOStream.Size.htm)


		 Свойство Size определяет
		 размер потока в байтах.


## Методы объекта класса, унаследованные от [IMemoryStream](../../Interface/IMemoryStream/IMemoryStream.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IMemoryStream/IMemoryStream.Clear.htm)


		 Метод Clear осуществляет
		 очистку потока.


		 ![](../../Sub_Image.gif)
		 [Parse](../../Interface/IMemoryStream/IMemoryStream.Parse.htm)


		 Метод Parse осуществляет
		 помещение данных в поток.


		 ![](../../Sub_Image.gif)
		 [ToString](../../Interface/IMemoryStream/IMemoryStream.ToString.htm)


		 Метод ToString преобразует
		 содержимое потока в символьную строку.


## Методы объекта класса, унаследованные от [IIOStream](../../Interface/IIOStream/IIOStream.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyFrom](../../Interface/IIOStream/IIOStream.CopyFrom.htm)


		 Метод CopyFrom осуществляет
		 копирование данных из указанного потока в текущий поток.


		 ![](../../Sub_Image.gif)
		 [ReadByte](../../Interface/IIOStream/IIOStream.ReadByte.htm)


		 Метод ReadByte осуществляет
		 считывание байта данных из потока.


		 ![](../../Sub_Image.gif)
		 [Seek](../../Interface/IIOStream/IIOStream.Seek.htm)


		 Метод Seek задает позицию
		 в потоке с учетом параметров смещения и позиционирования потока.


		 ![](../../Sub_Image.gif)
		 [WriteByte](../../Interface/IIOStream/IIOStream.WriteByte.htm)


		 Метод WriteByte осуществляет
		 запись байта данных в поток.


См. также:


[Классы
 сборки IO](../ModIo_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
