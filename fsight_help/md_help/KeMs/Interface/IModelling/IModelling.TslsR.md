# IModelling.TslsR

IModelling.TslsR
-


# IModelling.TslsR


## Синтаксис


TslsR(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);

      Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);

      ConstantValue: Variant;

      Casewise: [MsCasewise](../../Enums/MsCasewise.htm);

      Explanatories: Array): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


ConstantValue. Константа, используемая
 в расчётах;


Casewise. Метод обработки пропусков;


Explanatories. Экзогенные и
 инструментальные переменные.


## Описание


Метод TslsR моделирует данные
 переменной с помощью линейной регрессии (оценка методом инструментальных
 переменных). Расчёт выполняется с помощью пакета R.


## Комментарии


Используйте метод TslsR только
 при векторном режиме расчёта.


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Подробнее о том, как можно настроить интеграцию вы можете
 узнать в разделе «[Как
 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Особенности задания параметров:


	- Period. Если параметр
	 принимает значение Null, то
	 метод рассчитывается на всём временном периоде;


	- ConstantValue. Значение
	 константы может быть задано пользователем, либо оценено автоматически.
	 Для автоматической оценки значений используйте метод [IModelling.Estimate](IModelling.Estimate.htm).
	 Если модель должна быть рассчитана без константы используйте метод
	 [IModelling.None](IModelling.None.htm);


	- Explanatories. Экзогенные
	 и инструментальные переменные указываются через запятую. Для разделения
	 данных видов переменных используйте значение Null.
	 Количество инструментальных переменных должно быть больше или равно
	 количество экзогенных переменных.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более двух входных переменных.


В репозитории должна быть настроена интеграция с R. Подробнее о том,
 как можно настроить интеграцию вы можете узнать в разделе «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


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

    Inp, Instr, Exogen: String;

    Expr: IExpression;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчета модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    Inp := TermInfo.TermInnerText;

    // Получаем вторую входную переменную.

    // Она будет использоваться в качестве экзогенной переменной.

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    Exogen := TermInfo.TermInnerText;

    // Получаем третью входную переменную.

    // Она будет использоваться в качестве инструментальной переменной.

    TransVar := Transf.Inputs.Item(2);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    Instr := TermInfo.TermInnerText;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    // Задаем выражение расчета модели

    Expr.AsString := "TslsR(" + Inp + ", SetPeriod(2000,2015), Estimate," +

        "MsCasewise.Yes, " + Exogen + ", Null, " + Instr + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет выполнять моделирование
 первой входной переменной с помощью линейной регрессии (оценка методом
 инструментальных переменных). Значение константы оценивается автоматически,
 применяется обработка пропусков методом Casewise. Расчёт выполняется с
 помощью пакета R.


## Пример использования в выражениях


Выражение 1:


Tsls({Brazil|BCA},Estimate,"","",MsCasewise.Yes,{China|BCA},Null,{Japan|BCA})


TslsR({Чикаго - население[t]}, Null, Estimate, MsCasewise.No,
 {Мехико - уровень безработицы[t]}, Null, {Анкоридж - население[t]})


Результат: временной ряд «Чикаго -
 население» будет смоделирован на всем временном периоде методом
 линейной регрессии (оценка методом инструментальных переменных) по следующим
 параметрам: значение константы оценивается автоматически, экзогенная переменная
 - временной ряд «Мехико - уровень безработицы»,
 инструментальная переменная - временной ряд «Анкоридж
 - население», обработка пропусков не применяется. Расчёт выполняется
 с помощью пакета R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


TslsR(X1, SetPeriod(2000, 2015), None, MsCasewise.Yes,
 X4, Null, X2, X3)


Результат: фактор «X1» будет
 смоделирован методом линейной регрессии (оценка методом инструментальных
 переменных) по следующим параметрам: период расчета - 2000-2015, константа
 не задана, экзогенная переменная - фактор «X4»,
 инструментальные переменные - факторы «X2»
 и «X3», применяется обработка
 пропусков методом Casewise. Расчёт выполняется с помощью пакета R.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm) |
 [Метод
 инструментальных переменных](Lib.chm::/01_Regression_models/UiModelling_LinearRegr_Method_Instr_Var.htm) | База данных временных
 рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: модель «[Линейная
 регрессия (оценка методом инструментальных переменных)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/8_Linear_regression/uimodelling_model_specification_linaer_reg2.htm)»,
 [редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
