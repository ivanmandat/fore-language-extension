# IMsMethod.ObservationsCount

IMsMethod.ObservationsCount
-


# IMsMethod.ObservationsCount


## Синтаксис


ObservationsCount(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Integer;


## Параметры


Calculation. Параметры расчета
 модели;


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство ObservationsCount возвращает
 число наблюдений модели.


## Комментарии


Общее число наблюдений определяется периодом идентификации модели. Для
 его настройки используется интерфейс [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm).


ObservationsCount учитывает
 не только период идентификации, но и лаг, порядок авторегрессии, преобразования
 модели.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере присутствует
 модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Method: IMsMethod;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsModelCalculation;

    ObsCount: Integer;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("MODEL", MB.ItemById("CONT_MODEL").Key).Bind As IMsModel;

    Transform := Model.Transform;

    VarTrans := Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Transform.Transform(Selector);

    Method := Formula.Method;

    Coord := Transform.CreateCoord(VarTrans);

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2005, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2006, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    ObsCount := Method.ObservationsCount(Calc As IMsMethodCalculation, Coord);

    Debug.WriteLine("Число наблюдений: " + ObsCount.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено число наблюдений
 модели на заданном периоде идентификации.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
