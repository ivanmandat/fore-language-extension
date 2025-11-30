# IVZDataScale.Type

IVZDataScale.Type
-


# IVZDataScale.Type


## Синтаксис


Type: [VisualizatorScaleType](../../Enums/VisualizatorScaleType.htm);


## Описание


Свойство Type определяет тип
 шкалы визуализатора.


## Комментарии


После изменения типа шкалы визуализатора выполните перерасчет шкалы
 с помощью [IVZDataScale.AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта,
 в котором содержится [пузырьковое
 дерево](UiVisualizators.chm::/BubbleTree/BubbleTree.htm) с [метриками](UiSelection.chm::/Selection/Dimension_type.htm#metric)
 «Цвет» и «Размер». Для пузырькового дерева оставим только числовую шкалу
 и выведем её диапазон значений.


Разместите на форме компоненты Button, UiErAnalyzer, EaxDocumentViewerBox
 с наименованиями «Button1», «UiErAnalyzer1» и «EaxDocumentViewerBox1»
 соответственно. Для UiErAnalyzer установите свойство Active в True, OperationMode
 в Edit и выберите экспресс-отчёт в свойстве Object. Для EaxDocumentViewerBox
 выберите в свойстве Analyzer компонент «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Express, Forms, Visualizators.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	Begin

	    BubbleTree := UiErAnalyzer1.ErAnalyzer.BubbleTree.BubbleTree;

	    // Получим цветовую шкалу пузырькового дерева

	    Scale := BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Изменим тип шкалы на числовую

	    Scale.Type := VisualizatorScaleType.Double;

	    // Выведем в консоль диапазон значений

	    Debug.WriteLine("Диапазон значений: " + Scale.MinValue.ToString + " - " + Scale.MaxValue.ToString);

	    // Перерассчитаем шкалу

	    Scale.AutoSetupScaleItems;

	    // Обновим пузырьковое дерево

	    UiErAnalyzer1.ErAnalyzer.BubbleTree.Refresh;

	End Sub Button1OnClick;


После нажатия на кнопку в экспресс отчёте останется числовая шкала для
 пузырькового дерева. В консоль будет выведен диапазон значений шкалы:


Диапазон значений: 3 - 22.1526785000136


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
