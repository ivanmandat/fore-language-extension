# IEaxBubbleTree.BubbleTree

IEaxBubbleTree.BubbleTree
-


# IEaxBubbleTree.BubbleTree


## Синтаксис


BubbleTree: [IVZBubbleTree](KeVisualizators.chm::/Interface/IVZBubbleTree/IVZBubbleTree.htm);


## Описание


Свойство BubbleTree возвращает
 объект, содержащий параметры отображения пузырькового дерева в экспресс-отчете.


## Комментарии


[Пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm) - это способ отображения иерархических данных
 в виде набора взаимосвязанных пузырьков. Каждой ветке иерархии соответствует
 пузырек, который связан с пузырьками, являющимися элементами иерархии
 того же уровня. Все элементы одной ветки и одного уровня иерархии образуют
 круг, в центре которого - родительский элемент иерархии. Диаметр каждого
 пузырька пропорционален значению соответствующего элемента иерархии. Цвет
 пузырька также определяется значением элемента иерархии.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, в котором содержится пузырьковое дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BT: IEaxBubbleTree;

	    Bubtree: IVZBubbleTree;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BT := EaxAnalyzer.BubbleTree;

	    // Получим объект, содержащий параметры отображения пузырькового дерева

	    Bubtree := BT.BubbleTree;

	    // Установим выравнивание элементов по левому краю

	    Bubtree.Alignment := VisualizatorBubbleTreeAlignment.Left;

	    // Сохраним изменения в отчете

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для элементов пузырькового дерева будет установлено
 выравнивание по левому краю.


См. также:


[IEaxBubbleTree](IEaxBubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
