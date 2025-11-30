# IFile.OpenTextReader

IFile.OpenTextReader
-


# IFile.OpenTextReader


## Синтаксис


OpenTextReader(FileName: String): [ITextReader](../ITextReader/ITextReader.htm);


## Параметры


FileName.
 Путь и наименование файла, который необходимо открыть.


## Описание


Метод OpenTextReader открывает
 файл для чтения в текстовом виде.


## Пример


	Sub UserProc;

	Var

	    TextR: ITextReader;

	    d: DateTime;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        TextR := File.OpenTextReader("c:\New_folder\1.txt");

	        TextR.Encoding := CodePage.UTF8;

	        d := TextR.ReadDateTime;

	    End If;

	End Sub UserProc;


После выполнения примера в переменную d из файла 1.txt будет получена
 дата и время. При работе с файлом будет использоваться кодировка UTF-8.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
