# ITextWriter.WriteLnDateTime

ITextWriter.WriteLnDateTime
-


# ITextWriter.WriteLnDateTime


## Синтаксис


WriteLnDateTime(Value: DateTime);


## Параметры


Value. Значение
 даты или времени, которое необходимо записать.


## Описание


Метод WriteLnDateTime осуществляет
 запись переменных типа DateTime
 в текстовый файл с дальнейшим переводом курсора на следующую строчку.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	    d: DateTime;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    d := DateTime.Now;

	    TxtWriter.WriteString("Created:");

	    TxtWriter.WriteLnDateTime(d);

	    TxtWriter.WriteString("MustBeRemoved:");

	    TxtWriter.WriteLnDateTime(DateTime.AddYears(d, 1));

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны две строки. В первой строке будет указана дата создания
 файла, во второй - дата, когда файл должен быть удалён. При работе с файлом
 будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
