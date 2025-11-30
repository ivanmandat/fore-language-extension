# IFileInfo.AppendText

IFileInfo.AppendText
-


# IFileInfo.AppendText


## Синтаксис


AppendText: [ITextWriter](../ITextWriter/ITextWriter.htm);


## Описание


Метод AppendText открывает файл
 для записи в текстовом виде и устанавливает курсор на конец файла.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextW: ITextWriter;

	Begin

	    File1 := New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        TextW := File1.AppendText;

	        TextW.Encoding := CodePage.UTF8;

	        TextW.WriteDateTime(DateTime.Now);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в конец файла «1.txt» будут записаны текущие
 дата и время, преобразованные к текстовому виду. При работе с файлом будет
 использоваться кодировка UTF-8.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
