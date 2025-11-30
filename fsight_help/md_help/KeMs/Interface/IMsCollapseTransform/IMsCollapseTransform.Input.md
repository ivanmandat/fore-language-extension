# IMsCollapseTransform.Input

IMsCollapseTransform.Input
-


# IMsCollapseTransform.Input


## Синтаксис


		Input: [IMsFormulaTermInfo](../IMsFormulaTermInfo/IMsFormulaTermInfo.htm);


## Описание


Свойство Input определяет терм,
 соответствующий исходной переменной.


## Комментарии


Для исходной динамики используйте свойство [IMsCollapseTransform.InputLevel](IMsCollapseTransform.InputLevel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере моделирования
 должна присутствовать модель с идентификатором MODEL_COLLAPSE_VECT, рассчитываемая
 методом «Коллапс (векторный расчет)». Также предполагается наличие базы
 данных временных рядов с идентификатором TSDB, содержащая годовые и месячные
 динамики.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Stat.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Model: IMsModel;

		    Stub: IVariableStub;

		    Tree: IMsFormulaTransformSlicesTree;

		    RubrDescr: IMetabaseObjectDescriptor;

		    Transform: IMsFormulaTransform;

		    TransformVarables: IMsFormulaTransformVariables;

		    TransformVar: IMsFormulaTransformVariable;

		    Coord: IMsFormulaTransformCoord;

		    Slice: IMsFormulaTransformSlice;

		    Collapse: IMsCollapseTransform;

		    TermInfo: IMsFormulaTermInfo;

		    Calcul: IMsMethodCalculation;

		    arr: Array Of double;

		    i: Integer;

		    Period: IMsModelPeriod;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_COLLAPSE_VECT", MsKey).Edit As IMsModel;

		    // Получаем объект для настройки параметров модели

		    Transform := Model.Transform;

		    // Получаем коллекцию моделируемых переменных

		    TransformVarables := Transform.Outputs;

		    // Получаем первую моделируемую переменную

		    TransformVar := TransformVarables.Item(0);

		    // Создаем параметры расчета моделируемой переменной

		    Coord := Transform.CreateCoord(TransformVar);

		    // Получаем параметры расчета метода «Коллапс»

		    Collapse := Transform.FormulaItem(0).Method As IMsCollapseTransform;

		    // Получаем базу данных временных рядов (БДВР)

		    RubrDescr := Mb.ItemById("TSDB");

		    // Приводим полученную БДВР к абстрактному источнику данных

		    Stub := RubrDescr.Bind As IVariableStub;

		    // Добавляем в модель фактор, источником данных которого является БДВР

		    TransformVar := Transform.Inputs.Add(Stub);

		    Tree := TransformVar.SlicesTree(TransformVar);

		    Slice := Tree.CreateSlice(2);

		    // Получаем фактор в виде терма

		    TermInfo := Transform.CreateTermInfo;

		    TermInfo.Slice := Slice;

		    // Указываем полученный терм в качестве исходной переменной

		    Collapse.Input := TermInfo;

		    // Указываем исходную динамику

		    Collapse.InputLevel := DimCalendarLevel.Month;

		    // Задаем тип коллапса

		    Collapse.MethodType := MsCollapseType.Average;

		    // Указываем метод обработки пропусков

		    Collapse.MissingData.Method := MissingDataMethod.LinTrend;

		    // Задаем количество пропущенных значений в моделируемом ряде,

		    // которое можно считать приемлемыми для выполнения агрегации

		    Collapse.Tolerance := 5;

		    // Создаем объект с параметрами расчета модели

		    Calcul := Transform.CreateCalculation;

		    // Задаем периоды расчета

		    Period := Model.Transform.Period;

		    Calcul.Period.IdentificationStartDate := Period.IdentificationStartDate;

		    Calcul.Period.IdentificationEndDate := Period.IdentificationEndDate;

		    Calcul.Period.ForecastStartDate := Period.ForecastStartDate;

		    Calcul.Period.ForecastEndDate := Period.ForecastEndDate;

		    Calcul.CurrentPoint := Period.IdentificationStartDate;

		    // Получаем данные моделируемой переменной

		    arr := Collapse.CalculateSeries(Calcul, Coord).Modelling;

		    // Выводим наименование и данные моделируемой переменной в окно консоли

		    Debug.WriteLine(Collapse.Result.TermInfo.TermText);

		    For i := 0 To arr.Length - 1 Do

		        Debug.WriteLine(arr[i]);

		    End For;

		    // Сохраняем изменения в модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены настройки расчёта модели
 MODEL_COLLAPSE_VECT: изменена выходная переменная, метод расчёта коллапса
 и прочее. Результаты расчёта будут выведены в окно консоли.


См. также:


[IMsCollapseTransform](IMsCollapseTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
