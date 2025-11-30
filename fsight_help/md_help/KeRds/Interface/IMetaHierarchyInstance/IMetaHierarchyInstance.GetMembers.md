# IMetaHierarchyInstance.GetMembers

IMetaHierarchyInstance.GetMembers
-


# IMetaHierarchyInstance.GetMembers


## Синтаксис


GetMembers(Position: [IMetaHierarchyPosition](../IMetaHierarchyPosition/IMetaHierarchyPosition.htm)):
 [IMetaMembers](../IMetaMembers/IMetaMembers.htm);


## Параметры


Position. Позиция элементов
 в иерархии.


## Описание


Метод GetMembers возвращает
 элементы, расположенные в указанной позиции.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    RootPosition: IMetaHierarchyPosition;

	    Members: IMetaMembers;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    RootPosition := HInstance.RootPosition;

	    Members := HInstance.GetMembers(RootPosition);

	End Sub UserProc;


После выполнения примера в переменной «Members» будут содержаться корневые
 элементы справочника показателей.


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
