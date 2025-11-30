# IBinaryReader

IBinaryReader
-


# IBinaryReader


## Описание


Интерфейс IBinaryReader содержит
 свойства и методы для чтения данных из двоичного формата.


## Иерархия наследования


IBinaryReader


## Комментарии


Для чтения данных, сохраненных в двоичном формате, предварительно должен
 быть инициализирован поток, связанный с тем местом, из которого будет
 осуществляться чтение. Для использования доступны следующие потоки:


	- [FileStream](../../Class/FileStream/FileStream.htm).
	 Поток, связанный с файлом на диске;


	- [MemoryStream](../../Class/MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


Созданный поток передайте в [конструктор](../../Class/BinaryReader/BinaryReader.Create.htm)
 класса [BinaryReader](../../Class/BinaryReader/BinaryReader.htm).
 При работе конструктора будет создан объект, позволяющий читать данные
 в текстовом формате. После этого, используя различные методы интерфейса
 IBinaryReader, можно считывать
 данные. Свойство [Eof](IBinaryReader.EndOfList.htm) позволяет
 контролировать процесс чтения и определить когда будут считаны все двоичные
 данные.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Stream](IBinaryReader.Stream.htm)


		 Свойство Stream возвращает
		 поток для работы с двоичным файлом в виде последовательности байтов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EndOfList](IBinaryReader.EndOfList.htm)


		 Метод EndOfList возвращает
		 признак достижения окончания страницы двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadBoolean](IBinaryReader.ReadBoolean.htm)


		 Метод ReadBoolean осуществляет
		 считывание логического значения из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadChar](IBinaryReader.ReadChar.htm)


		 Метод ReadChar осуществляет
		 считывание символов из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadDateTime](IBinaryReader.ReadDateTime.htm)


		 Метод ReadDateTime
		 осуществляет считывание даты и времени из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadDouble](IBinaryReader.ReadDouble.htm)


		 Метод ReadDouble осуществляет
		 считывание вещественных чисел из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadInteger](IBinaryReader.ReadInteger.htm)


		 Метод ReadInteger осуществляет
		 считывание целочисленного значения из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadListBegin](IBinaryReader.ReadListBegin.htm)


		 Метод ReadListBegin
		 осуществляет чтение признака начала страницы из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadListEnd](IBinaryReader.ReadListEnd.htm)


		 Метод ReadListEnd осуществляет
		 чтение признака окончания страницы из двоичного файла.


		 ![](../../Sub_Image.gif)
		 [ReadString](IBinaryReader.ReadString.htm)


		 Метод ReadString осуществляет
		 считывание символьной строки из двоичного файла.


См.также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
