# IFileInfo.AppendBinary

IFileInfo.AppendBinary
-


# IFileInfo.AppendBinary


## Синтаксис


AppendBinary: [IBinaryWriter](../IBinaryWriter/IBinaryWriter.htm);


## Описание


Метод AppendBinary открывает
 файл для записи в двоичном виде и устанавливает курсор на конец файла.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BynW: IBinaryWriter;

	Begin

	    File1:=New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        BynW:=File1.AppendBinary;

	        BynW.WriteDateTime(DateTime.Now);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в конец файла «1.txt» будут записаны текущие
 дата и время, преобразованные к двоичному виду.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
