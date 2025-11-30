# IMetabaseUpdate.SpecialObjectsNode

IMetabaseUpdate.SpecialObjectsNode
-


# IMetabaseUpdate.SpecialObjectsNode


## Синтаксис


		SpecialObjectsNode:
		 [IMetabaseUpdateSpecialObjectsNode](../IMetabaseUpdateSpecialObjectsNode/IMetabaseUpdateSpecialObjectsNode.htm);


## Описание


Свойство SpecialObjectsNode
 возвращает объект, определяющий параметры обновления специальных объектов.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    SpecialObjNode: IMetabaseUpdateSpecialObjectsNode;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFile("C:\Update.pef");

		    SpecialObjNode := Update.SpecialObjectsNode;

		    SpecialObjNode.ApplyObject(MetabaseSpecialObject.SharedParams):= True;

		    Update.SaveToFileNF("C:\Update.pefx");

		End Sub;


В результате выполнения примера в обновление, загруженное из файла C:\Update.pef,
 будет добавлен специальный объект: глобальные переменные. Затем обновление
 будет сохранено.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
