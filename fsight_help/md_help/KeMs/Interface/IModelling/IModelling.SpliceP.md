# IModelling.SpliceP

IModelling.SpliceP
-


# IModelling.SpliceP


## Синтаксис


SpliceP(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);

       SpliceSeries: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


        ComparatorBaseSeries:
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


        ComparatorSpliceSeries:
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


        [Direction:
 [MsSpliceDirection](../../Enums/MsSpliceDirection.htm) = 0]):
 Variant;


## Параметры


Input. Входная переменная;


SpliceSeries. Совмещаемая переменная;


ComparatorBaseSeries. Базовая
 переменная для блока сравнения;


ComparatorSpliceSeries. Совмещенная
 переменная для блока сравнения;


Direction. Направление совмещения.


## Описание


Метод SpliceP
 осуществляет преобразование переменной на основе совмещенных переменных.


## Комментарии


Параметр Direction является
 необязательным для Fore и имеет значение по умолчанию: MsSpliceDirection.Both.


Метод выполняет процентное сращивание. Преобразование выполняется по
 следующей формуле: SpliceSeries / ComparatorSpliceSeries
 * ComparatorBaseSeries.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая четыре входные переменные.


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

	    Inp_1, Inp_2, Inp_3, Inp_4: String;

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

	    // Запоминаем настройки
	 расчета модели для точек первой входной переменной

	    Inp_1 := TermInfo.TermInnerText;

	    // Получаем вторую входную переменную

	    TransVar := Transf.Inputs.Item(1);

	    Slice := TransVar.Slices.Item(0);

	    TermInfo := Transf.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем режим передачи переменной в расчет

	    TermInfo.Type := MsFormulaTermType.Pointwise;

	    // Запоминаем настройки
	 расчета модели для точек второй входной переменной

	    Inp_2 := TermInfo.TermInnerText;

	    // Получаем третью входную переменную

	    TransVar := Transf.Inputs.Item(2);

	    Slice := TransVar.Slices.Item(0);

	    TermInfo := Transf.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем режим передачи переменной в расчет

	    TermInfo.Type := MsFormulaTermType.Pointwise;

	    // Запоминаем настройки
	 расчета модели для точек третьей входной переменной

	    Inp_3 := TermInfo.TermInnerText;

	    // Получаем четвертую
	 входную переменную

	    TransVar := Transf.Inputs.Item(3);

	    Slice := TransVar.Slices.Item(0);

	    TermInfo := Transf.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем режим передачи переменной в расчет

	    TermInfo.Type := MsFormulaTermType.Pointwise;

	    // Запоминаем настройки
	 расчета модели для точек четвертой входной переменной

	    Inp_4 := TermInfo.TermInnerText;


	    // Получаем выражение расчета модели

	    Expr := Determ.Expression;

	    Expr.References := "Ms";

	    // Задаем выражение расчета модели

	    Expr.AsString := "SpliceP(" + Inp_1 + ", " + Inp_2 + ",
	 " + Inp_3 + ", "
	 + Inp_4 + ")";

	    // Проверяем корректность выражения

	    If Expr.Valid

	        // Если выражение задано корректно, то сохраняем модель

	        Then ModelObj.Save;

	        // Если выражение некорректное, то выводим сообщение в окно консоли

	        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserProc;


В результате выполнения примера модель будет выполнять преобразование
 первой входной переменной на основе совмещенных переменных.


## Пример использования в выражениях


Выражение 1:


SpliceP({Japan|TX},{Japan|TM},{Japan|NX},{Japan|NM},MsSpliceDirection.Both)


Результат: предположим, что показатель «Japan|TX»
 содержит данные с января 1960 года по июль 2005 года, а «Japan|NX»
 и «Japan|NM» - с февраля 1940
 года по декабрь 2006 года. SpliceP
 вычислит отношение показателей «Japan|NX»
 и «Japan|NM» с февраля 1940 года
 по декабрь 1959 года и с августа 2005 по декабрь 2006 года. Затем применит
 данное отношение к показателю «Japan|TX»,
 используя «Japan|TM» как знаменатель.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


SpliceP(X1,X2,X3,X4,MsSpliceDirection.Forward)


Результат: предположим, что фактор «X1»
 содержит данные с января 1960 года по июль 2005 года, а «X3»
 и «X4» - с февраля 2003 года
 по декабрь 2006 года. SpliceP
 вычислит отношение факторов «X3»
 и «X4» с февраля 2003 года по
 декабрь 2006 года. Затем применит данное отношение рассчитает значения
 фактора «X1», используя «X2» как знаменатель.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Совмещение
 рядов](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_Overlapping.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
