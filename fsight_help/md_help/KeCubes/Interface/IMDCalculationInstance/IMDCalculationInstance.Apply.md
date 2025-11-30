# IMDCalculationInstance.Apply

IMDCalculationInstance.Apply
-


# IMDCalculationInstance.Apply


## Синтаксис


Apply(App: [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm)):
 Boolean;


## Параметры


App. Отметка в измерениях.


## Описание


Метод Apply применяет параметры
 расчёта с учётом отметки в измерениях.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта с идентификатором MDCALC.


			Sub UserProc;

Var

    MB: IMetabase;

    Calc: IMDCalculation;

    CalcInst: IMDCalculationInstance;

    Apply: ICubeSelectionControlApply;

    SelS: IDimSelectionSet;

    Sel: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    Calc := MB.ItemById("MDCALC").Bind As IMDCalculation;

    CalcInst := (Calc As IMetabaseObject).Open(Null) As IMDCalculationInstance;

    Apply := CalcInst.CreateApply(CalcInst.Destination);

    SelS := CalcInst.Sources.Item(0).DimensionSet;

    Debug.WriteLine("---Source---");

    Apply.SourceSelection := SelS;

    For Each Sel In SelS Do

        Debug.WriteLine(Sel.Dimension.Name);

    End For;

    CalcInst.Apply(Apply);

    Debug.WriteLine("---Result---");

    SelS := Apply.ResultSelection;

    For Each Sel In SelS Do

        Debug.WriteLine(Sel.Dimension.Name);

    End For;

End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий управление
 параметрами многомерного расчёта через отметку. Данный объект будет выполнен.
 На экран будет выведен исходный список измерений, и результирующий список
 измерений.


См. также:


[IMDCalculationInstance.Apply](IMDCalculationInstance.Apply.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
