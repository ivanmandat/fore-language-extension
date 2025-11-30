# IModelling.Cumulative

IModelling.Cumulative
-


# IModelling.Cumulative


## Синтаксис


Cumulative(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


           [Method:
 [MsCumulativeMethodType](../../Enums/MsCumulativeMethodType.htm)
 = 5;]


           [Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm) = Null;]


           [IgnoreMissing:
 Boolean = False;]


           [Frequency:
 [MsFrequency](../../Enums/MsFrequency.htm) = 0;]


           [Offset:
 Integer = 0;]): Variant;


## Параметры


Input. Моделируемая переменная;


Method. Метод накопления;


Period. Период, на котором
 рассчитывается метод;


IgnoreMissing. Признак того,
 что пустые значения будут игнорироваться;


Frequency. Календарная динамика,
 в рамках которой рассчитывается метод;


Offset. Смещение последней
 точки ряда, до которой считается накопление.


## Описание


Метод Cumulative
 осуществляет преобразование переменной с применением указанного метода
 накопления.


## Комментарии


Особенности задания параметров:


	- Period. Если
	 параметр принимает значение Null,
	 то метод рассчитывается на всём временном периоде;


	- IgnoreMissing. Возможные
	 значения параметра:


		- True. Расчет ведется
		 без учета пустых значений;


		- False. Расчет ведется
		 с учетом пустых значений;


	- Frequency. Если параметр
	 имеет значение:


		- [MsFrequency.Undefined](../../Enums/MsFrequency.htm).
		 Накопление выполняется с начала ряда;


		- [MsFrequency.Annual](../../Enums/MsFrequency.htm).
		 Поведение метода Cumulative
		 аналогично поведению метода [IModelling.CumulativeYTD](IModelling.CumulativeYTD.htm).


Для корректного расчёта динамика, указанная
 в параметре Frequency, должна
 быть больше динамики моделируемой переменной;


	- Offset. Значение параметра
	 указывается в динамике моделируемой переменной.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы один фактор.


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

    Expr.AsString := "Cumulative(" + TermInfo.TermInnerText + ", MsCumulativeMethodType.Max, SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), True)";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять преобразование
 переменной с применением метода накопления «Максимум»
 без учета пропущенных значений на периоде с 2000 по 2015 год.


## Пример использования в выражениях


Выражение 1:


Cumulative({Brazil|BCA[t]},MsCumulativeMethodType.Average,
 SetPeriod("01.01.2000", "01.01.2015"))


Результат: для показателя «Brazil|BCA»
 будет рассчитано накопленное среднее на периоде с 2000 по 2015 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Cumulative(X1,MsCumulativeMethodType.Sum)


Результат: для фактора «X1»
 будет рассчитана накопленная сумма на всем временном периоде.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Методы
 накопления](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_CumulativeMinimum.htm) | Контейнер
 моделирования: [Спецификация
 модели «Методы накопления»](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Cumulative.htm),
 [Редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
