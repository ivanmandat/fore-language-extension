# ITextReader.ReadDouble

ITextReader.ReadDouble
-


# ITextReader.ReadDouble


## Синтаксис


ReadDouble: Double;


## Описание


Метод ReadDouble осуществляет
 считывание вещественных чисел из текстового файла.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    d: Double;

	Begin

	    File1 := New FileInfo.Attach("c:\New_folder\1.txt");

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.Encoding := CodePage.UTF8;

	        d := TextR.ReadDouble;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться вещественное
 число, считанное из текстового файла «1.txt». При работе с файлом будет
 использоваться кодировка UTF-8.


См.также:


[ITextReader](ITextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
