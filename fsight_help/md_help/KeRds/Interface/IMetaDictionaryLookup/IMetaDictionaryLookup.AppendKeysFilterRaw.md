# IMetaDictionaryLookup.AppendKeysFilterRaw

IMetaDictionaryLookup.AppendKeysFilterRaw
-


# IMetaDictionaryLookup.AppendKeysFilterRaw


## Синтаксис


AppendKeysFilterRaw(Attributes: Array; Selections:
 Array; Operator_: [OrmLogicalOperator](KeOrm.chm::/Enums/OrmLogicalOperator.htm));


## Параметры


Attributes. Массив наименований
 элементов;


Selections. Массив отметок
 элементов;


Operator_. Параметры применения
 отметки.


## Описание


Метод AppendKeysFilterRaw осуществляет
 добавление фильтрации по отметке в определенных атрибутах.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC.


Добавьте ссылки на системные сборки: Metabase, Cube, Rds, Dimensions.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    i: Integer;

	    Sel: Array Of Variant;

	    Att: Array Of String;

	    Dest: ICubeInstanceDestinations;

	    DimSS: IDimSelectionSet;

	    DimSet: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.GetDictionary(RubricatorDictionary.FactsValues);

	    MetaDLookup := DictInst.CreateLookup("");

	    Dest := (RubrIn As ICubeInstance).Destinations;

	    DimSS := Dest.DefaultDestination.CreateDimSelectionSet;

	    Sel := New Variant[DimSS.Count];

	    Att := New String[2];

	    Att[0] := "DT";

	    Att[1] := "UNIT";

	    i := 0;

	    For Each DimSet In DimSS Do

	        DimSet.SelectAll;

	        Sel[i] := DimSet;

	        i := i + 1;

	    End For;

	    MetaDLookup.AppendKeysFilterRaw(Att, Sel, OrmLogicalOperator.Or_);

	End Sub UserProc;


После выполнения примера будет добавлена фильтрация по отметке элементов
 для атрибутов «DT» и «UNIT».


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
