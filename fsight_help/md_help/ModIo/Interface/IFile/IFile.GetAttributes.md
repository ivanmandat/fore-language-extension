# IFile.GetAttributes

IFile.GetAttributes
-


# IFile.GetAttributes


## Синтаксис


GetAttributes(FileName: String): [FileAttributes](../../Enums/FileAttributes.htm);


## Параметры


FileName — путь и наименование файла, атрибуты которого, необходимо получить.


## Описание


Метод GetAttributes возвращает атрибуты файла, передаваемого посредством параметра FileName.


## Пример


	Sub UserProc;

	Var

	    i: Integer;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        i:=File.GetAttributes("c:\New_folder\1.txt");

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «i» будут содержаться атрибуты
 файла «c:\New_Folder\1.txt», преобразованные к целочисленному виду.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
