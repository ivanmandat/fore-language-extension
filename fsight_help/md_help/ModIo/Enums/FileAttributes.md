# FileAttributes

FileAttributes
-


# FileAttributes


## Описание


Перечисление FileAttributes содержит атрибуты файлов и папок.


Используется следующими свойствами и методами:


-
[IDirectory.GetAttributes](../Interface/IDirectory/IDirectory.GetAttributes.htm)


-
[IDirectory.SetAttributes](../Interface/IDirectory/IDirectory.SetAttributes.htm)


-
[IFile.GetAttributes](../Interface/IFile/IFile.GetAttributes.htm)


-
[IFile.SetAttributes](../Interface/IFile/IFile.SetAttributes.htm)


-
[IFileSystemInfo.Attributes](../Interface/IFileSystemInfo/IFileSystemInfo.Attributes.htm)


## Допустимые значения


 Значение
 Краткое описание


 1
 Archive. Архивный статус файла. Приложения используют этот атрибут, чтобы пометить файлы для резервного копирования или удаления.


 2
 Compressed. Сжатый файл.


 8
 Directory. Файл представляет собой каталог.


 16
 Encrypted. Зашифрованный файл или каталог. Для файла это означает, что все данные в файле зашифрованы. Для каталога это означает, что шифрование производится по умолчанию для вновь создаваемых файлов и каталогов.


 32
 Hidden. Файл скрытый. Скрытые файлы не включается в обычный список каталога.


 64
 Normal. Файл обычный. Для файла не установлены другие атрибуты.


 128
 ReadOnly. Файл доступен только для чтения.


 256
 System. Файл является системным. Этот файл является частью операционной системы или используется исключительно операционной системой.


См. также:


[Перечисления сборки IO](ModIo_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
