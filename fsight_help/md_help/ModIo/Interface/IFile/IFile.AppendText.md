# IFile.AppendText

IFile.AppendText
-


# IFile.AppendText


## Синтаксис


AppendText(FileName: String): [ITextWriter](../ITextWriter/ITextWriter.htm);


## Параметры


FileName.
 Путь и наименование файла, который необходимо открыть.


## Описание


Метод AppendText открывает файл
 для записи в текстовом виде и устанавливает курсор на конец файла.


## Пример


	Sub UserProc;

	Var

	    TextW: ITextWriter;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        TextW := File.AppendText("c:\New_folder\1.txt");

	        TextW.Encoding := CodePage.UTF8;

	        TextW.WriteDateTime(DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера в конец файла «1.txt» будет записана текущая
 дата и время, преобразованная к текстовому виду. При работе с файлом будет
 использоваться кодировка UTF-8.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
