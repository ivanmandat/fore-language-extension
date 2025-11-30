# IRubricator.FactsOnQuery

IRubricator.FactsOnQuery
-


# IRubricator.FactsOnQuery


## Синтаксис


FactsOnQuery: Boolean;


## Описание


Свойство FactsOnQuery определяет,
 будет ли справочник фактов основан на запросе.


## Комментарии


Допустимые значения:


	- True. Справочник фактов
	 основан на запросе. Текст запроса определяет свойство [IMetaAttributes.SelectQueryText](KeRds.chm::/Interface/IMetaAttributes/IMetaAttributes.SelectQueryText.htm),
	 возвращаемое свойством [IRubricator.Facts](IRubricator.Facts.htm).[Attributes](KeRds.chm::/Interface/IMetaDictionary/IMetaDictionary.Attributes.htm);


	- False. Справочник фактов
	 не основан на запросе.


## Пример


Для выполнения примера в репозитории должны присутствовать:


	- таблица данных с идентификатором T_TSDB, содержащая следующие
	 поля:


		 Идентификатор
		 Тип поля
		 Комментарий


		 COUNTRY
		 Целый
		 Обязательное, входит в состав первичного индекса.


		 INDICATOR
		 Целый
		 Обязательное, входит в состав первичного индекса.


		 DL
		 Целый
		 Обязательное, входит в состав первичного индекса.


		 VALUE
		 Вещественный
		 Необязательное.


		 DT
		 Дата
		 Необязательное.


	- репозиторий НСИ с идентификатором RDS_REPO, содержащий:


	-


		- справочник стран с идентификатором DICT_CTR;


		- справочник показателей с идентификатором DICT_IND.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ci: IMetabaseObjectCreateInfo;

	    o: IMetabaseObject;

	    r: IRubricator;

	    rds: IMetabaseObjectDescriptor;

	    CountryFactAttr, IndicatorFactAttr: IMetaAttribute;

	    FactIndex: IMetaIndex;

	    fDict, rDict, vDict: IMetaDictionary;

	    s: String;

	    Atts: IMetaAttributes;

	Begin

	    mb := MetabaseClass.Active;

	    // Создаем БД временных рядов

	    ci := mb.CreateCreateInfo;

	    ci.ClassId := MetabaseObjectClass.KE_CLASS_RUBRICATOR;

	    ci.Parent := mb.Root;

	    ci.Name := "БД временных рядов на запросе";

	    ci.Id := Mb.GenerateId("RUB_QUERY");

	    o := mb.CreateObject(ci).Edit As IMetabaseObject;

	    r := o As IRubricator;

	    // Задаем репозиторий НСИ

	    rds := mb.ItemById("RDS_REPO");

	    r.Database := rds.Bind As IRdsDatabase;

	    // Указываем, что справочники фактов,

	    // значений и ревизий строятся на запросе

	    r.FactsOnQuery := True;

	    r.RevisionsOnQuery := True;

	    r.ValuesOnQuery := True;

	    // Временные ряды имеют составной ключ

	    r.CompoundFactorKey := True;

	    // Задаем прочие параметры БД временных рядов

	    r.KeepHistory := False;

	    r.HasEmptyAttribute := False;

	    r.HasMnemonics := False;

	    // Создаем справочники фактов, ревизий, значений

	    r.CreateRevisions;

	    r.CreateFacts;

	    r.CreateValues;

	    // Создаем атрибут показателей «Страна»

	    CountryFactAttr := r.Facts.Attributes.Add(False);

	    CountryFactAttr.Id := "COUNTRY";

	    CountryFactAttr.Name := "Страна";

	    CountryFactAttr.DataType := DbDataType.Integer;

	    CountryFactAttr.Kind := (MetaAttributeKind.Dimension);

	    CountryFactAttr.ValuesObject := mb.ItemByIdNamespace("DICT_CTR", rds.Key);

	    CountryFactAttr.Nullable := False;

	    If r.Dimensions.FindByKey(CountryFactAttr.ValuesObject.Key) = Null Then

	        r.Dimensions.AddDimensionEx(CountryFactAttr.ValuesObject.Bind As IDimensionModel);

	    End If;

	    // Создаем атрибут показателей «Показатель»

	    IndicatorFactAttr := r.Facts.Attributes.Add(False);

	    IndicatorFactAttr.Id := "INDICATOR";

	    IndicatorFactAttr.Name := "Показатель";

	    IndicatorFactAttr.DataType := DbDataType.Integer;

	    IndicatorFactAttr.Kind := (MetaAttributeKind.Dimension);

	    IndicatorFactAttr.ValuesObject := mb.ItemByIdNamespace("DICT_IND", rds.Key);

	    IndicatorFactAttr.Nullable := False;

	    If r.Dimensions.FindByKey(IndicatorFactAttr.ValuesObject.Key) = Null Then

	        r.Dimensions.AddDimensionEx(IndicatorFactAttr.ValuesObject.Bind As IDimensionModel);

	    End If;

	    r.CreateFacts;

	    // Создаем первичный индекс БД временных рядов

	    FactIndex := r.Facts.Indexes.Add;

	    FactIndex.Primary := True;

	    FactIndex.Unique := True;

	    If CountryFactAttr <> Null Then

	        FactIndex.Attributes.Add(CountryFactAttr);

	    End If;

	    If IndicatorFactAttr <> Null Then

	        FactIndex.Attributes.Add(IndicatorFactAttr);

	    End If;

	    FactIndex.Attributes.Add(r.Facts.Attributes.FindById("DL"));

	    // Указываем запрос для справочника фактов

	    fDict := r.Facts;

	    fDict.UseQuery := True;

	    fDict.CompoundFactorKey := True;

	    s := "Select distinct country, indicator, dl, " +

	        "country *1000 + indicator as 'KEY', " +

	        "country *1000 + indicator as factor, " +

	        "1 as REV, 0 as DLT, cast(NULL as int) as OBT, " +

	        "cast(NULL as int) as UNIT from T_TSDB" ;

	    Atts := fDict.Attributes;

	    Atts.UseQuery := True;

	    Atts.SelectQueryText := s;

	    // Указываем запрос для справочника ревизий

	    rDict := r.Revisions;

	    rDict.UseQuery := True;

	    s := "select 1 'KEY', 'SOURCE' NAM, current_timestamp DT, 0 KIN, " +

	        "'' USR, cast(NULL as int) CMT , 0 OBT" ;

	    Atts := rDict.Attributes;

	    Atts.UseQuery := True;

	    Atts.SelectQueryText := s;

	    // Указываем запрос для справочника значений

	    vDict := r.Values;

	    vDict.UseQuery := True;

	    s := "Select country *100000 + indicator * 100 + " +

	        "datediff(dd,DT,{d'1980-01-01'}) 'KEY', " +

	        "country *1000 + indicator FACTOR, 1 REV, " +

	        "DL, value VL ,indicator, country, DT, -1 SC, " +

	        "CAST(NULL as NVarchar(255)) CMT, " +

	        "CAST(null as int) UNIT from T_TSDB" ;

	    Atts := vDict.Attributes;

	    Atts.UseQuery := True;

	    Atts.SelectQueryText := s;

	    // Сохраняем БД временных рядов

	    o.Save;

	End Sub UserProc;


При выполнении примера будет создана база данных временных рядов, основанная
 на запросах к таблице данных T_TSDB. База содержит пользовательские атрибуты
 показателей COUNTRY и INDICATOR, ссылающиеся на справочники НСИ DICT_CTR
 и DICT_IND.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
