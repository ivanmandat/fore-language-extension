# IDimHierarchies.FindById

IDimHierarchies.FindById
-


# IDimHierarchies.FindById


## Синтаксис


FindById(hierarchyId: String): [IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm);


## Параметры


hierarchyId - идентификатор
 альтернативной иерархии.


## Описание


Метод FindById осуществляет
 поиск альтернативной иерархии в коллекции по идентификатору.


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

	    Hierarchy := Hierarchies.FindById("SOURCE1");

	    If Hierarchy <> Null Then

	        Debug.WriteLine(" Наименование: " + Hierarchy.Name);

	        Debug.WriteLine(" Ключ: " + Hierarchy.Key.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 альтернативной иерархии с идентификатором «SOURCE1», если данная иерархия
 имеется у справочника «TB_BASE».


См. также:


[IDimHierarchies](IDimHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
