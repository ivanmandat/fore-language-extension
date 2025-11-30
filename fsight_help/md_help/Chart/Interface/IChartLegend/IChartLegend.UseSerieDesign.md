# IChartLegend.UseSerieDesign

IChartLegend.UseSerieDesign
-


# IChartLegend.UseSerieDesign


## Синтаксис


UseSerieDesign: Boolean;


## Описание


Свойство UseSerieDesign определяет
 признак использования оформления рядов внутренней легенды в соответствии
 с оформлением рядов на диаграмме.


## Комментарии


Свойство актуально только для линейных и точечных рядов. При использовании
 свойства из языка Fore с другими типами рядов, в оформлении диаграммы
 изменений не произойдет.


По умолчанию свойство имеет значение False.
 При этом оформление рядов в легенде и на диаграмме могут отличаться.


В интерфейсе свойство устанавливается с помощью флажка «[Использовать оформления
 рядов](UiDiagrams.chm::/Tuning_format/Format_Legend/UiDiagrams_FormatLegend_common.htm%2c)» на вкладке
 «Общее» в окне «Формат
 легенды».


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Chart»,
 «Drawing», «Metabase», «Report» и «Tab». Предполагается наличие отчета
 с идентификатором «OBJ_1» и диаграммы с идентификатором «PrxChart1» на
 активном листе.


			Sub UserProc;

Var

    mb: IMetabase;

    rep: IPrxReport;

    chartlegend: IChartLegend;

    object: Ichart;

    SSize: IGxSizeF;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("OBJ_1").Edit As IPrxReport;

    object := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Object("PrxChart1") As Ichart;

    chartlegend := object.Legend;

    chartlegend.UseSerieDesign := True;

    SSize := New GxSizeF.Create(3,3);

    chartlegend.SymbolSize := SSize;

    (rep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в легенде:


	- будет задано оформление рядов в соответствии с оформлением рядов
	 на диаграмме;


	- будет установлен размер значков 3 на 3 миллиметра.


См. также:


[IChartLegend](IChartLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
