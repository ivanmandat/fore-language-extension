# IFile.GetLastWriteTime

IFile.GetLastWriteTime
-


# IFile.GetLastWriteTime


## Синтаксис


GetLastWriteTime(FileName: String): DateTime;


## Параметры


FileName — путь и наименование файла, дату и время последнего изменения которого, необходимо узнать.


## Описание


Метод GetLastWriteTime возвращает дату и время последнего изменения файла.


## Пример


	Sub UserProc;

	Var

	    d: DateTime;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        d:=File.GetLastWriteTime("c:\New_folder\1.txt");

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться дата и время
 последнего изменения файла «1.txt», если он существует.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
