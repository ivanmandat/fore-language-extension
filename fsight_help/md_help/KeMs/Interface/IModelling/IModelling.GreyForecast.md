# IModelling.GreyForecast

IModelling.GreyForecast
-


# IModelling.GreyForecast


## Синтаксис


GreyForecast(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);
 Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm)): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод.


## Описание


Метод GreyForecast
 осуществляет моделирование переменной с помощью Грей-метода.


## Комментарии


Если параметру Period задано
 значение Null, то метод рассчитывается
 на всём временном периоде.


Обработка пропусков в исходных данных не применяется.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj: IMetabaseObject;

    Transf: IMsFormulaTransform;

    Formula: IMsFormula;

    Model: IMsModel;

    Determ: IMsDeterministicTransform;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    TermInfo: IMsFormulaTermInfo;

    Expr: IExpression;

Begin

    Mb := MetabaseClass.Active;

    ModelSpace := Mb.ItemById("MS").Bind;

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    TermInfo.Type := MsFormulaTermType.Pointwise;

    Expr := Determ.Expression;

    Expr.References := "Ms";

    Expr.AsString := "GreyForecast(" + TermInfo.TermInnerText + ",SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "))";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять моделирование
 первой входной с помощью Грей-метода на периоде с 2010 по 2015 год.


## Пример использования в выражениях


Выражение 1:


GreyForecast({ВВП|Анкоридж[t]}, SetPeriod("01.01.2000",
 "01.01.2015"))


Результат: для ряда «ВВП|Анкоридж»
 будет применен Грей-метод на периоде с 2010 по 2015 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


GreyForecast(X1)


Результат: для фактора «X1»
 будет применен Грей-метод на всем временном периоде.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | [Модель
 GM(1,1)(Грей-метод)](Lib.chm::/02_Time_series_analysis/Grey.htm) |
 БД временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Грей-метод](UiDw.chm::/Workbook/CalculatedSeries/Forecast/UiDw_cs_GreyForecast.htm)
 | Контейнер моделирования: [Спецификация
 Грей-метода](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_GrayForecast.htm)
 , [Редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
