# FileStream

FileStream
-


# FileStream


## Описание


Класс FileStream реализует объект,
 представляющий из себя поток, связанный с файлом.


## Комментарии


Поток, связанный с файлом, может применяться для чтения и записи данных
 в файл. Используется при работе с двоичными файлами ([BinaryReader](../BinaryReader/BinaryReader.htm),
 [BinaryWriter](../BinaryWriter/BinaryWriter.htm)) и текстовыми
 файлами ([TextReader](../TextReader/TextReader.htm), [TextWriter](../TextWriter/TextWriter.htm)).
 Также данный поток может использоваться для сохранения/чтения настроек
 различных объектов репозитория при вызове соответствующих методов объектов.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](FileStream.Create.htm)


		 Конструктор Create
		 создает новый поток, связанный с указанным файлом.


## Свойства объекта класса, унаследованные от [IFileStream](../../Interface/IFileStream/IFileStream.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FileName](../../Interface/IFileStream/IFileStream.FileName.htm)


		 Свойство FileName возвращает
		 наименование файла, связанного с потоком.


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
