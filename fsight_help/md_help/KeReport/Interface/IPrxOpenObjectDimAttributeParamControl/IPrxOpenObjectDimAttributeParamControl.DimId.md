# IPrxOpenObjectDimAttributeParamControl.DimId

IPrxOpenObjectDimAttributeParamControl.DimId
-


# IPrxOpenObjectDimAttributeParamControl.DimId


## Синтаксис


DimId: String;


## Описание


Свойство DimId определяет идентификатор
 измерения, из которого будут браться значения атрибутов.


## Комментарии


В качестве значения свойства необходимо указать измерений какой-либо
 области данных, которые имеются в текущем регламентном отчёте.


## Пример


Для выполнения примера в репозитории предполагается наличие двух регламентных
 отчётов с идентификатором REPORT и REPORT_ADD. В отчёте REPORT создана
 область данных, источник которой в своей структуре имеет измерение с идентификатором
 COUNTRY.


В файловой системе предполагается наличие картинки для кнопки «D:\Work\Image\btn16x16.png».


Добавьте ссылки на системные сборки: IO, Metabase, Report.


			Sub UserProc;

Var

    Mb: IMetabase;

    Report: IPrxReport;

    UserBtn: IPrxUserButton;

    OpenObjAction: IPrxUserButtonActionOpenObject;

    ObjParam: IPrxOpenObjectParam;

    ParamControl: IPrxOpenObjectDimAttributeParamControl;

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

    ObjParam.Type := PrxOpenObjectParamType.DimensionAttribute;

    ParamControl := (ObjParam.Control As IPrxOpenObjectDimAttributeParamControl);

    ParamControl.DimId := "COUNTRY";

    ParamControl.Attribute := "KEY";

    ParamControl.SelectionType := PrxOpenObjectSelectionType.First;

    // Сохранение изменений

    (Report As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в регламентном отчёте REPORT будет создана пользовательская
 кнопка. Для кнопки будут заданы наименование, изображение, список обновляемых
 листов. В качестве действия пользовательской кнопки будет выбрано открытие
 объекта. В параметр открываемого объекта будет передаваться ключ первого
 элемента, выделенного в измерении COUNTRY области данных.


См. также:


[IPrxOpenObjectDimAttributeParamControl](IPrxOpenObjectDimAttributeParamControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
