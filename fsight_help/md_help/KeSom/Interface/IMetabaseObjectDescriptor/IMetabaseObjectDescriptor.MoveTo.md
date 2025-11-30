# IMetabaseObjectDescriptor.MoveTo

IMetabaseObjectDescriptor.MoveTo
-


# IMetabaseObjectDescriptor.MoveTo


## Синтаксис


MoveTo(Dest: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm));


## Параметры


Dest. Объект репозитория, в
 который необходимо скопировать объект.


## Описание


Метод MoveTo осуществляет
 перенос одного объекта репозитория в другой.


## Комментарии


Объект-приёмник должен быть не листьевым элементом репозитория.


## Пример


В репозитории добавьте 2 папки с идентификаторами «FOLDER1» и «FOLDER2».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		    MObj2: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("FOLDER1") As IMetabaseObjectDescriptor;

		    MObj2 := MB.ItemById("FOLDER2") As IMetabaseObjectDescriptor;

		    MObj.MoveTo(MObj2);

		End Sub UserProc;


В результате выполнения примера папка «FOLDER1» вложится в папку «FOLDER2».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
