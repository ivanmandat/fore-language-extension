# IDirectory.GetAttributes

IDirectory.GetAttributes
-


# IDirectory.GetAttributes


## Синтаксис


GetAttributes(Path: String): [FileAttributes](../../Enums/FileAttributes.htm);


## Параметры


Path - путь к каталогу, атрибуты которого необходимо получить.


## Описание


Метод GetAttributes возвращает атрибуты каталога, передаваемого посредством параметра Path.


## Комментарии


Результатом работы метода является комбинация значений перечислимого типа [FileAttributes](../../Enums/FileAttributes.htm). Для проверки атрибутов можно использовать логическую операцию [And](Fore.chm::/07_Operations/Logical_operations.htm).


## Пример


			Sub UserProc(sPath: String);

Var

    Attributes: Integer;

Begin

    If Directory.Exists(sPath) Then

        Attributes := Directory.GetAttributes(sPath);

        Debug.WriteLine(Attributes);

        If (Attributes And FileAttributes.ReadOnly) <> 0 Then

            Debug.WriteLine("Для каталога выставлен атрибут Только для чтения");

        Else

            Debug.WriteLine("Для каталога не выставлен атрибут Только для чтения");

        End If;

        If (Attributes And FileAttributes.Hidden) <> 0 Then

            Debug.WriteLine("Для каталога выставлен атрибут Скрытый");

        Else

            Debug.WriteLine("Для каталога не выставлен атрибут Скрытый");

        End If;

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то будут получены значения его атрибутов. В консоль среды разработки будут выведены информационные сообщения о состоянии атрибутов «Только для чтения» и «Скрытый».


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
