# IDirectory.GetDirectories

IDirectory.GetDirectories
-


# IDirectory.GetDirectories


## Синтаксис


GetDirectories(Path: String; Pattern: String): [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Параметры


Path - каталог, содержимое которого необходимо получить.


Pattern - символьная строка, в соответствии с которой будет фильтроваться список.


## Описание


Метод GetDirectories возвращает наименование всех подкаталогов директории, передаваемой посредством параметра Path, в соответствии с фильтром Pattern.


## Комментарии


Символьная строка Pattern может содержать следующие подстановочные знаки:


 Подстановочный знак
 Описание


 *
 Ноль или более символов.


 ?
 Ровно один символ.


Символы, отличные от постановочных знаков, будут представлять сами себя.


## Пример


			Sub UserProc(sPath: String; Pattern: String);

Var

    SubDir: IStringList;

    DirName: String;

Begin

    If Directory.Exists(sPath) Then

        SubDir := Directory.GetDirectories(sPath, Pattern);

        For Each DirName In SubDir Do

            Debug.WriteLine(DirName);

        End For;

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «Path». Если каталог существует, то в консоль среды разработки будет выведен список его подкаталогов, удовлетворяющих условию, передаваемому в параметре «Pattern».


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
