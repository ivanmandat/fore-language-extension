# IFile.Exists

IFile.Exists
-


# IFile.Exists


## Синтаксис


Exists(FileName: String): Boolean;


## Параметры


FileName — путь и наименование файла, наличие которого необходимо проверить.


## Описание


Метод Exists возвращает признак существования файла.


## Пример


	Sub UserProc;

	Var

	    s: String;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 файл «1.txt» существует.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
