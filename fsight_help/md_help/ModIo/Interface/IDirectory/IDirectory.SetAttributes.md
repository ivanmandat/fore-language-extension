# IDirectory.SetAttributes

IDirectory.SetAttributes
-


# IDirectory.SetAttributes


## Синтаксис


SetAttributes(Path: String; Attributes: [FileAttributes](../../Enums/FileAttributes.htm));


## Параметры


Path - каталог, для которого необходимо изменить атрибуты.


Attributes - атрибуты, которые необходимо установить. Для указания атрибутов используйте значения перечислимого типа [FileAttributes](../../Enums/FileAttributes.htm). Значения в списке разделяются с помощью логической операции [Or](Fore.chm::/07_Operations/Logical_operations.htm).


## Описание


Метод SetAttributes устанавливает указанные атрибуты для указанного в параметре Path каталога.


## Пример


			Sub UserProc(sPath: String);

Begin

    If Directory.Exists(sPath) Then

        Directory.SetAttributes(sPath,

            FileAttributes.ReadOnly Or FileAttributes.Hidden);

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то для него будут установлены атрибуты «Только для чтения» и «Скрытый».


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
