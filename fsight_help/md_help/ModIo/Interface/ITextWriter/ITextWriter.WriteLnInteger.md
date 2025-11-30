# ITextWriter.WriteLnInteger

ITextWriter.WriteLnInteger
-


# ITextWriter.WriteLnInteger


## Синтаксис


WriteLnInteger(Value: Integer);


## Параметры


Value. Целочисленное
 значение, которое необходимо записать.


## Описание


Метод WriteLnInteger осуществляет
 запись целочисленного значения в текстовый файл с дальнейшим переводом
 курсора на следующую строчку.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("X:");

	    TxtWriter.WriteLnInteger(Math.RandBetweenI(0, 100));

	    TxtWriter.WriteString("Y:");

	    TxtWriter.WriteLnInteger(Math.RandBetweenI(0, 100));

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны две строки. В каждой строке будет содержаться случайное
 целое число. При работе с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
