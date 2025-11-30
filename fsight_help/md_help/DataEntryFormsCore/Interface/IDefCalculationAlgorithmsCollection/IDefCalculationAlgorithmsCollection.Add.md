# IDefCalculationAlgorithmsCollection.Add

IDefCalculationAlgorithmsCollection.Add
-


# IDefCalculationAlgorithmsCollection.Add


## Синтаксис


Add(objectKey: Integer; type: [CalcType](../../Enums/CalcType.htm)):
 [IDefCalculationAlgorithm](../IDefCalculationAlgorithm/IDefCalculationAlgorithm.htm);


## Параметры


objectKey. Ключ алгоритма расчёта
 в репозитории.


type. Вариант использования
 алгоритма расчёта в табличной области.


## Описание


Метод Add добавляет алгоритм
 расчёта для использования в табличной области.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки. Также в репозитории должны быть созданы три алгоритма
 расчёта с идентификаторами «ALGO_CALC», «ALGO_CONTROL» и «ALGO_END». В
 «ALGO_CALC» имеется блок расчёта с настроенными формулами. В «ALGO_CONTROL»
 настроен блок контроля. «ALGO_END» может выполнять любые действия. В форме
 ввода создана табличная область. Также для формы ввода создан и настроен
 параметр с идентификатором «P_CALENDAR». Алгоритм с блоком расчёта имеет
 параметр, настройки которого совпадают с настройками параметра формы ввода.
 Также предполагается наличие дополнительной формы ввода с ключом «11403».


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


			Public Sub AddAlgorithm(Report: IPrxReport);

Var

    Mb: IMetabase;

    //Sheet: IPrxSheet;

    DEForm: IDataEntryForm;

    TArea: IDefTableArea;

    Algs: IDefCalculationAlgorithmsCollection;

    Algo: IDefCalculationAlgorithm;

Begin

    Mb := MetabaseClass.Active;

    // Экземпляр текущей формы ввода

    DEForm := New DataEntryForm.CreateByReport(report);

    // Получение табличной области

    TArea := DEForm.inpuTAreas.Item(0) As IDefTableArea;

    DEForm.Parameters.Item(0);

    TArea.UpdateAfterSave := True;

    // Алгоритмы расчёта

    Algs := TArea.CalculationAlgorithms;

    // Добавление алгоритмов расчёта на изменение

    Algo := Algs.Add(Mb.GetObjectKeyById("ALGO_CALC"), CalcType.CalcAfterEdit);

    ConfigureAlgo(Algo);

    Algo := Algs.Add(Mb.GetObjectKeyById("ALGO_CONTROL"), CalcType.CalcAfterEdit);

    ConfigureAlgo(Algo);

    // Добавление алгоритма расчёта на сохранение

    Algs.Add(Mb.GetObjectKeyById("ALGO_END"), CalcType.CalcAfterSave);

    // Просмотр информации о полученной коллекции алгоритмов расчёта

    ShowAlgsInfo(Algs);

    // Применить изменения к форме ввода

    DEForm.inpuTAreas.ApplyAreaToReport(TArea.id);

    DEForm._Dispose;

End Sub AddAlgorithm;


Sub ConfigureAlgo(Algo: IDefCalculationAlgorithm);

Var

    Style: ITabCellStyle;

    Params: IDefCalculationAlgorithmParametersCollection;

    Param: IDefCalculationAlgorithmParameter;

    MapInfo: IDefCalculationAlgorithmMapInfo;

    MapParamInf: IDefCalclulationAlgorithmMapParamInfo;

Begin

    If Algo.HasCalcBlock Then

        Algo.SaveDataOption := True;

        Algo.ExtendLoadSelection := True;

        Algo.CalcPeriod := CalcPeriodMode.AllSelectionFromAlgorithm;

        // Привязка параметров алгоритма расчёта

        Params := Algo.Parameters;

        Param := Params.Item(0);

        Param.Type := CalcParamType.param;

        Param.SelectionMode := CalcParamSchema.selected;

        Param.FormParameterId := "P_CALENDAR";

        // Привязка формы ввода к алгоритму для детализации формул

        MapInfo := Algo.MapInfo.Item(0);

        MapInfo.FormKey := 11403;

        MapParamInf := MapInfo.MapParameters.Item(0);

        MapParamInf.ThisFormParameterId := "P_CALENDAR";

    Elseif Algo.HasValidationBlock Then

        Style := New TabCellStyle.Create;

        Style.Font.Bold := TriState.OnOption;

        Style.Font.Color := GxColor.FromKnownColor(GxKnownColor.Red);

        Algo.ControlStyle := Style;

        Algo.BlockSaveData := True;

    End If;

End Sub ConfigureAlgo;


Sub ShowAlgsInfo(Algs: IDefCalculationAlgorithmsCollection);

Var

    Algo: IDefCalculationAlgorithm;

    i, c: Integer;

Begin

    c := Algs.Count;

    For i := 0 To c - 1 Do

        Algo := Algs.Item(i);

        Debug.WriteLine(Algo.Name + "(Ключ: " + Algo.Key.ToString + ". Уникальный идентификатор: " + Algo.Unical.ToString + ')');

        Debug.Indent;

        Debug.WriteLine("Вариант использования: " + (Algo.Type = CalcType.CalcAfterEdit ? "На изменение" : "На сохранение"));

        Debug.WriteLine("Блок вычисления: " + Algo.HasCalcBlock.ToString + "; Блок контроля: " + Algo.HasValidationBlock.ToString);

        Debug.Unindent;

    End For;

End Sub ShowAlgsInfo;


При выполнении макроса для табличной области будут добавлены и настроены
 три алгоритма расчёта. Для алгоритмов будут заданы настройки работы, связь
 параметров. После этого информация об алгоритмах расчёта будет выведена
 в консоль среды разработки.


См. также:


[IDefCalculationAlgorithmsCollection](IDefCalculationAlgorithmsCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
