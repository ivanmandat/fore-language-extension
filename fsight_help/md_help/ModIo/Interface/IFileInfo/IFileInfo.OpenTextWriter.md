# IFileInfo.OpenTextWriter

IFileInfo.OpenTextWriter
-


# IFileInfo.OpenTextWriter


## Синтаксис


OpenTextWriter(Truncate: Boolean): [ITextWriter](../ITextWriter/ITextWriter.htm);


## Параметры


Truncate.
 Параметр,
 определяющий будет ли файл очищаться при открытии. Если в качестве значения
 передать True, то файл будет очищен.


## Описание


Метод OpenTextWriter открывает
 файл для записи в текстовом виде и устанавливает курсор на начало файла.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextW: ITextWriter;

	Begin

	    File1 := New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        TextW := File1.OpenTextWriter(True);

	        TextW.Encoding := CodePage.UTF8;

	        TextW.WriteDateTime(DateTime.Now);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в файл «1.txt» будут записаны текущая дата
 и время, преобразованные к текстовому виду. При работе с файлом будет
 использоваться кодировка UTF-8. Файл будет перезаписан.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
