# IDirectoryInfo.GetDirectories

IDirectoryInfo.GetDirectories
-


# IDirectoryInfo.GetDirectories


## Синтаксис


GetDirectories(Pattern: String): [IDirectoryInfoList](../IDirectoryInfoList/IDirectoryInfoList.htm);


## Параметры


Pattern — символьная строка, в соответствии с которой будет фильтроваться список.


## Описание


Метод GetDirectories возвращает информацию о подкаталогах в директории. Список фильтруется в соответствии с фильтром, передаваемым посредством параметра Pattern.


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


			Sub UserProc;

Var

    Dir: IDirectoryInfo;

    SubDir: IDirectoryInfoList;

    DirInfo: IDirectoryInfo;

Begin

    Dir := New DirectoryInfo.Attach("c:\Work");

    If Dir.Exists Then

        SubDir := Dir.GetDirectories("*sample*");

        For Each DirInfo In SubDir Do

            Debug.WriteLine("Полный путь: " + DirInfo.FullName);

            Debug.WriteLine("Дата создания: " + DirInfo.CreationTime.ToShortDateString);

            Debug.WriteLine("Аттрибуты: " + DirInfo.Attributes.ToString);

        End For;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация о подкаталогах из указанной директории, имеющих в своем наименовании сочетание «sample».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
