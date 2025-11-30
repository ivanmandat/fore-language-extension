# IFileInfo.OpenTextReader

IFileInfo.OpenTextReader
-


# IFileInfo.OpenTextReader


## Синтаксис


OpenTextReader: [ITextReader](../ITextReader/ITextReader.htm);


## Описание


Метод OpenTextReader открывает
 файл для чтения в текстовом виде.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    d: DateTime;

	Begin

	    File1 := New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.Encoding := CodePage.UTF8;

	        d := TextR.ReadDateTime;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменную d из файла 1.txt будет считана
 дата и время. При работе с файлом будет использоваться кодировка UTF-8.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
