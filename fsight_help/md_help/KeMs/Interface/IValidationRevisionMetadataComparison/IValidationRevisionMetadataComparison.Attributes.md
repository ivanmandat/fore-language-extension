# IValidationRevisionMetadataComparison.Attributes

IValidationRevisionMetadataComparison.Attributes
-


# IValidationRevisionMetadataComparison.Attributes


## Синтаксис


Attributes: [IValidationMetaAttributes](../IValidationMetaAttributes/IValidationMetaAttributes.htm);


## Описание


Свойство Attributes возвращает
 атрибуты базы данных временных рядов, по которым будет происходить сравнение.


## Комментарии


Атрибуты могут быть только уровня рядов или только уровня наблюдений.
 Невозможно сравнение метаданных по атрибутам рядов и наблюдений одновременно.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов «TSDB_VALIDATION_PARAMETERS», содержащей правило валидации
 с идентификатором «VALIDATION». Также указанная база данных временных
 рядов должна содержать атрибут рядов с идентификатором «CITY».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObjectDescriptor;

    Rub: IRubricator;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    RevisionComparisonData: IValidationRevisionMetadataComparison;

    FactAttrs: IMetaAttributes;

    ValAttrs: IValidationMetaAttributes;

    Attr: IMetaAttribute;

    RubInst: IRubricatorInstance;

    MetaData: IMetaDictionaryData;

    MetaMemb: IMetaDataMembers;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrObj := Mb.ItemById("TSDB_VALIDATION_PARAMETERS");

    Rub := RubrObj.Bind As IRubricator;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Указываем, что валидация выполняется по всем уровням календарной динамики

    ValidFilter.Level := DimCalendarLevel.None;

    // Указываем тип валидации

    ValidFilter.Kind := ValidationDetailsKind.RevisionComparison;

    // Получаем параметры валидации «Сравнение версий метаданных»

    RevisionComparisonData := ValidFilter.Details As IValidationRevisionMetadataComparison;

    // Задаем тип расчета правила и параметры сравнения метаданных

    RevisionComparisonData.CalculationType := MsCalculationType.Serie;

    RevisionComparisonData.ComparisonType := ValidationRevisionMetadataComparisonType.Change;

    // Задаем ключ сравниваемой ревизии

    RubInst := RubrObj.Open(Null) As IRubricatorInstance;

    MetaData := RubInst.Revisions.GetData(1);

    MetaMemb := MetaData.Record.Members;

    RevisionComparisonData.Revision := MetaMemb.FindById("KEY").Value;

    // Задаем атрибуты, по которым рассчитывается правило

    FactAttrs := Rub.Facts.Attributes;

    Attr := FactAttrs.FindById("CITY");

    ValAttrs := RevisionComparisonData.Attributes;

    ValAttrs.Add(Attr);

    // Очищаем область выполнения и фильтр валидации

    RevisionComparisonData.SelectionTargetData.Clear;

    RevisionComparisonData.SelectionFilter.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение с версией метаданных»:
 выявляются ряды со значением атрибута «CITY», изменённым между первой
 и текущей ревизией.


См. также:


[IValidationRevisionMetadataComparison](IValidationRevisionMetadataComparison.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
