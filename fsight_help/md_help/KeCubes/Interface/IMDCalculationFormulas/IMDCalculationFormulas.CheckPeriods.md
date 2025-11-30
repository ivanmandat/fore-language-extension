# IMDCalculationFormulas.CheckPeriods

IMDCalculationFormulas.CheckPeriods
-


# IMDCalculationFormulas.CheckPeriods


## Синтаксис


CheckPeriods;


## Описание


Метод CheckPeriods осуществляет
 проверку на наличие формул с пересекающимися периодами действия.


## Комментарии


Данный метод может использоваться, если осуществляется редактирование
 периодов действия формул напрямую в таблице формул многомерного расчета
 на сервере БД.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1. Для формул включена
 зависимость от времени.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Source: IMDCalculationSourceInstance;

    Dest: IMDCalculationDestinationInstance;

    Slices: IMDCalculationSlicesInstance;

    Formulas: IMDCalculationFormulas;

    DestCoord: IMatrixCoord;

    ElementKey: IMDCalculationFormulaElementKey;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Dest := MDInst.Destination;

    DestCoord := Dest.NewCoord;

    Slices := Dest.Slices;

    For i := 0 To Slices.Count - 1 Do

        DestCoord.Item(i) := 0;

    End For;

    ElementKey := Dest.CoordToKey(DestCoord);

    ElementKey.FactIndex := 0;

    Source := MDInst.Sources.Item(0);

    Slices := Source.Slices;

    Formulas := MDInst.ReadFormulas(ElementKey);

    Try

        Formulas.CheckPeriods;

        Debug.WriteLine("Периоды действия формул корректны");

    Except On Err: Exception Do

        Debug.WriteLine("Ошибка в периодах действия формул. ");

        Debug.WriteLine(Err.Message);

    End Try;

End Sub UserProc;


После выполнения примера будет осуществлена проверка на наличие пересекающихся
 периодов действия формул по указанной координате. В случае наличия пересекающихся
 периодов - генерируется исключительная ситуация, текст ошибки выводится
 в консоль среды разработки.


См. также:


[IMDCalculationFormulas](IMDCalculationFormulas.htm)
 | [IMDCalculationFormula.ChangePeriod](../IMDCalculationFormula/IMDCalculationFormula.ChangePeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
