# IVZMultiplyDataSource.ID

IVZMultiplyDataSource.ID
-


# IVZMultiplyDataSource.ID


## Синтаксис


ID: String;


## Описание


Свойство ID определяет идентификатор
 источника данных визуализатора.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP.


Добавьте ссылки на системные сборки Express, Metabase и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    DataSource: IVZMultiplyDataSource;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим источник данных визуализатора

	    DataSource := BubbleTree.ColorVisual.ColorMapping.DataSource;

	    // Установим наименование источника данных

	    DataSource.Title := "Источник данных визуализатора";

	    // Выведем информацию об источнике данных

	    Debug.WriteLine("Индекс источника данных: " + DataSource.ID);

	    Debug.WriteLine("Заголовок источника данных: " + DataSource.Title);

	    Debug.WriteLine("Максимальная вместимость измерений: " +

	        DataSource.MaxTimelineIndex.ToString);

	End Sub UserProc;


В результате выполнения примера в консоли среды разработки были выведены
 индекс, заголовок и максимальная вместимость измерений в источнике данных,
 полученном из настроек сопоставления данных пузырькового дерева цветам
 заливки его дочерних элементов:


Индекс источника данных: DataSource2


Заголовок источника данных: Источник данных визуализатора


Максимальная вместимость измерений: 2


См. также:


[IVZMultiplyDataSource](IVZMultiplyDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
