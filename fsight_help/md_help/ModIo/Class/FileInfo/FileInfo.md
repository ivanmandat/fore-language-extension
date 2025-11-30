# FileInfo

FileInfo
-


# FileInfo


## Описание


Класс FileInfo реализует объект, используемый для работы с файлами.


## Комментарии


Используя данные методы можно создавать, удалять, перемещать и изменять файлы, а также работать с атрибутами файлов и параметрами, отвечающими за время создания, изменения и последнего доступа к файлу. Если предполагается выполнение только одного действия, то рекомендуется использовать соответствующий статический метод класса [File](../File/File.htm).


## Конструкторы


 Имя конструктора
 Краткое описание


 ![](../../Sub_Image.gif)

[Attach](FileInfo.Attach.htm)


 Конструктор Attach создает объект для работы с файлами и связывает его с указанным файлом.


## Свойства объекта класса, унаследованные от [IFileInfo](../../Interface/IFileInfo/IFileInfo.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Directory](../../Interface/IFileInfo/IFileInfo.Directory.htm)


		 Свойство Directory
		 возвращает описание директории, в которой находится файл.


		 ![](../../Property_Image.gif)
		 [DirectoryName](../../Interface/IFileInfo/IFileInfo.DirectoryName.htm)


		 Свойство DirectoryName
		 возвращает полный путь и наименование папки, в которой содержится
		 файл.


		 ![](../../Property_Image.gif)
		 [Size](../../Interface/IFileInfo/IFileInfo.Size.htm)


		 Свойство Size возвращает
		 размер файла (до 2-х гигабайт) в байтах.


		 ![](../../Property_Image.gif)
		 [SizeEx](../../Interface/IFileInfo/IFileInfo.SizeEx.htm)


		 Свойство SizeEx возвращает
		 размер файла в байтах.


## Свойства объекта класса, унаследованные от [IFileSystemInfo](../../Interface/IFileSystemInfo/IFileSystemInfo.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](../../Interface/IFileSystemInfo/IFileSystemInfo.Attributes.htm)


		 Свойство Attributes
		 определяет атрибуты файла.


		 ![](../../Property_Image.gif)
		 [CreationTime](../../Interface/IFileSystemInfo/IFileSystemInfo.CreationTime.htm)


		 Свойство CreationTime
		 определяет дату и время создания файла.


		 ![](../../Property_Image.gif)
		 [Exists](../../Interface/IFileSystemInfo/IFileSystemInfo.Exists.htm)


		 Свойство Exists возвращает
		 признак существования файла.


		 ![](../../Property_Image.gif)
		 [Extension](../../Interface/IFileSystemInfo/IFileSystemInfo.Extension.htm)


		 Свойство Extension
		 возвращает расширение файла, включая «.».


		 ![](../../Property_Image.gif)
		 [FullName](../../Interface/IFileSystemInfo/IFileSystemInfo.FullName.htm)


		 Свойство FullName возвращает
		 полный путь и наименование файла.


		 ![](../../Property_Image.gif)
		 [LastAccessTime](../../Interface/IFileSystemInfo/IFileSystemInfo.LastAccessTime.htm)


		 Свойство LastAccessTime
		 определяет дату и время последнего открытия файла.


		 ![](../../Property_Image.gif)
		 [LastWriteTime](../../Interface/IFileSystemInfo/IFileSystemInfo.LastWriteTime.htm)


		 Свойство LastWriteTime
		 определяет дату и время последнего изменения файла.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IFileSystemInfo/IFileSystemInfo.Name.htm)


		 Свойство Name возвращает
		 наименование файла.


## Методы объекта класса, унаследованные от [IFileInfo](../../Interface/IFileInfo/IFileInfo.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AppendBinary](../../Interface/IFileInfo/IFileInfo.AppendBinary.htm)


		 Метод AppendBinary
		 открывает файл для записи в двоичном виде и устанавливает курсор
		 на конец файла.


		 ![](../../Sub_Image.gif)
		 [AppendText](../../Interface/IFileInfo/IFileInfo.AppendText.htm)


		 Метод AppendText открывает
		 файл для записи в текстовом виде и устанавливает курсор на конец
		 файла.


		 ![](../../Sub_Image.gif)
		 [CopyTo](../../Interface/IFileInfo/IFileInfo.CopyTo.htm)


		 Метод CopyTo осуществляет
		 копирование файла в директорию.


		 ![](../../Sub_Image.gif)
		 [MoveTo](../../Interface/IFileInfo/IFileInfo.MoveTo.htm)


		 Метод MoveTo осуществляет
		 перемещение файла в директорию.


		 ![](../../Sub_Image.gif)
		 [Open](../../Interface/IFileInfo/IFileInfo.Open.htm)


		 Метод Open открывает
		 файл с определенными видом запроса открытия файла и параметрами
		 совместного доступа.


		 ![](../../Sub_Image.gif)
		 [OpenBinaryReader](../../Interface/IFileInfo/IFileInfo.OpenBinaryReader.htm)


		 Метод OpenBinaryReader
		 открывает файл для чтения в двоичном виде.


		 ![](../../Sub_Image.gif)
		 [OpenBinaryWriter](../../Interface/IFileInfo/IFileInfo.OpenBinaryWriter.htm)


		 Метод OpenBinaryWriter
		 открывает файл для записи в двоичном виде и устанавливает курсор
		 на начало файла.


		 ![](../../Sub_Image.gif)
		 [OpenTextReader](../../Interface/IFileInfo/IFileInfo.OpenTextReader.htm)


		 Метод OpenTextReader
		 открывает файл для чтения в текстовом виде.


		 ![](../../Sub_Image.gif)
		 [OpenTextWriter](../../Interface/IFileInfo/IFileInfo.OpenTextWriter.htm)


		 Метод OpenTextWriter
		 открывает файл для записи в текстовом виде и устанавливает курсор
		 на начало файла.


## етоды объекта класса, унаследованные от [IFileSystemInfo](../../Interface/IFileSystemInfo/IFileSystemInfo.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Delete](../../Interface/IFileSystemInfo/IFileSystemInfo.Delete.htm)


		 Метод Delete осуществляет
		 удаление файла.


См. также:


[Классы сборки IO](../ModIo_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
