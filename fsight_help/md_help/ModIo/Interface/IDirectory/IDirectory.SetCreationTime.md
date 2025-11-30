# IDirectory.SetCreationTime

IDirectory.SetCreationTime
-


# IDirectory.SetCreationTime


## Синтаксис


SetCreationTime(Path: String; CreationTime: DateTime);


## Параметры


Path. Каталог, дату и время
 создания которого, необходимо изменить;


CreationTime. Дата и время,
 которые необходимо установить.


## Описание


Метод SetCreationTime изменяет дату и время создания каталога, передаваемого посредством параметра Path.


## Комментарии


Метод поддерживается только в ОС Windows.


## Пример


Для выполнения примера добавьте ссылку на системную сборку IO.


			Sub UserProc(sPath: String);

Begin

    If Directory.Exists(sPath) Then

        Directory.SetCreationTime(sPath, DateTime.Now);

    End If;

End Sub UserProc;


В результате выполнения примера будет осуществлена проверка наличия
 в файловой системе каталога, указанного в параметре «sPath». Если каталог
 существует, то в качестве даты и времени его создания будет установлена
 текущая дата и время.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
