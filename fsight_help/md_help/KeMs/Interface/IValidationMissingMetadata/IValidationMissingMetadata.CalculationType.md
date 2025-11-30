# IValidationMissingMetadata.CalculationType

IValidationMissingMetadata.CalculationType
-


# IValidationMissingMetadata.CalculationType


## Синтаксис


CalculationType: [MsCalculationType](../../Enums/MsCalculationType.htm);


## Описание


Свойство CalculationType определяет
 тип метаданных, в которых валидация выявляет отсутствие значений.


## Комментарии


Допустимые значения:


	- MsCalculationType.Pointwise.
	 Валидация ищет пропуски в значениях атрибутов наблюдений;


	- MsCalculationType.Serie.
	 Валидация ищет пропуски в значениях атрибутов показателей.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS»,
 содержащей правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    MissingMetaData: IValidationMissingMetaData;

    SelectionAttrValList: IValidationSelectionValueList;

    SelectionAttrFilter: IValidationSelectionFilter;

    Rub: IRubricator;

    MetaAttr: IMetaAttribute;

    ValidMetaAttrs: IValidationMetaAttributes;

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

    ValidFilter.Kind := ValidationDetailsKind.MissingMetaData;

    // Получаем параметры валидации «Пропуски в метаданных»

    MissingMetaData := ValidFilter.Details As IValidationMissingMetaData;

    // Задаем тип проверяемых метаданных

    MissingMetaData.CalculationType := MsCalculationType.Pointwise;

    // Задаем проверяемый атрибут

    MetaAttr := Rub.Values.Attributes.FindById("CMT");

    ValidMetaAttrs := MissingMetaData.Attributes;

    ValidMetaAttrs.Clear;

    ValidMetaAttrs.Add(MetaAttr);

    // Очищаем область выполнения и фильтр валидации

    SelectionAttrValList := MissingMetaData.SelectionTargetData;

    SelectionAttrValList.Clear;

    SelectionAttrFilter := MissingMetaData.SelectionFilter;

    SelectionAttrFilter.Clear;

    // Сохраняем изменения

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации типа «Пропуски в метаданных». При его
 выполнении проверяется наличие значения системного атрибута «CMT» у наблюдений
 показателей.


См. также:


[IValidationMissingMetadata](IValidationMissingMetadata.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
