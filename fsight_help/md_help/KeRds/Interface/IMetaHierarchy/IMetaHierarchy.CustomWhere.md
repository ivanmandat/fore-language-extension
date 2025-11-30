# IMetaHierarchy.CustomWhere

IMetaHierarchy.CustomWhere
-


# IMetaHierarchy.CustomWhere


## Синтаксис


CustomWhere: [IOrmConditions](KeOrm.chm::/Interface/IOrmConditions/IOrmConditions.htm);


## Описание


Свойство CustomWhere возвращает
 дополнительные условия иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC. База должна содержать обязательный
 атрибут с идентификатором COUNTRY».


Добавьте ссылки на системные сборки Metabase, Rds, Cubes, Orm.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Rubr: IMetabaseObject;

	    RubrInst: IRubricatorInstance;

	    Facts: IMetaDictionaryInstance;

	    Hierarchy: IMetaHierarchy;

	    HInstance: IMetaHierarchyInstance;

	    Mem: IMetaMember;

	    Conds: IOrmConditions;

	    con: IOrmCondition;

	    Mems: IMetaMembers;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := MB.ItemById("OBJ_FC").Bind;

	    RubrInst := Rubr.Open(Null) As IRubricatorInstance;

	    Facts := RubrInst.GetDictionary(RubricatorDictionary.Facts);

	    Hierarchy := Facts.Dictionary.DefaultHierarchy;

	    HInstance := Facts.OpenHierarchy(Hierarchy);

	    Mems := HInstance.GetRootMembers;

	    Mem := Mems.Current;

	    Debug.WriteLine("До");

	    Debug.WriteLine(Mem.CountTotal);

	    Conds := HInstance.CustomWhere;

	    con := Conds.Add;

	    con.AttributeName := "COUNTRY";

	    con.Value := 512;

	    HInstance.Build;

	    Mems := HInstance.GetRootMembers;

	    Mem := Mems.Current;

	    Debug.WriteLine("После");

	    Debug.WriteLine(Mem.CountTotal);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 количестве элементов в иерархии до и после применения дополнительного
 условия.


См. также:


[IMetaHierarchy](IMetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
