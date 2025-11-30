# IMDCalculationDatasetInstance.DimensionSet

IMDCalculationDatasetInstance.DimensionSet
-


# IMDCalculationDatasetInstance.DimensionSet


## Синтаксис


DimensionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство DimensionSet возвращает
 набор измерений отстроенного источника/приёмника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта с идентификатором MDCALC.


			Sub UserProc;

Var

    MB: IMetabase;

    Calc: IMDCalculation;

    CalcInst: IMDCalculationInstance;

    Apply: ICubeSelectionControlApply;

    Sel: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    Calc := MB.ItemById("MDCALC").Bind As IMDCalculation;

    CalcInst := (Calc As IMetabaseObject).Open(Null) As IMDCalculationInstance;

    Apply := CalcInst.CreateApply(CalcInst.Destination);

    Apply.SourceSelection := CalcInst.Sources.Item(0).DimensionSet;

    Debug.WriteLine("---Source---");

    For Each Sel In Apply.SourceSelection Do

        Debug.WriteLine(Sel.Dimension.Name);

    End For;

    CalcInst.Apply(Apply);

    Debug.WriteLine("---Result---");

    For Each Sel In Apply.ResultSelection Do

        Debug.WriteLine(Sel.Dimension.Name);

    End For;

End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий управление
 параметрами многомерного расчёта через отметку. Данный объект будет выполнен.
 На экран будет выведен исходный список измерений и результирующий список
 измерений.


См. также:


[IMDCalculationDatasetInstance](IMDCalculationDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
