# IDimHierarchies.FindByKey

IDimHierarchies.FindByKey
-


# IDimHierarchies.FindByKey


## Синтаксис


FindByKey(hierarchyKey: Integer): [IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm);


## Параметры


hierarchyKey - ключ альтернативной
 иерархии.


## Описание


Метод FindByKey осуществляет
 поиск альтернативной иерархии в коллекции по ключу.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «TB_BASE».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    OriginalModelObj: IMetabaseObject;

	    OriginalModel: IDimensionModel;

	    Hierarchies: IDimHierarchies;

	    Hierarchy: IDimHierarchy;

	Begin

	    Mb := MetabaseClass.Active;

	    OriginalModelObj := Mb.ItemById("TB_BASE").Edit;

	    OriginalModel := OriginalModelObj As IDimensionModel;

	    Hierarchies := OriginalModel.Hierarchies;

	    Hierarchy := Hierarchies.FindByKey("1");

	    If Hierarchy <> Null Then

	        Debug.WriteLine(" Наименование: " + Hierarchy.Name);

	        Debug.WriteLine(" Идентификатор: " + Hierarchy.Id);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 альтернативной иерархии с ключом «1», если данная иерархия имеется у справочника
 «TB_BASE».


См. также:


[IDimHierarchies](IDimHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
