# ITextWriter.WordDelimeter

ITextWriter.WordDelimeter
-


# ITextWriter.WordDelimeter


## Синтаксис


WordDelimeter: String;


## Описание


Свойство WordDelimiters определяет
 разделитель между словами при записи в текстовый файл.


## Комментарии


По умолчанию в качестве разделителя в данном свойстве указан пробел.
 Разделитель будет добавляться автоматически после текста, записанного
 с помощью метода [WriteWord](ITextWriter.WriteWord.htm).


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WordDelimeter := "/";

	    TxtWriter.WriteWord("Word 1");

	    TxtWriter.WriteWord("Word 2");

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В файл будут записаны два слова. После каждого слова будет добавлен указанный
 разделитель. При работе с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
