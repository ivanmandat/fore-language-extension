# IValidationLevel.ComparisonValue

IValidationLevel.ComparisonValue
-


# IValidationLevel.ComparisonValue


## Синтаксис


ComparisonValue: [IValidationComparisonValue](../IValidationComparisonValue/IValidationComparisonValue.htm);


## Описание


Свойство ComparisonValue возвращает
 параметры сравнения.


## Комментарии


Значения для сравнения могут быть как абсолютными, так и процентными.
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

    Level: IValidationLevel;

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

    ValidFilter.Kind := ValidationDetailsKind.Level;

    // Получаем параметры валидации «Сравнение с числом»

    Level := ValidFilter.Details As IValidationLevel;

    // Задаем параметры сравнения

    ComparisonValue := Level.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := -0.3;

    // Очищаем область выполнения и фильтр валидации

    Level.SelectionTargetData.Clear;

    Level.SelectionFilter.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение с числом»: выявляются
 значения ряда больше «-0,3».


См. также:


[IValidationLevel](IValidationLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
