# IModelling.HpfR

IModelling.HpfR
-


# IModelling.HpfR


## Синтаксис


HpfR(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


     [Lambda: Double =
 100]): Variant;


## Параметры


Input. Сглаживаемая переменная;


Period. Период, на котором
 рассчитывается метод;


Lambda. Параметр управляет
 мерой гладкости переменной.


## Описание


Метод HpfR осуществляет сглаживание
 переменной с использованием фильтра Ходрика-Прескотта с помощью пакета
 R.


## Комментарии


Фильтр Ходрика-Прескотта - это метод сглаживания временного ряда, который
 используется для выделения длительных тенденций временного ряда. Метод
 впервые был использован для анализа бизнес-циклов послевоенной экономики
 США.


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Для настройки интеграции обратитесь к статье «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается на всём временном периоде;


	- Lambda. Необязательный
	 параметр. Значение по умолчанию - «100». Чем больше значение параметра,
	 тем более «гладкой» получается переменная.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


В репозитории должна быть настроена интеграция с R. Для настройки интеграции
 обратитесь к статье «[Как
 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserHpf;

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

	    // Получаем выражение расчета модели

	    Expr := Determ.Expression;

	    Expr.References := "Ms";

	    // Задаем выражение расчета модели

	    Expr.AsString := "HpfR(" + TermInfo.TermInnerText + ", SetPeriod(" +

	        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" + "), 120)";

	    // Проверяем корректность выражения

	    If Expr.Valid

	        // Если выражение задано корректно, то сохраняем модель

	        Then ModelObj.Save;

	        // Если выражение некорректное, то выводим сообщение в окно консоли

	        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserHpf;


В результате выполнения примера модель будет сглаживать данные первой
 входной переменной фильтром Ходрика-Прескотта с помощью пакета R.


## Пример использования в выражениях


Выражение 1:


HpfR({Чикаго - население[t]}, Null, 130)


Результат: данные временного ряда «Чикаго
 - население[t]» будут сглажены фильтром Ходрика-Прескотта на всем
 периоде данных. Параметр сглаживания равен ста тридцати. Расчет выполняется
 с помощью пакета R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


HpfR(X1, setperiod("01.01.2000", "01.01.2015"))


Результат: данные фактора «X1»
 будут сглажены фильтром Ходрика-Прескотта на указанном периоде данных
 с помощью пакета R.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | Метод «[Фильтр
 Ходрика-Прескотта](Lib.chm::/02_Time_series_analysis/UiModelling_HodrickPrescottFilter.htm)» | База данных временных рядов:
 [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: модель «[Фильтр
 Ходрика-Прескотта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/10_Filter_Hodrika_Preskotta/10_filter_hordrika_preskotta.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
