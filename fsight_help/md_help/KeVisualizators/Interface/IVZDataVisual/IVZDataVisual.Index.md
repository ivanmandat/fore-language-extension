# IVZDataVisual.Index

IVZDataVisual.Index
-


# IVZDataVisual.Index


## Синтаксис


Index: Integer;


## Описание


Свойство Index устанавливает
 индекс отображения данных.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    DataVisual: IVZDataVisual;

	    DataMappingName: String;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим визуализатор цвета

	    DataVisual := BubbleTree.ColorVisual;

	    // Установим индекс

	    DataVisual.Index := 1;

	    // Установим наименование сопоставления данных

	    DataMappingName := "ColorMapping";

	End Sub UserProc;


После выполнения примера будет изменён индекс визуализатора цвета и
 установлено новое наименование сопоставления данных.


См. также:


[IVZDataVisual](IVZDataVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
