# IMetaDictionaryLookup.SetKeysFilterRaw

IMetaDictionaryLookup.SetKeysFilterRaw
-


# IMetaDictionaryLookup.SetKeysFilterRaw


## Синтаксис


SetKeysFilterRaw(Attribytes: Array; Selections:
 Array);


## Параметры


Attributes - массив наименований
 элементов.


Selections - массив отметок
 элементов.


## Описание


Метод SetKeysFilterRaw устанавливает
 фильтрацию по отметке в определенных атрибутах.


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

	    MetaDLookup.SetKeysFilterRaw(Att, Sel);

	End Sub UserProc;


После выполнения примера будет установлена фильтрация по отметке элементов
 для атрибутов «DT» и «UNIT».


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
