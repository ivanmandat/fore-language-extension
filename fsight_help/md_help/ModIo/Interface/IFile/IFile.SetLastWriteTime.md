# IFile.SetLastWriteTime

IFile.SetLastWriteTime
-


# IFile.SetLastWriteTime


## Синтаксис


SetLastWriteTime(FileName: String; LastWriteTime: DateTime);


## Параметры


FileName — путь и наименование файла, дату и время последнего изменения которого, необходимо изменить.


LastWriteTime — дата и время которые необходимо установить.


## Описание


Метод SetLastWriteTime устанавливает дату и время последнего изменения файла.


## Пример


	Sub UserProc;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        File.SetLastWriteTime("c:\New_folder\1.txt", DateTime.Now);

	    End If;

	End Sub UserProc;


После выполнения примера для файла «1.txt» будет изменена дата и время
 последнего изменения файла на текущую дату.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
