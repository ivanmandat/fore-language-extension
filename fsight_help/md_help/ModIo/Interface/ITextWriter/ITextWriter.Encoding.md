# ITextWriter.Encoding

ITextWriter.Encoding
-


# ITextWriter.Encoding


## Синтаксис


Encoding: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство Encoding определяет
 кодировку текста для записи в файл.


## Комментарии


По умолчанию в свойстве Encoding используется
 кодировка, которая была использована при установке операционной системы.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteLnString("Welcome!");

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл File.txt. В
 файл будет записана символьная строка в кодировке Unicode UTF8.


См.также:


[ITextWriter](ITextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
