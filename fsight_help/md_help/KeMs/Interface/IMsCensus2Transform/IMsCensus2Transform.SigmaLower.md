# IMsCensus2Transform.SigmaLower

IMsCensus2Transform.SigmaLower
-


# IMsCensus2Transform.SigmaLower


## Синтаксис


		SigmaLower: Double;


## Описание


Свойство SigmaLower определяет
 нижнюю границу сигма.


## Комментарии


Большинство реальных временных рядов содержит выбросы. Они могут исказить
 оценки сезонности и тренда. Метод [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)
 даёт возможность уменьшить влияние выбросов, исключив из рассмотрения
 значения, выходящие за определённый диапазон, либо преобразовав такие
 значения. Ширина диапазона задаётся нижней и верхней границей сигма. Верхнюю
 границу сигма определяет свойство [IMsCensus2Transform.SigmaUpper](IMsCensus2Transform.SigmaUpper.htm).


Метод X11 поддерживается только в ОС Windows.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS и базы данных временных рядов с идентификатором
 TSDB. В контейнере моделирования должна присутствовать модель с идентификатором
 MODEL_CENSUS2.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Stat.


					Sub
		 UserProc;

		Var

		    MB: IMetabase;

		    ModelCont, RubrDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    TransformVarables: IMsFormulaTransformVariables;

		    Stub: IVariableStub;

		    TransVar: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    CENS: IMsCensus2Transform;

		    Expl: IMsFormulaTerm;

		    Av, W: Array Of
		 Double;

		    Info: IMsFormulaTermInfo;

		Begin

		    // Получаем текущий
		 репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер
		 моделирования

		    ModelCont := MB.ItemById("MS");

		    // Получаем модель

		    Model := MB.ItemByIdNamespace("MODEL_CENSUS2", ModelCont.Key).Edit
		 As IMsModel;

		    // Получаем объект
		 для настройки параметров модели

		    Transform := Model.Transform;

		    // Получаем объект
		 для работы с моделируемой переменной

		    TransformVarables := Transform.Outputs;

		    // Получаем базу
		 данных временных рядов (БДВР)

		    RubrDescr := Mb.ItemById("TSDB");

		    // Приводим полученную
		 БДВР к абстрактному источнику данных

		    Stub := RubrDescr.Bind As
		 IVariableStub;

		    // Используем БДВР
		 в качестве источника данных моделируемой переменной

		    TransVar := TransformVarables.Add(Stub);

		    // Задаем срез моделируемой
		 переменной

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(1);

		    // Получаем настройки
		 модели для среза моделируемой переменной

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    // Задаем календарную
		 динамику расчета

		    Formula.Level := DimCalendarLevel.Month;

		    // Указываем метод
		 расчета: X11

		    Formula.Kind := MsFormulaKind.Census2;

		    // Получаем параметры
		 метода

		    CENS := Formula.Method As
		 IMsCensus2Transform;

		    // Получаем объект
		 для работы с выгружаемыми переменными

		    TransformVarables := Transform.Series;

		    // Очищаем коллекцию
		 выгружаемых переменных

		    TransformVarables.Clear;

		    // Указываем ряд,
		 в который будут выгружаться данные после априорной корректировки

		    TransVar := TransformVarables.Add(Stub);

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(2);

		    Info := Transform.CreateTermInfo;

		    Info.Slice := Slice;

		    CENS.B1Term := Info;

		    // Указываем ряд,
		 в который будет выгружаться сезонная составляющая исходного ряда

		    TransVar := TransformVarables.Add(Stub);

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(3);

		    Info := Transform.CreateTermInfo;

		    Info.Slice := Slice;

		    CENS.D10Term := Info;

		    // Указываем ряд,
		 в который будет выгружаться сезонная корректировка

		    TransVar := TransformVarables.Add(Stub);

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(4);

		    Info := Transform.CreateTermInfo;

		    Info.Slice := Slice;

		    CENS.D11Term := Info;

		    // Указываем ряд,
		 в который будет выгружаться тренд-циклическая компонента ряда

		    TransVar := TransformVarables.Add(Stub);

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(5);

		    Info := Transform.CreateTermInfo;

		    Info.Slice := Slice;

		    CENS.D12Term := Info;

		    // Указываем ряд,
		 в который будет выгружаться нерегулярная компонента ряда

		    TransVar := TransformVarables.Add(Stub);

		    Tree := TransVar.SlicesTree(TransVar);

		    Slice := Tree.CreateSlice(6);

		    Info := Transform.CreateTermInfo;

		    Info.Slice := Slice;

		    CENS.D13Term := Info;

		    // Задаем весовые
		 коэффициенты дней недели

		    W := New
		 Double[7];

		    W[0] := 1.17;

		    W[1] := 1.00;

		    W[2] := 1.12;

		    W[3] := 1.10;

		    W[4] := 0.95;

		    W[5] := 0.98;

		    W[6] := 1.07;

		    CENS.DailyWeights := W;

		    // Выводим наименование
		 моделируемого ряда

		    Expl := CENS.Explained;

		    Debug.WriteLine(Expl.TermToText);

		    // Задаем метод обработки
		 пропусков

		    CENS.MissingData.Method := MissingDataMethod.PrevValue;

		    // Задаем скользящее
		 среднее

		    Av := New
		 Double[12];

		    Av[0] := 0.02; Av[4] := 0.12;Av[8] :=
		 0.01;

		    Av[1] := 0.1; Av[5] := 0.11; Av[9]
		 := 0.7;

		    Av[2] := 0.2; Av[6] := 0.3; Av[10]
		 := 0.4;

		    Av[3] := 0.5; Av[7] := 0.45; Av[11]
		 := 0.3;

		    CENS.MovingAverage := Av;

		    // Задаем вид сезонности

		    CENS.Seasonality := SeasonalityType.Multiplicative;

		    // Задаем нижнюю
		 и верхнюю границы сигма

		    CENS.SigmaLower := 1.5;

		    CENS.SigmaUpper := 2.5;

		    // Задаем тип поправки
		 на рабочие дни

		    CENS.TraidingDaysAdjustment := TraidingDaysAdj.Auto;

		    // Задаем поправку на праздничные дни

		    CENS.HolidayAdj := Census2HolidayAdjType.C2hatEaster;

		    // Используем скользящие интервалы

		    CENS.SlidingSpans := True;

		    // Сохраняем изменения

		    (Model As
		 IMetabaseObject).Save;

		End Sub
		 UserProc;


В результате выполнения примера для модели с идентификатором MODEL_CENSUS2
 будут установлены новые параметры для расчёта метода [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm),
 определены входные и выходные переменные. Модель будет рассчитана, в соответствующие
 переменные будут выгружены данные. В консоль будет выведено наименование
 моделируемого ряда, например:


{Население, млн. человек|Чикаго[t]}


См. также:


[IMsCensus2Transform](IMsCensus2Transform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
