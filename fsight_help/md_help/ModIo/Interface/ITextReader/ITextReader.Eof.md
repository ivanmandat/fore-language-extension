# ITextReader.Eof

ITextReader.Eof
-


# ITextReader.Eof


## Синтаксис


Eof: Boolean;


## Описание


Свойство Eof возвращает признак
 окончания текста в файле.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    Word: IStringList;

	Begin

	    File1 := New FileInfo.Attach("c:\New_folder\1.txt");

	    Word := New StringList.Create;

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.Encoding := CodePage.UTF8;

	        While Not TextR.Eof Do

	            Word.Add(TextR.ReadWord);

	        End While;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «Word» будет содержаться массив
 слов, считанный из файла «1.txt». В качестве разделителя между словами
 используется пробел. При работе с файлом будет использоваться кодировка
 UTF-8.


См.также:


[ITextReader](ITextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
