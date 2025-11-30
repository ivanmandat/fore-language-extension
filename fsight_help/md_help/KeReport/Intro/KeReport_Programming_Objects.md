# Настройка объектов отчета

Настройка объектов отчета
-


# Настройка объектов отчета


Рассмотрим пример добавления на лист регламентного отчета диаграммы,
 источником данных которой является добавленный ранее [срез
 данных](KeReport_Programming_DataArea.htm).


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REPORT_INTRO» и стандартного куба с идентификатором
 «CUBE_SEP», используемого в качестве [источника
 данных](KeReport_Programming_Source.htm) отчета. Для источника данных регламентного отчета определен
 [срез](KeReport_Programming_DataArea.htm) с идентификатором
 «Slice».


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase,
 Report, Tab, Chart, Drawing.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    Tab: ITabSheet;

    Chart: IPrxChart;

    ClassId: String;

    Placement: IGxRectF;

    Source: IPrxDataSource;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REPORT_INTRO").Edit;

    Report := MObj As IPrxReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    ClassId:="PrxChart";

    Placement:=New GxRectF.Create(50,50,200,200);

    Chart := (Tab.Objects.Add(ClassId,Placement)) As IPrxChart;

    Chart.SourceType := PrxChartSourceType.Slice;

    Source := Report.DataSources.FindById("CUBE_SEP");

    Chart.Slice := Source.Slices.FindByName("Slice");

    (Chart As IChart).Type := ChartType.Circles;

    MObj.Save;

End Sub UserProc;


В результате выполнения примера на лист регламентного отчета будет добавлена
 диаграмма, в качестве источника данных которой выбран срез указанного
 источника данных. Для диаграммы определено ее расположение на листе и
 установлен тип «Круговая диаграмма».


См. также:


[Общие
 принципы программирования с использованием сборки Report](KeReport_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
