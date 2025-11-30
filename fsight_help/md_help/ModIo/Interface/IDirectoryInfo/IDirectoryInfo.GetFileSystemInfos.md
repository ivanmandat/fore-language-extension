# IDirectoryInfo.GetFileSystemInfos

IDirectoryInfo.GetFileSystemInfos
-


# IDirectoryInfo.GetFileSystemInfos


## Синтаксис


GetFileSystemInfos(Pattern: String): [IFileSystemInfoList](../IFileSystemInfoList/IFileSystemInfoList.htm);


## Параметры


Pattern — символьная строка, в соответствии с которой будет фильтроваться список.


## Описание


Метод GetFileSystemInfos возвращает информацию о подкаталогах и файлах директории. Список фильтруется в соответствии с фильтром, передаваемым посредством параметра Pattern.


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


			Sub UserProc;

Var

    Dir: IDirectoryInfo;

    Contents: IFileSystemInfoList;

    Content: IFileSystemInfo;

Begin

    Dir := New DirectoryInfo.Attach("c:\Work");

    If Dir.Exists Then

        Contents := Dir.GetFileSystemInfos("*sample*");

        For Each Content In Contents Do

            If Content.Extension <> "" Then

                Debug.WriteLine("Полный путь к файлу: " + Content.FullName);

            Else

                Debug.WriteLine("Полный путь к подкаталогу: " + Content.FullName);

            End If;

            Debug.WriteLine("Дата создания: " + Content.CreationTime.ToShortDateString);

            Debug.WriteLine("Аттрибуты: " + Content.Attributes.ToString);

        End For;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен информация о подкаталогах и файлах из указанной директории, имеющих в своем наименовании сочетание «sample».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
