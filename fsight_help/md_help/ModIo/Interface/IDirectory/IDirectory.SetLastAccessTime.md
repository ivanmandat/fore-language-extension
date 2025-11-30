# IDirectory.SetLastAccessTime

IDirectory.SetLastAccessTime
-


# IDirectory.SetLastAccessTime


## Синтаксис


SetLastAccessTime(Path: String; LastAccessTime: DateTime);


## Параметры


Path - каталог, дату и время последнего доступа к которому, необходимо изменить.


LastAccessTime - дата и время, которые необходимо установить.


## Описание


Метод SetLastAccessTime изменяет дату и время последнего доступа к каталогу.


## Пример


			Sub UserProc(sPath: String);

Begin

    If Directory.Exists(sPath) Then

        Directory.SetLastAccessTime(sPath, DateTime.Now);

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в качестве даты и времени последнего обращения к нему будет установлена текущая дата и время.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
