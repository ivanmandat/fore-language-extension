# ITextWriter.WriteDateTime

ITextWriter.WriteDateTime
-


# ITextWriter.WriteDateTime


## Синтаксис


WriteDateTime(Value: DateTime);


## Параметры


Value. Значение
 даты или времени, которые необходимо записать.


## Описание


Метод WriteDateTime осуществляет
 запись переменных типа DateTime
 в текстовый файл.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("Created:");

	    TxtWriter.WriteDateTime(DateTime.Now);

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны дата и время создания. При работе с файлом будет
 использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
