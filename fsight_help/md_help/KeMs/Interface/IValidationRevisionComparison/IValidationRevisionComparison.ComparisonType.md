# IValidationRevisionComparison.ComparisonType

IValidationRevisionComparison.ComparisonType
-


# IValidationRevisionComparison.ComparisonType


## Синтаксис


ComparisonType: [ValidationRevisionComparisonType](../../Enums/ValidationRevisionComparisonType.htm);


## Описание


Свойство ComparisonType определяет
 тип изменения значения между ревизиями.


## Комментарии


Для задания параметров сравнения значений используйте свойство [IValidationRevisionComparison.ComparisonValue](IValidationRevisionComparison.ComparisonValue.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов «TSDB_VALIDATION_PARAMETERS», содержащей правило валидации
 с идентификатором «VALIDATION».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObjectDescriptor;

    Rub: IRubricator;

    RubInst: IRubricatorInstance;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    DateSettings: IValidationDateSettings;

    RevisionComparison: IValidationRevisionComparison;

    ComparisonValue: IValidationComparisonValue;

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

    // Получаем параметры валидации «Сравнение версий данных»

    RevisionComparison := ValidFilter.Details As IValidationRevisionComparison;

    // Задаем параметры сравнения

    ComparisonValue := RevisionComparison.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.Between;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 1;

    ComparisonValue.Value2 := 10;

    // Задаем тип изменения значения между ревизиями

    RevisionComparison.ComparisonType := ValidationRevisionComparisonType.Change;

    // Задаем ключ сравниваемой ревизии

    RubInst := RubrObj.Open(Null) As IRubricatorInstance;

    MetaData := RubInst.Revisions.GetData(1);

    MetaMemb := MetaData.Record.Members;

    RevisionComparison.Revision := MetaMemb.FindById("KEY").Value;

    // Очищаем область выполнения и фильтр валидации

    RevisionComparison.SelectionTargetData.Clear;

    RevisionComparison.SelectionFilter.Clear;

    // Сохраняем изменения

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение с версией данных»: выявляются
 значения от одного до десяти, изменённые между первой и текущей ревизией.


См. также:


[IValidationRevisionComparison](IValidationRevisionComparison.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
