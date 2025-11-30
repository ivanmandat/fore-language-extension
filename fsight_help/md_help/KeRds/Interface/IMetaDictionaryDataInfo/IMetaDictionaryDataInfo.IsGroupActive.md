# IMetaDictionaryDataInfo.IsGroupActive

IMetaDictionaryDataInfo.IsGroupActive
-


# IMetaDictionaryDataInfo.IsGroupActive


## Синтаксис


IsGroupActive(Group: [IMetaAttributeGroup](../IMetaAttributeGroup/IMetaAttributeGroup.htm)):
 Boolean;


## Параметры


Group. Группа атрибутов базы
 данных временных рядов.


## Описание


Метод IsGroupActive возвращает
 признак того, входит ли показатель в указанную группу.


## Комментарии


Если IsGroupActive возвращает
 значение True, то показатель входит
 в указанную группу.


Признак того, что указанный групповой атрибут доступен для показателя
 возвращает метод [IMetaDictionaryDataInfo.IsAttributeActive](IMetaDictionaryDataInfo.IsAttributeActive.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_GROUPS, содержащей групповой атрибут.


Добавьте ссылки на системные сборки: Rds, Metabase, Cubes.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    Rub: IRubricator;

	    RubrIn: IRubricatorInstance;

	    Dic: IMetaDictionary;

	    i: Integer;

	    key: Array Of Integer;

	    Grp: IMetaAttributeGroup;

	    FactsLookup: IRubricatorFactsLookup;

	    FactData: IRubricatorFactData;

	    FactInfo: IMetaDictionaryDataInfo;

	Begin

	    mb := MetabaseClass.Active;

	    RubDesc := mb.ItemById("FC_GROUPS");

	    Rub := RubDesc.Bind As IRubricator;

	// Получаем справочник показателей базы
	 данных временных рядов

	    Dic := (Rub.Facts As IMetabaseObject).Edit As IMetaDictionary;

	// Получаем первую группу атрибутов справочника

	    Grp := Dic.Groups.Item(0);

	// Получаем массив ключей показателей

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    FactsLookup := RubrIn.CreateFactsLookup;

	    i := FactsLookup.LookupFactors.Length;

	    key := New Integer[i];

	    key := FactsLookup.LookupFactors;

	// Получаем показатели, которые входят в первую группу атрибутов

	    For Each i In key Do

	        FactData := RubrIn.GetFactData(i);

	        FactInfo := FactData As IMetaDictionaryDataInfo;

	        If FactInfo.IsGroupActive(Grp) Then

	            Debug.WriteLine(FactData.Mnemo);

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены мнемоники показателей,
 для которых доступно изменение значения группового атрибута.


См. также:


[IMetaDictionaryDataInfo](IMetaDictionaryDataInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
