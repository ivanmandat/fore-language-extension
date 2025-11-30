# IDirectory.GetFileSystemEntries

IDirectory.GetFileSystemEntries
-


# IDirectory.GetFileSystemEntries


## Синтаксис


GetFileSystemEntries(Path: String; Pattern: String): [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Параметры


Path - каталог, содержимое которого необходимо получить.


Pattern - символьная строка, в соответствии с которой будет фильтроваться список.


## Описание


Метод GetFileSystemEntries возвращает наименования всех подкаталогов и файлов, содержащихся в каталоге, передаваемом посредством параметра Path, в соответствии с фильтром Pattern.


## Комментарии


Символьная строка Pattern может содержать следующие подстановочные знаки:


 Подстановочный знак
 Описание


 *
 Ноль или более символов.


 ?
 Ровно один символ.


Символы, отличные от постановочных знаков, будут представлять сами себя. Если в символьной строке указывается расширение файлов, то поиск будет отрабатывать следующим образом:


-
При указании в Pattern трех символов расширения возвращаются файлы, имеющие в расширении три и более символов.


-


-
"*.abc" - вернет файлы, имеющие расширение "*.abc", "*.abcd", "*.abcde" и т.п.


-
При указании в Pattern одного, двух или более трех символов расширения возвращаются файлы, имеющие заданную длину расширения.


-


-
"*.ab" - вернет файлы только с расширением "*.ab".


## Пример


			Sub UserProc(sPath: String; Pattern: String);

Var

    Contents: IStringList;

    NameDir: String;

Begin

    If Directory.Exists(sPath) Then

        Contents := Directory.GetFileSystemEntries(sPath, Pattern);

        For Each NameDir In Contents Do

            Debug.WriteLine(NameDir);

        End For;

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «Path». Если каталог существует, то в консоль среды разработки будет выведен список подкаталогов и файлов из указанной директории, имеющих в своем наименовании сочетание «sample».


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
