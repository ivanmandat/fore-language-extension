# IPrxTableIslandLayout.Format

IPrxTableIslandLayout.Format
-


# IPrxTableIslandLayout.Format


## Синтаксис


Format : [IPrxTableIslandFormat](../IPrxTableIslandFormat/IPrxTableIslandFormat.htm);


## Описание


Свойство Format определяет параметры
 оформления реляционной области.


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

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

    MObj := MB.ItemById("REPORT").Edit;

    Report := MObj As IPrxReport;

    TabIs := Report.TableIslands;

    TI := TabIs.Item(0);

    TI := TI.Edit;

    Layout := TI.Layout;

    LayFormat := Layout.Format;

    Format := LayFormat.Conditions;

    TabFormat := Format.Add;

    TabFormat.Type := TabConditionType.Values;

    ValFormat := TabFormat.Details As ITabFormatValues;

    //двухцветный градиент для форматирования ячеек

    ValFormat.Style := TabFormatValuesStyle.TwoColorScale;

    //настройка минимального значения

    ValFormat.MinValueType := TabFormatValueType.Lowest;

    ValFormat.MinValueColor := GxColor.FromName("Red");

    //настройка максимального значения

    ValFormat.MaxValueType := TabFormatValueType.Highest;

    ValFormat.MaxValueColor := GxColor.FromName("Blue");

    TI.Save;

    MObj.Save;

End Sub UserProc;


После выполнения примера для реляционной области будет определено условное
 форматирование: стиль оформления - двухцветный градиент.


См. также:


[IPrxTableIslandLayout](IPrxTableIslandLayout.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
