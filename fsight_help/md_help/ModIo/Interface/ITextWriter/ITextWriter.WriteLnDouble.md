# ITextWriter.WriteLnDouble

ITextWriter.WriteLnDouble
-


# ITextWriter.WriteLnDouble


## Синтаксис


WriteLnDouble(Value: Double);


## Параметры


Value. Вещественное
 число, которое необходимо записать.


## Описание


Метод WriteLnDouble осуществляет
 запись вещественного числа в текстовый файл с дальнейшим переводом курсора
 на следующую строчку.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("Pi:");

	    TxtWriter.WriteLnDouble(Math.Pi);

	    TxtWriter.WriteString("Exp:");

	    TxtWriter.WriteLnDouble(Math.Exp(1));

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны две строки. В первой строке будет указано значение
 математической константы ПИ, во второй - значение экспоненты. При работе
 с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
