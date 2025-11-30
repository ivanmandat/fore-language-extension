# IRubricatorCreator.CreateRubricator

IRubricatorCreator.CreateRubricator
-


# IRubricatorCreator.CreateRubricator


## Синтаксис


		CreateRubricator: [IRubricator](../IRubricator/IRubricator.htm);


## Описание


Метод CreateRubricator создаёт
 базу данных временных рядов.


## Комментарии


Базовые параметры БД временных рядов как объекта репозитория определяет
 свойство [IRubricatorCreator.CreateInfo](IRubricatorCreator.CreateInfo.htm).


## Пример


Для выполнения примера в репозитории должны присутствовать:


	- таблица данных с идентификатором «T_TSDB», содержащая следующие
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


		 ACT
		 Логический
		 Необязательное.


	- репозиторий НСИ с идентификатором «RDS_REPO», содержащий:


	-


		- справочник мер с идентификатором «MEASURES»;


		- справочник единиц измерения с идентификатором «UNITS»;


		- справочник стран с идентификатором «DICT_CTR»;


		- справочник показателей с идентификатором «DICT_IND».


	- календарный справочник с идентификатором «D_CALEND».


Добавьте ссылки на системные сборки: Mb, Cubes, Rds, Db, Dal, Dimensions.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    cr: IRubricatorCreator;

		    CrInfo: IMetabaseObjectCreateInfo;

		    mbObj: IMetabaseObjectDescriptor;

		    RdsKey: Integer;

		    Bs: IRubricatorCreatorBindings;

		    bindCountry, bindIndicator: IRubricatorCreatorBinding;

		    bindDLfacts, bindValues, bindDate, bindC: IRubricatorCreatorBinding;

		Begin

		    mb := MetabaseClass.Active;

		    cr := New RubricatorCreator.Create;

		    // Задаем репозиторий

		    cr.Metabase := mb;

		    // Задаем параметры создаваемой БД временных рядов

		    CrInfo := cr.CreateInfo;

		    CrInfo.Id := mb.generateId("RUBRICATOR");

		    CrInfo.Name := "База данных временных рядов";

		    CrInfo.Parent := mb.Root;

		    // Задаем репозиторий НСИ

		    mbObj := mb.ItemById("RDS_REPO");

		    RdsKey := mbObj.Key;

		    cr.RdsDatabase := mbObj.Bind As IRdsDatabase;

		    // Задаем таблицу данных

		    mbObj := mb.ItemById("T_TSDB");

		    cr.SourceTable := mbObj.Bind As ITable;

		    // Задаем привязки атрибутов

		    Bs := cr.Bindings;

		    // Привязка атрибута показателей «Country»

		    bindCountry := Bs.Add;

		    bindCountry.Dictionary := RubricatorDictionary.Facts;

		    bindCountry.AttributeId := "COUNTRY";

		    bindCountry.AttributeName := "Страна";

		    bindCountry.UseField := True;

		    bindCountry.SourceFieldId := "COUNTRY";

		    bindCountry.DataType := DbDataType.Integer;

		    bindCountry.Kind := (MetaAttributeKind.Dimension);

		    bindCountry.ValuesObject := mb.ItemByIdNamespace("DICT_CTR", RdsKey);

		    bindCountry.Nullable := False;

		    bindCountry.IsDimension := True;

		    bindCountry.IncludeInIndex := True;

		    // Привязка атрибута показателей «Indicator»

		    bindIndicator := Bs.Add;

		    bindIndicator.Dictionary := RubricatorDictionary.Facts;

		    bindIndicator.AttributeId := "INDICATOR";

		    bindIndicator.AttributeName := "Показатель";

		    bindIndicator.UseField := True;

		    bindIndicator.SourceFieldId := "INDICATOR";

		    bindIndicator.DataType := DbDataType.Integer;

		    bindIndicator.Kind := (MetaAttributeKind.Dimension);

		    bindIndicator.Tag := MetaAttributeTag.None;

		    bindIndicator.ValuesObject := mb.ItemByIdNamespace("DICT_IND", RdsKey);

		    bindIndicator.Nullable := False;

		    bindIndicator.IsDimension := True;

		    bindIndicator.IncludeInIndex := True;

		    // Привязка атрибута показателей «Период»

		    bindDLfacts := Bs.Add;

		    bindDLfacts.Dictionary := RubricatorDictionary.Facts;

		    bindDLfacts.AttributeId := "DL";

		    bindDLfacts.UseField := True;

		    bindDLfacts.SourceFieldId := "DL";

		    bindDLfacts.IncludeInIndex := True;

		    // Привязка атрибута наблюдений «Значение»

		    bindValues := Bs.Add;

		    bindValues.Dictionary := RubricatorDictionary.Values;

		    bindValues.AttributeId := "VL";

		    bindValues.UseField := True;

		    bindValues.SourceFieldId := "VALUE";

		    // Привязка атрибута наблюдений «Дата»

		    bindDate := Bs.Add;

		    bindDate.Dictionary := RubricatorDictionary.Values;

		    bindDate.AttributeId := "DT";

		    bindDate.UseField := True;

		    bindDate.SourceFieldId := "DT";

		    // Привязка атрибута наблюдений «Актуальность»

		    bindC := Bs.Add;

		    bindC.Dictionary := RubricatorDictionary.Values;

		    bindC.AttributeId := "ACT";

		    bindC.AttributeName := "Актуальность";

		    bindC.UseField := False;

		    bindC.DataType := DbDataType.Boolean;

		    bindC.SourceValue := 1;

		    bindIndicator.Hidden := True;

		    // Задаем календарное измерение

		    mbObj := mb.ItemById("D_CALEND");

		    cr.TemplateCalendar := mbObj.Bind As ICalendarDimension;

		    // Задаем справочник мер

		    mbObj := mb.ItemByIdNamespace("MEASURES", RdsKey);

		    cr.Measures := mbObj.Bind As IRdsDictionary;

		    // Задаем справочник единиц измерения

		    mbObj := mb.ItemByIdNamespace("UNITS", RdsKey);

		    cr.Units := mbObj.Bind As IRdsDictionary;

		    // Создаем БД временных рядов

		    cr.CreateRubricator;

		End Sub UserProc;


В результате выполнения примера будет создана база данных временных
 рядов, основанная на таблице данных «T_TSDB». База содержит пользовательские
 атрибуты показателей «COUNTRY» и «INDICATOR», ссылающиеся на справочники
 НСИ «DICT_CTR» и «DICT_IND».


См. также:


[IRubricatorCreator](IRubricatorCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
