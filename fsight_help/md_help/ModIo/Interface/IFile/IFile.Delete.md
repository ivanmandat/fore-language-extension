# IFile.Delete

IFile.Delete
-


# IFile.Delete


## Синтаксис


Delete(FileName: String);


## Параметры


FileName — путь и наименование файла, который необходимо удалить.


## Описание


Метод Delete осуществляет удаление файла, передаваемого посредством параметра FileName. При попытке удаления несуществующего файла генерируется сообщение об ошибке.


## Пример


	Sub UserProc;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        File.Delete("c:\New_folder\1.txt");

	    End If;

	End Sub UserProc;


После выполнения примера файла «1.txt», если он существует, будет удален.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
