# IMsInterpolateTransform.PatternType

IMsInterpolateTransform.PatternType
-


# IMsInterpolateTransform.PatternType


## Синтаксис


PatternType: [MsPatternType](../../Enums/MsPatternType.htm);


## Описание


Свойство PatternType определяет
 вид шаблона для интерполяции по шаблону.


## Комментарии


Для интерполяции по шаблону необходимо определить образцовый ряд с помощью
 свойства [IMsInterpolateTransform.Specified](IMsInterpolateTransform.Specified.htm).
 Метод интерполяции определяется свойством [IMsInterpolateTransform.MethodType](IMsInterpolateTransform.MethodType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS». В данном контейнере моделирования
 должна присутствовать модель месячной динамики с идентификатором «MODEL_INTERPOLATE»,
 рассчитываемая методом «Интерполяция».
 Также предполагается наличие базы данных временных рядов с идентификатором
 «TSDB», содержащая годовые и месячные динамики.


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

	    Interpolate: IMsInterpolateTransform;

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

	    Model := mb.ItemByIdNamespace("MODEL_INTERPOLATE", MsKey).Edit As IMsModel;

	    // Получаем объект для настройки параметров модели

	    Transform := Model.Transform;

	    // Получаем коллекцию моделируемых переменных

	    TransformVarables := Transform.Outputs;

	    // Получаем первую моделируемую переменную

	    TransformVar := TransformVarables.Item(0);

	    // Создаем параметры расчета моделируемой переменной

	    Coord := Transform.CreateCoord(TransformVar);

	    // Получаем параметры расчета метода «Интерполяция»

	    Interpolate := Transform.FormulaItem(0).Method As IMsInterpolateTransform;

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

	    Interpolate.Input := TermInfo;

	    // Указываем исходную динамику

	    Interpolate.InputLevel := DimCalendarLevel.Year;

	    // Указываем метод обработки пропусков

	    Interpolate.MissingData.Method := MissingDataMethod.LinTrend;

	    // Задаем тип интерполяции: по шаблону

	    Interpolate.MethodType := MsInterpolateType.Pattern;

	    // Задаем тип шаблона

	    Interpolate.PatternType := MsPatternType.Average;

	    // Добавляем в модель фактор, источником данных которого является БДВР

	    TransformVar := Transform.Inputs.Add(Stub);

	    Tree := TransformVar.SlicesTree(TransformVar);

	    Slice := Tree.CreateSlice(3);

	    // Получаем фактор в виде терма

	    TermInfo := Transform.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Указываем добавленный фактор в качестве образцового
	 ряда

	    Interpolate.Specified := TermInfo;

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

	    arr := Interpolate.CalculateSeries(Calcul, Coord).Modelling;

	    // Выводим наименование и данные моделируемой переменной в окно консоли

	    Debug.WriteLine(Interpolate.Result.TermInfo.TermText);

	    For i := 0 To arr.Length - 1 Do

	        Debug.WriteLine(arr[i]);

	    End For;

	    // Сохраняем изменения в модели

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут изменены настройки расчета модели
 «MODEL_INTERPOLATE»: изменена выходная переменная, метод расчета интерполяции
 и пр. Результаты расчета будут выведены в окно консоли.


См. также:


[IMsInterpolateTransform](IMsInterpolateTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
