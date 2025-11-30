# IMetaHierarchyInstance.GetRootMembers

IMetaHierarchyInstance.GetRootMembers
-


# IMetaHierarchyInstance.GetRootMembers


## Синтаксис


GetRootMembers: [IMetaMembers](../IMetaMembers/IMetaMembers.htm);


## Описание


Метод GetRootMembers возвращает
 корневые элементы базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. В данной базе должна быть установлена
 иерархия показателей по атрибуту «COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    Loo: IMetaDictionaryLookup;

	    Members: IMetaMembers;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Edit;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Loo := HInstance.Lookup;

	    Loo.FactorAttribute := "COUNTRY";

	    Loo.WhereFactorKey := 512;

	    Members := HInstance.GetRootMembers;

	    Members.Reset;

	    While Not Members.Eof Do

	        Debug.WriteLine(Members.Current.Name);

	        Members.Next;

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 корневых элементов, соответствующих заданным условиям.


См. также:


[IMetaHierarchyInstance](IMetaHierarchyInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
