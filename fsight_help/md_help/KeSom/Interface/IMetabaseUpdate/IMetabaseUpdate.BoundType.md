# IMetabaseUpdate.BoundType

IMetabaseUpdate.BoundType
-


# IMetabaseUpdate.BoundType


## Синтаксис


		BoundType:
		 [MetabaseObjectUpdateBoundType](../../Enums/MetabaseObjectUpdateBoundType.htm);


## Описание


Свойство BoundType определяет
 тип обновления объектов репозитория.


## Комментарии


Установленное значение будет использоваться для всех объектов, тип обновления
 которых не выставлен явно, т.е. [IMetabaseUpdateObjectNode.BoundType](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.BoundType.htm)
 = MetabaseObjectUpdateBoundType.Inherit.


BoundType и [IMetabaseUpdate.Constraint](IMetabaseUpdate.Constraint.htm)
 следует использовать вместо свойства [IMetabaseUpdate.UpdateType](IMetabaseUpdate.UpdateType.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFile("C:\Update.pef");

		    Update.Constraint := MetabaseObjectUpdateConstraint.CreateOnly;

		    Update.BoundType := MetabaseObjectUpdateBoundType.ById;

		    Update.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера для обновления, загружённого из файла
 C:\Update.pef, будут установлены следующие параметры:


	- тип обновления - по идентификаторам;


	- способ обновления - всегда создавать новые объекты.


Затем обновление будет сохранено.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
