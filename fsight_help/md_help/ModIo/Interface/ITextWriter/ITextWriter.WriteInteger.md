# ITextWriter.WriteInteger

ITextWriter.WriteInteger
-


# ITextWriter.WriteInteger


## Синтаксис


WriteInteger(Value: Integer);


## Параметры


Value. Целочисленное
 значение, которое необходимо записать.


## Описание


Метод WriteInteger осуществляет
 запись целого числа в текстовый файл.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteString("Random value:");

	    TxtWriter.WriteInteger(Math.RandBetweenI(0, 100));

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будет записано случайное целое число. При работе с файлом будет
 использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
