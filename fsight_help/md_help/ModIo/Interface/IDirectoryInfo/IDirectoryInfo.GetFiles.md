# IDirectoryInfo.GetFiles

IDirectoryInfo.GetFiles
-


# IDirectoryInfo.GetFiles


## Синтаксис


GetFiles(Pattern: String): [IFileInfoList](../IFileInfoList/IFileInfoList.htm);


## Параметры


Pattern — символьная строка, в соответствии с которой будет фильтроваться список.


## Описание


Метод GetFiles возвращает информацию о файлах в директории. Список фильтруется в соответствии с фильтром, передаваемым посредством параметра Pattern.


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

    Files: IFileInfoList;

    FileInf: IFileInfo;

Begin

    Dir := New DirectoryInfo.Attach("c:\Work");

    If Dir.Exists Then

        Files := Dir.GetFiles("*.pef");

        For Each FileInf In Files Do

            Debug.WriteLine("Полный путь: " + FileInf.FullName);

            Debug.WriteLine("Дата создания: " + FileInf.CreationTime.ToShortDateString);

            Debug.WriteLine("Аттрибуты: " + FileInf.Attributes.ToString);

        End For;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация о файлах из указанной директории, имеющих расширение «pef», а также расширение начинающееся с символов «pef».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
