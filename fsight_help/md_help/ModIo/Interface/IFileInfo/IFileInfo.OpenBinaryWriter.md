# IFileInfo.OpenBinaryWriter

IFileInfo.OpenBinaryWriter
-


# IFileInfo.OpenBinaryWriter


## Синтаксис


OpenBinaryWriter(Truncate: Boolean): [IBinaryWriter](../IBinaryWriter/IBinaryWriter.htm);


## Параметры


Truncate —
 параметр, определяющий будет ли файл очищаться при открытии. Если в качестве
 значения передать True, то файл будет очищен.


## Описание


Метод OpenBinaryWriter открывает
 файл для записи в двоичном виде и устанавливает курсор на начало файла.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinW: IBinaryWriter;

	Begin

	    File1:=New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        BinW:=File1.OpenBinaryWriter(True);

	        BinW.WriteDateTime(DateTime.Now);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в файл «1.txt» будут записаны текущая дата
 и время, преобразованные к двоичному виду. Файл будет перезаписан.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
