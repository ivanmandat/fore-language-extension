# IPrxOpenObjectReportParamControl.Param

IPrxOpenObjectReportParamControl.Param
-


# IPrxOpenObjectReportParamControl.Param


## Синтаксис


Param: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Описание


Свойство Param определяет параметр
 текущего объекта, значения которого будут передаваться в параметр открываемого
 объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие двух регламентных
 отчётов с идентификатором REPORT и REPORT_ADD. Отчёты в своей структуры
 имеют параметры.


В файловой системе предполагается наличие картинки для кнопки «D:\Work\Image\btn16x16.png».


Добавьте ссылки на системные сборки: IO, Metabase, Report.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    UserBtn: IPrxUserButton;

    OpenObjAction: IPrxUserButtonActionOpenObject;

    ObjParam: IPrxOpenObjectParam;

    Sheets: Array Of Integer;

Begin

    Mb := MetabaseClass.Active;

    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

    // Создание новой пользовательской кнопки

    UserBtn := Report.UserButtons.AddByType(PrxUserButtonType.OpenObject);

    UserBtn.Name := "Открытие объекта";

    // Настройка пользовательской кнопки

    UserBtn.Icon := New FileStream.Create("d:\Work\Image\btn16x16.png", FileOpenMode.Read, FileShare.DenyNone);

    UserBtn.IconType := "png";

    UserBtn.SmallIcon := False;

    // Настройка действий

    OpenObjAction := UserBtn.Action As IPrxUserButtonActionOpenObject;

    OpenObjAction.ObjectForOpen := Mb.ItemById("REPORT_ADD");

    OpenObjAction.OpenInModal := True;

    Sheets := New Integer[1];

    Sheets[0] := 1;

    OpenObjAction.SheetsForRefresh := Sheets;

    // Настройка привязки параметров

    ObjParam := OpenObjAction.Params.Item(0);

    ObjParam.Type := PrxOpenObjectParamType.ReportParam;

    (ObjParam.Control As IPrxOpenObjectReportParamControl).Param := Report.MetabaseObject.Params.Item(0);

    // Сохранение изменений

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в регламентном отчёте REPORT будет создана пользовательская
 кнопка. Для кнопки будут заданы наименование, изображение, список обновляемых
 листов. В качестве действия пользовательской кнопки будет выбрано открытие
 объекта. В параметр открываемого объекта будет передаваться значение параметра
 текущего отчёта.


См. также:


[IPrxOpenObjectReportParamControl](IPrxOpenObjectReportParamControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
