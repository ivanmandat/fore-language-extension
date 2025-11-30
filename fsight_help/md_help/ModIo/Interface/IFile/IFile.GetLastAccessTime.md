# IFile.GetLastAccessTime

IFile.GetLastAccessTime
-


# IFile.GetLastAccessTime


## Синтаксис


GetLastAccessTime(FileName: String): DateTime;


## Параметры


FileName — путь и наименование файла, дату и время последнего доступа к которому, необходимо узнать.


## Описание


Метод GetLastAccessTime возвращает дату и время последнего доступа к файлу.


## Пример


	Sub UserProc;

	Var

	    d: DateTime;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        d:=File.GetLastAccessTime("c:\New_folder\1.txt");

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться дата и время
 последнего доступа к файлу «1.txt», если он существует.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
