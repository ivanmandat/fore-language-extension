# ITextReader.WordDelimiters

ITextReader.WordDelimiters
-


# ITextReader.WordDelimiters


## Синтаксис


WordDelimiters: String;


## Описание


Свойство WordDelimiters определяет
 разделитель между словами при чтении текстового файла. По умолчанию в
 качестве разделителя используется пробел.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    s: String;

	Begin

	    File1 := New FileInfo.Attach("c:\New_folder\1.txt");

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.WordDelimiters := "_";

	        TextR.Encoding := CodePage.UTF8;

	        s := TextR.ReadWord;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться первое слово,
 считанное из текстового файла «1.txt». В качестве разделителя будет использоваться
 символ «_». При работе с файлом будет использоваться кодировка UTF-8.


См.также:


[ITextReader](ITextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
