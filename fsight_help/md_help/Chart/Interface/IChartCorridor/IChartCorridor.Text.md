# IChartCorridor.Text

IChartCorridor.Text
-


# IChartCorridor.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет наименование
 коридора.


## Комментарии


Под наименованием коридора понимается текст, с которым коридор будет
 отображаться во внутренней или внешней легендах.


Свойство сохраняется вместе с диаграммой.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Rep_1», на листе которого расположена диаграмма. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Metabase, Drawing.


			Sub macro;

Var

    mb:Imetabase;

    report:iprxreport;

    chart:Ichart;

    corridors:IChartCorridors;

    corridor:IChartCorridor;

    index:integer;

Begin

    mb:= MetabaseClass.Active;

    report:= mb.ItemById("Rep_1").Edit As IPrxReport;

    chart:= (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    corridors:= chart.Corridors;

    index:=corridors.Add(0, 2);

    corridor:= corridors.Item(index);

    corridor.Color:= GxColor.FromKnownColor(GxKnownColor.Coral);

    corridor.Text:= "Коридор между первым и третьим рядами";

    corridor.DisplayInLegend:= True;

    (report As IMetabaseObject).Save;

End Sub macro;


После выполнения примера на диаграмму отчета будет добавлен коридор
 между первым и третьим рядами, и будет включено отображение коридора в
 легенде с заданным в свойстве Text наименованием.


См. также:


[IChartCorridor](IChartCorridor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
