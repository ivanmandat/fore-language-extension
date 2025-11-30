# IMsMethod.StatMethod

IMsMethod.StatMethod
-


# IMsMethod.StatMethod


## Синтаксис


StatMethod(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [IStatMethod](StatLib.chm::/Interface/IStatMethod/IStatMethod.htm);


## Параметры


Coord. Срез переменной, для
 которого необходимо получить информацию.


## Описание


Свойство StatMethod возвращает
 информацию о статистическом методе, используемом для расчета модели.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором MODEL_SPACE. В контейнере содержится модель с идентификатором
 MODEL_BPF, использующая для расчета фильтр Бакстера-Кинга.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    TransVar: IMsFormulaTransformVariable;

    Bandpass: IMsBandpassFilterTransform;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsMethodCalculation;

    Period, MPeriod: IMsModelPeriod;

    Res: IMsModelCalculationResult;

    StatBandpass: ISmBandpassFilter;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("MODEL_BPF", MB.ItemById("MODEL_SPACE").Key).Bind As IMsModel;

    Trans := Model.Transform;

    TransVar := Trans.Outputs.Item(0);

    Bandpass := Trans.FormulaItem(0).Method As IMsBandpassFilterTransform;

    Coord := Trans.CreateCoord(TransVar);

    Calc := Trans.CreateCalculation;

    MPeriod := Model.Transform.Period;

    Period := Calc.Period;

    Period.IdentificationStartDate := MPeriod.IdentificationStartDate;

    Period.IdentificationEndDate := MPeriod.IdentificationEndDate;

    Period.ForecastStartDate := MPeriod.ForecastStartDate;

    Period.ForecastEndDate := MPeriod.ForecastEndDate;

    Res := Bandpass.Execute(Calc, Coord);

    StatBandpass := Res.StatMethod As ISmBandpassFilter;

    Debug.WriteLine(StatBandpass.DisplayName);

    Debug.WriteLine(StatBandpass.Name);

    Debug.WriteLine(StatBandpass.Errors);

End Sub UserProc;


В результате выполнения примера будет осуществлен расчет модели. После
 расчета будет получена информация о статистическом методе, используемом
 для расчета. Наименование, внутреннее наименование и информация о возможных
 ошибках расчета будет выведена в консоль среды разработки.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
