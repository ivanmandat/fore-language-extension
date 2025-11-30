# IBinaryWriter

IBinaryWriter
-


# IBinaryWriter


## Описание


Интерфейс IBinaryWriter содержит
 свойства и методы для записи данных в двоичном формате.


## Иерархия наследования


IBinaryWriter


## Комментарии


Для записи данных в двоичном формате предварительно необходимо инициализировать
 поток, связанный с тем местом, в которое будет осуществляться запись.
 Для использования доступны следующие потоки:


	- [FileStream](../../Class/FileStream/FileStream.htm).
	 Поток, связанный с файлом на диске;


	- [MemoryStream](../../Class/MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


Созданный поток передайте в [конструктор](../../Class/BinaryWriter/BinaryWriter.Create.htm)
 класса [BinaryWriter](../../Class/BinaryWriter/BinaryWriter.htm).
 При работе конструктора будет создан объект, позволяющий записывать данные
 в двоичном формате. После этого, используя различные методы интерфейса
 IBinaryWriter, можно записывать
 данные. Для сохранения записанных данных вызовите метод [Flush](IBinaryWriter.Flush.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Stream](IBinaryWriter.Stream.htm)


		 Свойство Stream возвращает
		 поток для работы с двоичным файлом в виде последовательности байтов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Flush](IBinaryWriter.Flush.htm)


		 Метод Flush осуществляет
		 очистку всех буферов текущей программы записи и вызывает немедленную
		 запись всех буферизованных данных на диск.


		 ![](../../Sub_Image.gif)
		 [WriteBoolean](IBinaryWriter.WriteBoolean.htm)


		 Метод WriteBoolean
		 осуществляет запись логического значения в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteChar](IBinaryWriter.WriteChar.htm)


		 Метод WriteChar осуществляет
		 запись символов в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteDateTime](IBinaryWriter.WriteDateTime.htm)


		 Метод WriteDateTime
		 осуществляет запись переменных типа DateTime
		 в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteDouble](IBinaryWriter.WriteDouble.htm)


		 Метод WriteDouble осуществляет
		 запись вещественного числа в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteInteger](IBinaryWriter.WriteInteger.htm)


		 Метод WriteInteger
		 осуществляет запись целого числа в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteListBegin](IBinaryWriter.WriteListBegin.htm)


		 Метод WriteListBegin
		 осуществляет запись признака начала страницы в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteListEnd](IBinaryWriter.WriteListEnd.htm)


		 Метод WriteListEnd
		 осуществляет запись признака окончания страницы в двоичный файл.


		 ![](../../Sub_Image.gif)
		 [WriteString](IBinaryWriter.WriteString.htm)


		 Метод WriteString осуществляет
		 запись символьной строки в двоичный файл.


См.также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
