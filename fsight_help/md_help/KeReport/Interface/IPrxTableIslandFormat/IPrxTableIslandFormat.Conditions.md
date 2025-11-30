# IPrxTableIslandFormat.Conditions

IPrxTableIslandFormat.Conditions
-


# IPrxTableIslandFormat.Conditions


## Синтаксис


Conditions : [IPrxFormatConditions](../IPrxFormatConditions/IPrxFormatConditions.htm);


## Описание


Свойство Conditions определяет
 параметры условного форматирования данных.


## Пример


В рассматриваемом примере предполагается существование объекта Report типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Layout: IPrxTableIslandLayout;

    LayFormat: IPrxTableIslandFormat;

    Format: IPrxFormatConditions;

    TabFormat: ITabFormatCondition;

    ValFormat: ITabFormatValues;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("RR").Edit As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    LayFormat := Layout.Format;

    Format := LayFormat.Conditions;

    TabFormat := Format.Add;

    TabFormat.Type := TabConditionType.Values;

    ValFormat := TabFormat.Details As ITabFormatValues;

    //двухцветный градиентдля форматирования ячеек

    ValFormat.Style := TabFormatValuesStyle.TwoColorScale;

    //настройка минимальногозначения

    ValFormat.MinValueType := TabFormatValueType.Lowest;

    ValFormat.MinValueColor := GxColor.FromName("Red");

    //настройка максимальногозначения

    ValFormat.MaxValueType := TabFormatValueType.Highest;

    ValFormat.MaxValueColor := GxColor.FromName("Blue");

    TI.Save;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для реляционной области будет определено условное
 форматирование: стиль оформления - двухцветный градиент.


См. также:


[IPrxTableIslandFormat](IPrxTableIslandFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
