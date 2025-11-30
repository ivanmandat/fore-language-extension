# IFile.OpenTextWriter

IFile.OpenTextWriter
-


# IFile.OpenTextWriter


## Синтаксис


OpenTextWriter(FileName: String; Truncate: Boolean):
 [ITextWriter](../ITextWriter/ITextWriter.htm);


## Параметры


FileName. Путь и наименование
 файла, который необходимо открыть.


Truncate. Параметр, определяющий
 будет ли файл очищаться при открытии. True если будет.


## Описание


Метод OpenTextWriter открывает
 файл для записи в текстовом виде и устанавливает курсор на начало файла.


## Пример


	Sub UserProc;

	Var

	    TextW: ITextWriter;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        TextW := File.OpenTextWriter("c:\New_folder\1.txt", True);

	        TextW.Encoding := CodePage.UTF8;

	        TextW.WriteDateTime(DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера в файл 1.txt будет записана текущая дата и
 время, преобразованная к текстовому виду. При работе с файлом будет использоваться
 кодировка UTF-8. Файл будет перезаписан.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
