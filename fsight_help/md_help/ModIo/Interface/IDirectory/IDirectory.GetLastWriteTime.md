# IDirectory.GetLastWriteTime

IDirectory.GetLastWriteTime
-


# IDirectory.GetLastWriteTime


## Синтаксис


GetLastWriteTime(Path: String): DateTime;


## Параметры


Path - каталог, для которого необходимо узнать дату и время последнего изменения содержимого.


## Описание


Метод GetLastWriteTime возвращает дату и время последнего изменения содержимого каталога.


## Пример


			Sub UserProc(sPath: String);

Var

    Culture: ICultureInfo;

    d: DateTime;

Begin

    If Directory.Exists(sPath) Then

        Culture := CultureInfo.Current;

        d := Directory.GetLastWriteTime(sPath);

        Debug.WriteLine("Дата и время последнего изменения содержимого: " +

            Culture.FormatLongDate(d) + Culture.FormatTime(d));

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в консоль среды разработки будет выведена дата и время последнего изменения его содержимого.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
