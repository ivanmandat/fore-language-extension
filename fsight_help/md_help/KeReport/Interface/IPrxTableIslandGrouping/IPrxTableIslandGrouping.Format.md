# IPrxTableIslandGrouping.Format

IPrxTableIslandGrouping.Format
-


# IPrxTableIslandGrouping.Format


## Синтаксис


Format: [IPrxTableIslandFormat](../IPrxTableIslandFormat/IPrxTableIslandFormat.htm);


## Описание


Свойство Format определяет параметры
 оформления группы реляционной области данных.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Grs: IPrxTableIslandGroupings;

    Gr: IPrxTableIslandGrouping;

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

    Grs := TI.Groupings;

    Gr := Grs.Item(0);

    LayFormat := Gr.Format;

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


После выполнения примера для группы реляционной области будет определено
 условное форматирование: стиль оформления - двухцветный градиент.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
