# IMetaHierarchyPosition.LevelIndex

IMetaHierarchyPosition.LevelIndex
-


# IMetaHierarchyPosition.LevelIndex


## Синтаксис


LevelIndex: Integer;


## Описание


Свойство LevelIndex возвращает
 индекс уровня, которому принадлежит позиция иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_FC».


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    Position: IMetaHierarchyPosition;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Position := HInstance.GetPathPosition("0");

	    Debug.WriteLine("Количество уровней от вершины: " + Position.Offset.ToString);

	    Debug.WriteLine("Родительский уровень: " + Position.Parent.Level.Name);

	    Debug.WriteLine("Уровень: " + Position.Level.Name);

	    Debug.WriteLine("Индекс уровня: " + Position.LevelIndex.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 позиции элемента справочника показателей, расположенного по пути «0».


См. также:


[IMetaHierarchyPosition](IMetaHierarchyPosition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
