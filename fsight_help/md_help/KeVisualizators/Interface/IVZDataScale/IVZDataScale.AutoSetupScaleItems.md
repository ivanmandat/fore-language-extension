# IVZDataScale.AutoSetupScaleItems

IVZDataScale.AutoSetupScaleItems
-


# IVZDataScale.AutoSetupScaleItems


## Синтаксис


AutoSetupScaleItems;


## Описание


Метод AutoSetupScaleItems пересчитывает
 шкалу визуализатора, исходя из значений [первого](IVZDataScale.First.htm)
 и [последнего](IVZDataScale.Last.htm) элемента шкалы.


## Комментарии


Расчет шкалы производится в соответствии с [типом
 шкалы](IVZDataScale.Type.htm):


	- для цветовой шкалы происходит расчет цветов;


	- для числовой шкалы происходит расчет значений.


Перед вычислением шкалы можно задать [количество
 интервалов](IVZDataScale.IntervalsCount.htm) для шкалы.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. Добавьте ссылки на системные сборки: Drawing,
 Express, Metabase, Visualizators.


До выполнения примера цветовая шкала пузырькового дерева выглядит так,
 как показано на странице [описания интерфейса
 IVZDataScale](IVZDataScale.htm). Установим количество интервалов шкалы, равное 4, определим
 кисти для первого и последнего элемента шкалы, а затем перерассчитаем
 шкалу:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	    Color: IGxColor;

	    Brush: IGxSolidBrush;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим шкалу пузырькового дерева

	    Scale := BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Установим количество интервалов шкалы

	    Scale.IntervalsCount := 4;

	    // Создадим аметистовый цвет

	    Color := New GxColor.CreateRGB(153,102,204);

	    // Создадим кисть

	    Brush := New GxSolidBrush.Create(Color);

	    // Зададим кисть для первого элемента шкалы

	    Scale.First := Brush;

	    // Создадим васильковый цвет

	    Color := New GxColor.CreateRGB(100,149,237);

	    // Создадим кисть

	    Brush := New GxSolidBrush.Create(Color);

	    // Зададим кисть для последнего элемента шкалы

	    Scale.Last := Brush;

	    // Перерассчитаем шкалу

	    Scale.AutoSetupScaleItems;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет перерассчитана шкала, исходя из заданного
 количества интервалов, а также для элементов шкалы будут автоматически
 настроены градиенты из цветов, заданных для первого и последнего элемента
 шкалы.


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
