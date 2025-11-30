# DirectoryInfo

DirectoryInfo
-


# DirectoryInfo


## Описание


Класс DirectoryInfo реализует объект, используемый для работы с каталогами файловой системы ПК.


## Комментарии


Используя данные методы можно создавать, удалять, перемещать, получать и изменять информацию о каталогах. Если предполагается выполнение только одного действия, то рекомендуется использовать соответствующий статический метод класса [Directory](../Directory/Directory.htm).


## Конструкторы


 Имя конструктора
 Краткое описание


 ![](../../Sub_Image.gif)

[Attach](DirectoryInfo.Attach.htm)


 Конструктор Attach создает объект для работы с каталогами и связывает его с указанным каталогом.


## Свойства объекта класса, унаследованные от [IDirectoryInfo](../../Interface/IDirectoryInfo/IDirectoryInfo.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Parent](../../Interface/IDirectoryInfo/IDirectoryInfo.Parent.htm)


		 Свойство Parent возвращает
		 информацию о родительском каталоге.


		 ![](../../Property_Image.gif)
		 [Root](../../Interface/IDirectoryInfo/IDirectoryInfo.Root.htm)


		 Свойство Root возвращает
		 информацию о корневом каталоге.


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


## Методы объекта класса, унаследованные от [IDirectoryInfo](../../Interface/IDirectoryInfo/IDirectoryInfo.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../../Interface/IDirectoryInfo/IDirectoryInfo.CopyTo.htm)


		 Метод CopyTo осуществляет
		 копирование директории со всем содержимым.


		 ![](../../Sub_Image.gif)
		 [Create](../../Interface/IDirectoryInfo/IDirectoryInfo.Create.htm)


		 Метод Create создает
		 папку.


		 ![](../../Sub_Image.gif)
		 [CreateSubdirectory](../../Interface/IDirectoryInfo/IDirectoryInfo.CreateSubdirectory.htm)


		 Метод CreateSubdirectory
		 создает подкаталог.


		 ![](../../Sub_Image.gif)
		 [GetDirectories](../../Interface/IDirectoryInfo/IDirectoryInfo.GetDirectories.htm)


		 Метод GetDirectories
		 возвращает информацию о подкаталогах в директории.


		 ![](../../Sub_Image.gif)
		 [GetFiles](../../Interface/IDirectoryInfo/IDirectoryInfo.GetFiles.htm)


		 Метод GetFiles возвращает
		 информацию о файлах в директории.


		 ![](../../Sub_Image.gif)
		 [GetFileSystemInfos](../../Interface/IDirectoryInfo/IDirectoryInfo.GetFileSystemInfos.htm)


		 Метод GetFileSystemInfos
		 возвращает информацию о подкаталогах и файлах директории.


		 ![](../../Sub_Image.gif)
		 [MoveTo](../../Interface/IDirectoryInfo/IDirectoryInfo.MoveTo.htm)


		 Метод MoveTo осуществляет
		 перенос директории со всем содержимым.


## Методы объекта класса, унаследованные от [IFileSystemInfo](../../Interface/IFileSystemInfo/IFileSystemInfo.htm)


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
