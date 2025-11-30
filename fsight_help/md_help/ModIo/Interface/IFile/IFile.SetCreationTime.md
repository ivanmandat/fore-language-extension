# IFile.SetCreationTime

IFile.SetCreationTime
-


# IFile.SetCreationTime


## Синтаксис


SetCreationTime(FileName: String; CreationTime: DateTime);


## Параметры


FileName. Путь и наименование
 файла, дату и время создания которого, необходимо изменить;


CreationTime. Дата и время,
 которые необходимо установить.


## Описание


Метод SetCreationTime изменяет дату и время создания файла, передаваемого посредством параметра FileName.


## Комментарии


Метод поддерживается только в ОС Windows.


## Пример


Для выполнения примера предполагается наличие файла C:\New_folder\1.txt.


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Begin

    If File.Exists("c:\New_folder\1.txt") Then

        File.SetCreationTime("c:\New_folder\1.txt",DateTime.Now);

    End If;

End Sub UserProc;


В результате выполнения примера будет осуществлена проверка на существование
 файла C:\New_folder\1.txt. Если файл существует, то его дата создания
 будет изменена на текущую.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
