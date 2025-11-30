# IPrxControl.Dimension

IPrxControl.Dimension
-


# IPrxControl.Dimension


## Синтаксис


Dimension: [IPrxSliceDimension](../IPrxSliceDimension/IPrxSliceDimension.htm);


## Описание


Свойство Dimension определяет
 управляемое измерение.


## Комментарии


Свойство актуально только при работе с [областью
 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm#areadata_create). Для работы с областью данных используйте свойства
 и методы интерфейса [IPrxDataIsland](../IPrxDataIsland/IPrxDataIsland.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «DATA_AREA».


Добавьте ссылки на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Contrls: IPrxControls;

    Contrl: IPrxControl;

    Dimens: IPrxSliceDimension;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("DATA_AREA").Bind As IPrxReport;

    Contrls := Report.Controls;

    Contrl := Contrls.Item(0);

    Dimens := Contrl.Dimension;

    s := Dimens.Name;

    Debug.WriteLine(s);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 управляемого измерения.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
