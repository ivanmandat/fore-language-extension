# IMetaHierarchyInstance.GetPathPosition

IMetaHierarchyInstance.GetPathPosition
-


# IMetaHierarchyInstance.GetPathPosition


## Синтаксис


GetPathPosition(Path: String): [IMetaHierarchyPosition](../IMetaHierarchyPosition/IMetaHierarchyPosition.htm);


## Параметры


Path.
 Путь элемента иерархии.


## Описание


Метод GetPathPosition возвращает
 позицию элемента иерархии по пути.


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

	    Position: IMetaHierarchyPosition;

	    Members: IMetaMembers;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Position := HInstance.GetPathPosition("0");

	    Members := HInstance.GetMembers(Position);

	End Sub UserProc;


После выполнения примера в переменной «Members» будет содержаться элемент
 справочника показателей, расположенный по пути «0».


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
