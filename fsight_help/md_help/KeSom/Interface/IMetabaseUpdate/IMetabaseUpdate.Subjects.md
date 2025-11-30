# IMetabaseUpdate.Subjects

IMetabaseUpdate.Subjects
-


# IMetabaseUpdate.Subjects


## Синтаксис


		Subjects: [IMetabaseUpdateAccessSubjects](../IMetabaseUpdateAccessSubjects/IMetabaseUpdateAccessSubjects.htm);


## Описание


Свойство Subjects определяет
 субъекты безопасности, для которых переносятся права доступа на объекты.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pefx.
 В файле необходимо наличие обновления по правам доступа.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		Begin

		    MB := Params.Metabase;

		    Update := MB.CreateUpdate();

		    Update.LoadFromFileNF("D:\"+ "Update.pefx", UpdateLoadMode.ulmReplace);

		    System.Diagnostics.Debug.WriteLine(Update.Subjects.Count);

		End Sub;


В результате выполнения примера в окне консоли отобразится количество
 субъектов безопасности, для которых переносятся права доступа на объекты.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
