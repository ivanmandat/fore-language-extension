# IDirectory.SetLastWriteTime

IDirectory.SetLastWriteTime
-


# IDirectory.SetLastWriteTime


## Синтаксис


SetLastWriteTime(Path: String; LastWriteTime: DateTime);


## Параметры


Path - каталог, для которого необходимо установить дату и время последнего изменения содержимого.


LastWriteTime - дата и время, которые необходимо установить.


## Описание


Метод SetLastWriteTime устанавливает дату и время последнего изменения содержимого каталога.


## Пример


			Sub UserProc(sPath: String);

Begin

    If Directory.Exists(sPath) Then

        Directory.SetLastWriteTime(sPath, DateTime.Now);

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в качестве даты и времени последнего изменения его содержимого будет установлена текущая дата и время.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
