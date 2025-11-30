# IEaxGrid.IndicatorSeparator

IEaxGrid.IndicatorSeparator
-


# IEaxGrid.IndicatorSeparator


## Синтаксис


IndicatorSeparator(Type: [EaxSeparatorType](../../Enums/EaxSeparatorType.htm)):
 String;


## Параметры


Type. Тип разделителя.


## Описание


Свойство IndicatorSeparator
 определяет символ-разделитель между атрибутами справочника и значениями
 ячеек.


## Комментарии


Свойство актуально, если задан тип метрики в свойстве [IEaxObject.IndicatorSelection](../IEaxObject/IEaxObject.IndicatorSelection.htm).


Разделителем может служить любой одиночный символ. Если заданный пользователем
 разделитель не удовлетворяет условию, то используется стандартный разделитель
 «,».


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_IEAXGRID, который содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    IndSel: IDimSelection;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS_IEAXGRID").Edit As IEaxAnalyzer;

	    // Получим таблицу

	    Grid := Analyzer.DataArea.Views.Item(0) As IEaxGrid;

	    // Получим отметку и изменим тип метрики

	    IndSel := Grid.IndicatorSelection(EaxGridIndicatorType.ValueSuffix);

	    // Выберем все элементы отметки

	    Indsel.SelectAll;

	    // Изменим символ-разделитель

	    Grid.IndicatorSeparator(EaxSeparatorType.BeforeSuffix) := "|";

	    // Сохраним изменения

	    (Analyzer As ImetabaseObject).Save;

	End Sub UserProc;


После выполнения примера перед суффиксом ячейки установится новый вид
 разделителя «|»


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
