# IValidationComponentMismatch.ComparisonType

IValidationComponentMismatch.ComparisonType
-


# IValidationComponentMismatch.ComparisonType


## Синтаксис


ComparisonType: [ValidationRevisionComparisonType](../../Enums/ValidationRevisionComparisonType.htm);


## Описание


Свойство ComparisonType определяет
 тип изменения значения.


## Комментарии


Значения ряда могут проверяться на наличие/отсутствие изменений, на
 добавление/удаление значений и на их увеличение/уменьшение.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов «TSDB_VALIDATION_PARAMETERS», содержащей правило валидации
 с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj, ValObj: IMetabaseObjectDescriptor;

    ValFilter: IValidationFilter;

    ComponentMismatch: IValidationComponentMismatch;

    ComparisonValue: IValidationComparisonValue;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrObj := Mb.ItemById("TSDB_VALIDATION_PARAMETERS");

    // Получаем правило валидации

    ValObj := Mb.ItemByIdNamespace("VALIDATION", RubrObj.Key).Edit;

    ValFilter := ValObj As IValidationFilter;

    // Указываем, что валидация выполняется по всем уровням календарной динамики

    ValFilter.Level := DimCalendarLevel.None;

    // Указываем тип валидации

    ValFilter.Kind := ValidationDetailsKind.ComponentMismatch;

    // Получаем параметры валидации «Анализ отклонений в компонентах»

    ComponentMismatch := ValFilter.Details As IValidationComponentMismatch;

    // Задаем параметры сравнения исходного и результирующего ряда

    ComponentMismatch.ComparisonType := ValidationRevisionComparisonType.Change;

    ComparisonValue := ComponentMismatch.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Value1 := 5;

    ComparisonValue.Percentage := True;

    // Очищаем область выполнения и фильтр валидации

    ComponentMismatch.SelectionTargetData.Clear;

    ComponentMismatch.SelectionFilter.Clear;

    // Сохраняем правило

    (ValObj As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Анализ отклонений в компонентах»:
 выявляются ряды, величина изменения которых больше пяти процентов.


См. также:


[IValidationComponentMismatch](IValidationComponentMismatch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
