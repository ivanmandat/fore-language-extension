# IDirectory.GetParent

IDirectory.GetParent
-


# IDirectory.GetParent


## Синтаксис


GetParent(Path: String): [IDirectoryInfo](../IDirectoryInfo/IDirectoryInfo.htm);


## Параметры


Path - каталог, информацию о родительском каталоге которого, необходимо получить.


## Описание


Метод GetParent возвращает информацию о родительском каталоге указанного каталога.


## Пример


			Sub UserProc(sPath: String);

Var

    Culture: ICultureInfo;

    ParentDir: IDirectoryInfo;

    d: DateTime;

Begin

    If Directory.Exists(sPath) Then

        Culture := CultureInfo.Current;

        ParentDir := Directory.GetParent(sPath);

        d := ParentDir.CreationTime;

        Debug.WriteLine("Дата и время создания родительского каталога: " +

            Culture.FormatLongDate(d) + Culture.FormatTime(d));

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то в консоль среды разработки будет выведена дата и время создания его родительского каталога.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
