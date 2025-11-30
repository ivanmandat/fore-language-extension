# ITextWriter.WriteBoolean

ITextWriter.WriteBoolean
-


# ITextWriter.WriteBoolean


## Синтаксис


WriteBoolean(Value: Boolean);


## Параметры


Value. Логическое
 значение, которое необходимо записать.


## Описание


Метод WriteBoolean осуществляет
 запись логического значения в текстовый файл.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("Param1:");

	    TxtWriter.WriteBoolean(True);

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны символьная строка и логическое значение. При работе
 с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
