# IMetaDictionaryLookup.SetKeysFilter

IMetaDictionaryLookup.SetKeysFilter
-


# IMetaDictionaryLookup.SetKeysFilter


## Синтаксис


SetKeysFilter(Selections: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Selections -
 отметка элементов.


## Описание


Метод SetKeysFilter устанавливает
 фильтрацию по отметке элементов.


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

	    For Each DimSet In DimSS Do

	        DimSet.SelectAll;

	    End For;

	    MetaDLookup.SetKeysFilter(DimSS);

	End Sub UserProc;


После выполнения примера будет установлена фильтрация по отметке элементов.


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
