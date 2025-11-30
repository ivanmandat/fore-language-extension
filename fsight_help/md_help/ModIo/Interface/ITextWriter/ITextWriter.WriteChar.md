# ITextWriter.WriteChar

ITextWriter.WriteChar
-


# ITextWriter.WriteChar


## Синтаксис


WriteChar(Value: Char);


## Параметры


Value. Символ,
 который необходимо записать.


## Описание


Метод WriteChar осуществляет
 запись символов в текстовый файл.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteChar(#169);

	    TxtWriter.WriteString("New
	 Line");

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны символ с кодом 169 (©) и указанная символьная строка.
 При работе с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
