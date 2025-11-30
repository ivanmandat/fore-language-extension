# IVZLegends.Clear

IVZLegends.Clear
-


# IVZLegends.Clear


## Синтаксис


Clear;


## Описание


Метод Clear полностью очищает
 коллекцию легенд визуализатора.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators, а указанная
 далее процедура должна вызываться из точки входа Main.


До выполнения примера пузырьковое дерево выглядит так, как показано
 на странице описания свойства [IVZLegends.Add](IVZLegends.Add.htm).
 Удалим все легенды у данного дерева:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Удалим все легенды дерева

	    BubbleTree.Legends.Clear;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера у пузырькового дерева были удалены все
 легенды:


![](IVZLegends_Clear.png)


См. также:


[IVZLegends](IVZLegends.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
