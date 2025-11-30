# IDirectory.GetLastAccessTime

IDirectory.GetLastAccessTime
-


# IDirectory.GetLastAccessTime


## Синтаксис


GetLastAccessTime(Path: String): DateTime;


## Параметры


Path - каталог, дату и время последнего доступа к которому, необходимо получить.


## Описание


Метод GetLastAccessTime возвращает дату и время последнего доступа к каталогу.


## Пример


			Sub UserProc(sPath: String);

Var

    Culture: ICultureInfo;

    d: DateTime;

Begin

    If Directory.Exists(sPath) Then

        Culture := CultureInfo.Current;

        d := Directory.GetLastAccessTime(sPath);

        Debug.WriteLine("Дата и время последнего обращения: " +

            Culture.FormatLongDate(d) + Culture.FormatTime(d));

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в консоль среды разработки будет выведена дата и время последнего обращения к нему.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
