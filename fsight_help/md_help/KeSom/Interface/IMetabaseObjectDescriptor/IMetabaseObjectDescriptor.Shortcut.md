# IMetabaseObjectDescriptor.Shortcut

IMetabaseObjectDescriptor.Shortcut
-


# IMetabaseObjectDescriptor.Shortcut


## Синтаксис


Shortcut: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm);


## Описание


Свойство Shortcut определяет
 описание объекта, на который ссылается ярлык.


## Комментарии


Если объект не является ярлыком, то данное свойство возвращает значение
 Null.


Примечание.
 Если объект является ярлыком для объекта из другого репозитория, то данное
 свойство также вернет значение Null.
 Для проверки необходимо использовать свойство [IMetabaseObjectDescriptor.IsLink](IMetabaseObjectDescriptor.IsLink.htm).
 Объект, на который ссылается ярлык, будет доступен после открытия ярлыка
 в свойстве [IMetabaseObjectInstance.Object](../IMetabaseObjectInstance/IMetabaseObjectInstance.Object.htm).


## Пример


Для выполнения примера предполагается наличие ярлыка с идентификатором
 SHORTCUT_TO_OBJ_1, ссылающегося на какой-либо объект репозитория. Также
 в репозитории имеется объект с идентификатором OBJ2.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("SHORTCUT_TO_OBJ_1");

	    MDesc := MDesc.EditDescriptor;

	    MDesc.Shortcut := MB.ItemById("OBJ2");

	    MDesc.Name := "Ярлык для OBJ2";

	    MDesc.Id := "SHORTCUT_TO_OBJ2";

	    MDesc.SaveDescriptor;

	End Sub UserProc;


После выполнения примера для ярлыка SHORTCUT_TO_OBJ_1 будет изменён
 объект, на который он ссылается, а также его наименование и идентификатор.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
