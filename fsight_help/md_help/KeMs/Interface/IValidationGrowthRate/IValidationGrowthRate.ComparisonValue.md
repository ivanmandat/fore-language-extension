# IValidationGrowthRate.ComparisonValue

IValidationGrowthRate.ComparisonValue
-


# IValidationGrowthRate.ComparisonValue


## Синтаксис


ComparisonValue: [IValidationComparisonValue](../IValidationComparisonValue/IValidationComparisonValue.htm);


## Описание


Свойство ComparisonValue возвращает
 параметры темпа роста.


## Комментарии


Значения темпа роста могут быть как абсолютными, так и процентными.
 Для выбора типа значения используйте свойство [IValidationComparisonValue.Percentage](../IValidationComparisonValue/IValidationComparisonValue.Percentage.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS»,
 содержащей правило валидации с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    GrowthRate: IValidationGrowthRate;

    ComparisonValue: IValidationComparisonValue;

Begin

    Mb := MetabaseClass.Active;

    // Получаем правило валидации

    RubrKey := Mb.GetObjectKeyById("TSDB_VALIDATION_PARAMETERS");

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем уровень динамики, к которому применяем правило

    ValidFilter.Level := DimCalendarLevel.None;

    // Указываем тип валидации

    ValidFilter.Kind := ValidationDetailsKind.GrowthRate;

    // Получаем параметры правила «Анализ темпа роста»

    GrowthRate := ValidFilter.Details As IValidationGrowthRate;

    // Задаем параметры вычисления темпа роста

    ComparisonValue := GrowthRate.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.Less;

    ComparisonValue.Percentage := True;

    ComparisonValue.Value1 := 10;

    // Очищаем область выполнения и фильтр валидации

    GrowthRate.SelectionTargetData.Clear;

    GrowthRate.SelectionFilter.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Анализ темпа роста»: выявляются
 значения ряда с темпом роста менее 10%.


См. также:


[IValidationGrowthRate](IValidationGrowthRate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
