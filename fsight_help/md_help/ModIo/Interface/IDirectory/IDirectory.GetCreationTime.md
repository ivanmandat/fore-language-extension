# IDirectory.GetCreationTime

IDirectory.GetCreationTime
-


# IDirectory.GetCreationTime


## Синтаксис


GetCreationTime(Path: String): DateTime;


## Параметры


Path - каталог, дату и время создания которого необходимо получить.


## Описание


Метод GetCreationTime возвращает дату и время создания каталога.


## Пример


			Sub UserProc(sPath: String);

Var

    Culture: ICultureInfo;

    d: DateTime;

Begin

    If Directory.Exists(sPath) Then

        Culture := CultureInfo.Current;

        d := Directory.GetCreationTime(sPath);

        Debug.WriteLine("Дата и время создания каталога: " +

            Culture.FormatLongDate(d) + Culture.FormatTime(d));

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в консоль среды разработки будет выведена дата и время его создания.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
