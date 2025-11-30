# IZipArchive

IZipArchive
-


# IZipArchive


Сборка: IO;


## Описание


Интерфейс IZipArchive содержит
 свойства и методы для работы с ZIP-архивом.


## Иерархия наследования


IZipArchive


## Комментарии


Для работы с ZIP-архивом инициализируйте новый объект с помощью конструктора
 [ZipArchive.Create](../../Class/ZipArchive/ZipArchive.Create.htm).
 Для наполнения нового архива используйте различные методы Add*. После
 завершения формирования архива необходимо освободить созданный объект
 с помощью оператора [Dispose](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000004.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CompressionLevel](IZipArchive.CompressionLevel.htm)
		 Свойство CompressionLevel
		 определяет степень сжатия архива.


		 ![](../../Property_Image.gif)
		 [Count](IZipArchive.Count.htm)
		 Свойство Count возвращает
		 количество элементов в архиве.


		 ![](../../Property_Image.gif)
		 [Item](IZipArchive.Item.htm)
		 Свойство Item возвращает
		 информацию об элементе архива с указанным индексом.


		 ![](../../Property_Image.gif)
		 [ItemByName](IZipArchive.ItemByName.htm)
		 Свойство ItemByName
		 возвращает информацию об элементе архива с указанным наименованием.


		 ![](../../Property_Image.gif)
		 [Path](IZipArchive.Path.htm)
		 Свойство Path возвращает
		 полный путь и наименование архива на диске.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddDirectory](IZipArchive.AddDirectory.htm)
		 Метод AddDirectory
		 добавляет указанную папку в архив со всем содержимым.


		 ![](../../Sub_Image.gif)
		 [AddFile](IZipArchive.AddFile.htm)
		 Метод AddFile добавляет
		 указанный файл в архив.


		 ![](../../Sub_Image.gif)
		 [AddFromStream](IZipArchive.AddFromStream.htm)
		 Метод AddFromStream
		 добавляет в архив файл, передаваемый в указанном потоке.


		 ![](../../Sub_Image.gif)
		 [Unpack](IZipArchive.Unpack.htm)
		 Метод Unpack распаковывает
		 архив в указанную папку на диске.


См. также:


[Интерфейсы
 сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
