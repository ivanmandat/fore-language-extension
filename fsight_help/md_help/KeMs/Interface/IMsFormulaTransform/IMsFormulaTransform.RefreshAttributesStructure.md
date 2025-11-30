# IMsFormulaTransform.RefreshAttributesStructure

IMsFormulaTransform.RefreshAttributesStructure
-


# IMsFormulaTransform.RefreshAttributesStructure


## Синтаксис


RefreshAttributesStructure;


## Описание


Метод RefreshAttributesStructure
 обновляет структуру атрибутов модели.


## Комментарии


Метод актуален, если модель основана на атрибутах.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором TSDB, содержащей во внутреннем контейнере моделирования
 модель детерминированного уравнения с идентификатором MODEL_ATTR.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    Rubr: IRubricator;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    TransformVarables: IMsFormulaTransformVariables;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsMethodCalculation;

    Period: IMsModelPeriod;

    Formula: IMsFormula;

Begin

    // Получаем БД временных рядов

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("TSDB");

    Rubr := RubrDescr.Bind As IRubricator;

    // Получаем внутренний контейнер моделирования

    MsDescr := Rubr.ModelSpace;

    // Получаем модель

    Model := Mb.ItemByIdNamespace("MODEL_ATTR", MsDescr.Key).Edit As IMsModel;

    // Получаем параметры модели

    Transform := Model.Transform;

    // Задаем параметры для расчёта модели

    TransformVarables := Transform.Outputs;

    Coord := Transform.CreateCoord(TransformVarables.Item(0));

    Calc := Transform.CreateCalculation;

    Period := Calc.Period;

    Period.IdentificationStartDate := Model.Transform.Period.IdentificationStartDate;

    Period.IdentificationEndDate := Model.Transform.Period.IdentificationEndDate;

    Period.ForecastStartDate := Model.Transform.Period.ForecastStartDate;

    Period.ForecastEndDate := Model.Transform.Period.ForecastEndDate;

    Calc.CurrentPoint := Model.Transform.Period.IdentificationStartDate;

    // Обновляем структуру атрибутов модели

    Transform.RefreshAttributesStructure;

    // Выполняем расчёт модели

    Formula := Transform.FormulaItem(0);

    (Formula.Method As IMsDeterministicTransform).Execute(Calc, Coord);

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет обновлена структура атрибутов
 модели MODEL_ATTR. Модель будет рассчитана.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
