# IMetaHierarchyInstance.GetPathMember

IMetaHierarchyInstance.GetPathMember
-


# IMetaHierarchyInstance.GetPathMember


## Синтаксис


GetPathMember(Path: String): [IMetaMember](../IMetaMember/IMetaMember.htm);


## Параметры


Path. Путь элемента иерархии.


## Описание


Метод GetPathMember возвращает
 элемент иерархии по пути.


## Комментарии


Путь элемента является его индексом в иерархии. Индексация сквозная,
 начинается нуля и ведется в рамках одного уровня иерархии.


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

	    RootPosition: IMetaHierarchyPosition;

	    HInstance: IMetaHierarchyInstance;

	    Mem: IMetaMember;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("TSDB").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    RootPosition := HInstance.RootPosition;

	    HInstance.GetMembers(RootPosition);

	    Mem := HInstance.GetPathMember("0");

	    If Mem <> Null

	        Then Debug.WriteLine(Mem.Name);

	        Else Debug.WriteLine("Элемент не найден");

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 первого элемента корневого уровня иерархии.


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
