# IVZDataVisualizer.UseSelectOnRightClick

IVZDataVisualizer.UseSelectOnRightClick
-


# IVZDataVisualizer.UseSelectOnRightClick


## Синтаксис


UseSelectOnRightClick: Boolean;


## Описание


Свойство UseSelectOnRightClick
 определяет, нужно ли выделять элементы по щелчку правой кнопки мыши.


## Комментарии


Допустимые значения:


	- True. По щелчку правой
	 кнопки мыши нужно выделять элементы;


	- False. По щелчку правой
	 кнопки мыши элементы выделяться не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	Begin

	    Metabase := MetabaseClass.Active;

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Признак возможности выделения элементов правой кнопкой мыши

	    BubbleTree.UseSelectOnRightClick := True;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для элементов пузырькового дерева установлена
 возможность выделения по щелчку правой кнопки мыши.


См. также:


[IVZDataVisualizer](IVZDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
