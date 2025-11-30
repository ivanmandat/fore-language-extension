# IFile.SetLastAccessTime

IFile.SetLastAccessTime
-


# IFile.SetLastAccessTime


## Синтаксис


SetLastAccessTime(FileName: String; LastAccessTime: DateTime);


## Параметры


FileName — путь и наименование файла, дату и время последнего доступа к которому, необходимо изменить.


LastAccessTime — дата и время, которые необходимо установить.


## Описание


Метод SetLastAccessTime изменяет дату и время последнего доступа к файлу.


## Пример


	Sub UserProc;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        File.SetLastAccessTime("c:\New_folder\1.txt", DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера для файла «1.txt» будет изменена дата и время
 последнего доступа к файлу на текущую дату.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
