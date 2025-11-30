# ITextReader

ITextReader
-


# ITextReader


Сборка: IO;


## Описание


Интерфейс ITextReader содержит
 свойства и методы для чтения данных в текстовом формате.


## Иерархия наследования


ITextReader


## Комментарии


Для чтения данных, сохраненных в текстовом формате, предварительно должен
 быть инициализирован поток, связанный с тем местом, из которого будет
 осуществляться чтение. Для использования доступны следующие потоки:


	- [FileStream](../../Class/FileStream/FileStream.htm).
	 Поток, связанный с файлом на диске;


	- [MemoryStream](../../Class/MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


Созданный поток передайте в [конструктор](../../Class/TextReader/TextReader.Create.htm)
 класса [TextReader](../../Class/TextReader/TextReader.htm).
 При работе конструктора будет создан объект, позволяющий читать данные
 в текстовом формате. Используя свойство [Encoding](ITextReader.Encoding.htm),
 укажите кодировку, в которой будут производиться чтение. После этого,
 используя различные методы интерфейса ITextReader,
 можно считывать данные. Свойство [Eof](ITextReader.Eof.htm)
 позволяет контролировать процесс чтения и определить, когда будут считаны
 все данные.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Encoding](ITextReader.Encoding.htm)


		 Свойство Encoding определяет
		 кодировку текста для чтения из файла.


		 ![](../../Property_Image.gif)
		 [Eof](ITextReader.Eof.htm)


		 Свойство Eof возвращает
		 признак окончания текста в файле.


		 ![](../../Property_Image.gif)
		 [WordDelimiters](ITextReader.WordDelimiters.htm)


		 Свойство WordDelimiters
		 определяет разделитель между словами при чтении текстового файла.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReadBoolean](ITextReader.ReadBoolean.htm)


		 Метод ReadBoolean осуществляет
		 считывание логического значения из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadChar](ITextReader.ReadChar.htm)


		 Метод ReadChar осуществляет
		 считывание символов из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadDateTime](ITextReader.ReadDateTime.htm)


		 Метод ReadDateTime
		 осуществляет считывание даты и времени из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadDouble](ITextReader.ReadDouble.htm)


		 Метод ReadDouble осуществляет
		 считывание вещественных чисел из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadInteger](ITextReader.ReadInteger.htm)


		 Метод ReadInteger осуществляет
		 считывание целочисленного значения из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadLine](ITextReader.ReadLine.htm)


		 Метод ReadLine осуществляет
		 считывание строки символов из текстового файла.


		 ![](../../Sub_Image.gif)
		 [ReadString](ITextReader.ReadString.htm)


		 Метод ReadString осуществляет
		 считывание строки символов заданной длины.


		 ![](../../Sub_Image.gif)
		 [ReadToEnd](ITextReader.ReadToEnd.htm)


		 Метод ReadToEnd осуществляет
		 считывание текстового файла в виде одной символьной строки.


		 ![](../../Sub_Image.gif)
		 [ReadWord](ITextReader.ReadWord.htm)


		 Метод ReadWord осуществляет
		 считывание слов с учетом разделителя.


См. также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
