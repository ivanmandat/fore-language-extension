# IFile.AppendBinary

IFile.AppendBinary
-


# IFile.AppendBinary


## Синтаксис


AppendBinary(FileName: String): [IBinaryWriter](../IBinaryWriter/IBinaryWriter.htm);


## Параметры


FileName — путь и наименование файла, который необходимо открыть.


## Описание


Метод AppendBinary открывает файл для записи в двоичном виде и устанавливает курсор на конец файла.


## Пример


	Sub UserProc;

	Var

	    BynW: IBinaryWriter;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        BynW:=File.AppendBinary("c:\New_folder\1.txt");

	        BynW.WriteDateTime(DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера в конец файла «1.txt» будет записана текущая
 дата и время, преобразованная к двоичному виду.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
