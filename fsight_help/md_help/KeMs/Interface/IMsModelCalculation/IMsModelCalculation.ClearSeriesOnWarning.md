# IMsModelCalculation.ClearSeriesOnWarning

IMsModelCalculation.ClearSeriesOnWarning
-


# IMsModelCalculation.ClearSeriesOnWarning


## Синтаксис


ClearSeriesOnWarning: Boolean;


## Описание


Свойство ClearSeriesOnWarning определяет, будет ли результирующий ряд пустым при возникновении предупреждения.


## Комментарии


Допустимые значения:


-
True. Результирующий ряд будет пустым. Если в уравнении используется вложенная функция, расчёт будет продолжен;


-
False. Значение по умолчанию. Данные результирующего ряда изменены не будут.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MS», содержащего модель нелинейной регрессии (оценка МНК) с идентификатором «MODEL».


Добавьте ссылки на системные сборки: «Metabase», «Ms».


			Sub UserCalc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    LinReg: IMsLinearRegressionTransform;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsModelCalculation;

    CalcRes: IMsModelCalculationResult;

Begin

    MB := MetabaseClass.Active;

    // Получаем модель
    Model := MB.ItemByIdNamespace("MODEL", MB.ItemById("MS").Key).Edit As IMsModel;

    // Получаем параметры расчёта модели
    Transform := Model.Transform;

    VarTrans := Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Output.Item(0).Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    // Подготавливаем расчёт модели
    LinReg := Formula.Method As IMsLinearRegressionTransform;

    Coord := Model.Transform.CreateCoord(VarTrans);

    Calc := Model.CreateCalculation;

    // Задаём периоды расчёта
    Calc.Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

    Calc.Period.IdentificationEndDate := DateTime.Parse("31.12.2009");

    Calc.Period.ForecastStartDate := DateTime.Parse("01.01.2010");

    Calc.Period.ForecastEndDate := DateTime.Parse("31.12.2013");

    // Задаём режим вывода данных в результирующий ряд
    Calc.ClearSeriesOnWarning := True;

    // Выполняем идентификацию модели
    LinReg.Identify(Calc As IMsMethodCalculation, Coord);

    // Сохраняем изменения
    (Model As IMetabaseObject).Save;

End Sub UserCalc;


После выполнения примера модель будет рассчитана на указанный период. Если в процессе расчёта возникло предупреждение, то результирующий ряд будет очищен.


См. также:


[IMsModelCalculation](IMsModelCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
