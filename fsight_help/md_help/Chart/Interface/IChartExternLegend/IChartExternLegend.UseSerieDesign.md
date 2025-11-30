# IChartExternLegend.UseSerieDesign

IChartExternLegend.UseSerieDesign
-


# IChartExternLegend.UseSerieDesign


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
 рядов](UiReport.chm::/Desktop/Diagrams/UiDiagrams_Legend_common.htm)» на вкладке
 «Общее» в окне «Формат
 легенды».


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Chart»,
 «Drawing», «Metabase», «Report» и «Tab». Предполагается наличие отчета
 с идентификатором «OBJ1102» и внешней диаграммы с идентификатором «PrxChart1»
 на активном листе.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    rep: IPrxReport;

	    chartlegend: IChartExternLegend;

	Begin

	    mb := MetabaseClass.Active;

	    rep := mb.ItemById("OBJ1102").Edit As IPrxReport;

	    chartlegend := (rep.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

	    chartlegend.UseSerieDesign := True;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет использовано оформление рядов в легенде
 в соответствии с оформлением рядов на диаграмме.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
