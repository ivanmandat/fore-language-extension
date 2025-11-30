# ITextWriter.WriteLnChar

ITextWriter.WriteLnChar
-


# ITextWriter.WriteLnChar


## Синтаксис


WriteLnChar(Value: Char);


## Параметры


Value. Символ,
 который необходимо записать.


## Описание


Метод WriteLnChar осуществляет
 запись символов в текстовый файл с дальнейшим переводом курсора на следующую
 строчку.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("Copyright:");

	    TxtWriter.WriteLnChar(#169);

	    TxtWriter.WriteString("Registered:");

	    TxtWriter.WriteLnChar(#174);

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны две строки. В каждую строку будут записаны символьная
 строка и символ с указанным кодом. При работе с файлом будет использоваться
 кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
