# ITextReader.ReadString

ITextReader.ReadString
-


# ITextReader.ReadString


## Синтаксис


ReadString(CharCount: Integer): String;


## Параметры


CharCount.
 Количество символов, которые необходимо считать.


## Описание


Метод ReadString осуществляет
 считывание строки символов из текстового файла. Количество символов передается
 посредством параметра CharCount.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    s: String;

	Begin

	    File1 := New FileInfo.Attach("c:\New_folder\1.txt");

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.Encoding := CodePage.UTF8;

	        s := TextR.ReadString(14);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «s» будут содержаться первые 14
 символов, считанные из текстового файла «1.txt». При работе с файлом будет
 использоваться кодировка UTF-8.


См.также:


[ITextReader](ITextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
