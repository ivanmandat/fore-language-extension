# IFile.SetAttributes

IFile.SetAttributes
-


# IFile.SetAttributes


## Синтаксис


SetAttributes(FileName: String; Attributes: [FileAttributes](../../Enums/FileAttributes.htm));


## Параметры


FileName — путь и наименование
 файла, атрибут которого, необходимо изменить.


Attributes — атрибуты файла,
 которые необходимо установить.


## Описание


Метод SetAttributes изменяет
 атрибуты файла, передаваемого посредством параметра FileName.
 Список атрибутов разделяется оператором «Or».


## Пример


	Sub UserProc;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        File.SetAttributes("c:\New_folder\1.txt", FileAttributes.Hidden Or FileAttributes.ReadOnly);

	    End If;

	End Sub UserProc;


После выполнения примера для файла «1.txt», если он существует, будут
 установлены атрибуты «Скрытый» и «Только чтение».


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
