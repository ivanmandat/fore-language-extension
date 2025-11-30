# IDimHierarchies.Item

IDimHierarchies.Item
-


# IDimHierarchies.Item


## Синтаксис


Item(Index: Integer): [IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm);


## Параметры


Index - индекс иерархии в коллекции.


## Описание


Свойство доступно только для чтения.


Свойство Item возвращает альтернативную
 иерархию из коллекции по индексу.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «TB_BASE».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    OriginalModelObj: IMetabaseObject;

	    OriginalModel: IDimensionModel;

	    Hierarchies: IDimHierarchies;

	    i: Integer;

	    Hierarchy: IDimHierarchy;

	Begin

	    Mb := MetabaseClass.Active;

	    OriginalModelObj := Mb.ItemById("TB_BASE").Edit;

	    OriginalModel := OriginalModelObj As IDimensionModel;

	    Hierarchies := OriginalModel.Hierarchies;

	    Debug.WriteLine("Иерархии справочника '" + OriginalModelObj.Name + "':");

	    For i := 0 To Hierarchies.Count - 1 Do

	        Hierarchy := Hierarchies.Item(i);

	        Debug.WriteLine(" Наименование: " + Hierarchy.Name);

	        Debug.WriteLine(" Идентификатор: " + Hierarchy.Id);

	        Debug.WriteLine(" Ключ: " + Hierarchy.Key.ToString);

	        Debug.WriteLine("------");

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация об
 альтернативных иерархиях справочника «TB_BASE».


См. также:


[IDimHierarchies](IDimHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
