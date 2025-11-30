# IFile.OpenBinaryWriter

IFile.OpenBinaryWriter
-


# IFile.OpenBinaryWriter


## Синтаксис


OpenBinaryWriter(FileName: String; Truncate: Boolean):
 [IBinaryWriter](../IBinaryWriter/IBinaryWriter.htm);


## Параметры


FileName — путь и наименование
 файла, который необходимо открыть.


Truncate — параметр, определяющий
 будет ли файл очищаться при открытии. True если будет.


## Описание


Метод OpenBinaryWriter открывает
 файл для записи в двоичном виде и устанавливает курсор на начало файла.


## Пример


	Sub UserProc;

	Var

	    BinW: IBinaryWriter;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        BinW:=File.OpenBinaryWriter("c:\New_folder\1.txt",True);

	        BinW.WriteDateTime(DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера в файл «1.txt» будет записана текущая дата
 и время, преобразованная к двоичному виду. Файл будет перезаписан.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
