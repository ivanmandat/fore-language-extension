# ITextWriter

ITextWriter
-


# ITextWriter


## Описание


Интерфейс ITextWriter содержит
 свойства и методы для записи данных в текстовом формате.


## Иерархия наследования


ITextWriter


## Комментарии


Для записи данных в текстовом формате предварительно необходимо инициализировать
 поток, связанный с тем местом, в которое будет осуществляться запись.
 Для использования доступны следующие потоки:


	- [FileStream](../../Class/FileStream/FileStream.htm).
	 Поток, связанный с файлом на диске;


	- [MemoryStream](../../Class/MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


Созданный поток передайте в [конструктор](../../Class/TextWriter/TextWriter.Create.htm)
 класса [TextWriter](../../Class/TextWriter/TextWriter.htm).
 При работе конструктора будет создан объект, позволяющий записывать данные
 в текстовом формате. Используя свойство [Encoding](ITextWriter.Encoding.htm)
 укажите кодировку, в которой будут производиться запись. После этого,
 используя различные методы интерфейса ITextWriter,
 можно записывать данные. Для сохранения записанных данных вызовите метод
 [Flush](ITextWriter.Flush.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Encoding](ITextWriter.Encoding.htm)


		 Свойство Encoding определяет
		 кодировку текста для записи в файл.


		 ![](../../Property_Image.gif)
		 [WordDelimeter](ITextWriter.WordDelimeter.htm)


		 Свойство WordDelimiters
		 определяет разделитель между словами при записи в текстовый файл.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Flush](ITextWriter.Flush.htm)


		 Метод Flush осуществляет
		 очистку всех буферов текущей программы записи и вызывает немедленную
		 запись всех буферизованных данных на диск.


		 ![](../../Sub_Image.gif)
		 [WriteBoolean](ITextWriter.WriteBoolean.htm)


		 Метод WriteBoolean
		 осуществляет запись логического значения в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteChar](ITextWriter.WriteChar.htm)


		 Метод WriteChar осуществляет
		 запись символов в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteDateTime](ITextWriter.WriteDateTime.htm)


		 Метод WriteDateTime
		 осуществляет запись переменных типа DateTime в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteDouble](ITextWriter.WriteDouble.htm)


		 Метод WriteDouble осуществляет
		 запись вещественного числа в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteInteger](ITextWriter.WriteInteger.htm)


		 Метод WriteInteger
		 осуществляет запись целочисленного числа в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteLnBoolean](ITextWriter.WriteLnBoolean.htm)


		 Метод WriteLnBoolean
		 осуществляет запись логического значения в текстовый файл с дальнейшим
		 переводом курсора на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteLnChar](ITextWriter.WriteLnChar.htm)


		 Метод WriteLnChar осуществляет
		 запись символов в текстовый файл с дальнейшим переводом курсора
		 на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteLnDateTime](ITextWriter.WriteLnDateTime.htm)


		 Метод WriteLnDateTime
		 осуществляет запись переменных типа DateTime
		 в текстовый файл с дальнейшим переводом курсора на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteLnDouble](ITextWriter.WriteLnDouble.htm)


		 Метод WriteLnDouble
		 осуществляет запись вещественного числа в текстовый файл с дальнейшим
		 переводом курсора на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteLnInteger](ITextWriter.WriteLnInteger.htm)


		 Метод WriteLnInteger
		 осуществляет запись целочисленного числа в текстовый файл с дальнейшим
		 переводом курсора на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteLnString](ITextWriter.WriteLnString.htm)


		 Метод WriteLnString
		 осуществляет запись символьной строки в текстовый файл с дальнейшим
		 переводом курсора на следующую строчку.


		 ![](../../Sub_Image.gif)
		 [WriteString](ITextWriter.WriteString.htm)


		 Метод WriteString осуществляет
		 запись символьной строки в текстовый файл.


		 ![](../../Sub_Image.gif)
		 [WriteWord](ITextWriter.WriteWord.htm)


		 Метод WriteWord осуществляет
		 запись символьных слов в текстовый файл.


См.также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
