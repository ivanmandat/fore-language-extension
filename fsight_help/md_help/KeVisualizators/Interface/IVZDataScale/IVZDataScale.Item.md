# IVZDataScale.Item

IVZDataScale.Item
-


# IVZDataScale.Item


## Синтаксис


Item(Index: Integer): Variant;


## Параметры


Index. Индекс элемента шкалы.


## Описание


Свойство Item определяет кисть
 или число, соответствующие элементу шкалы визуализатора в зависимости
 от её [типа](IVZDataScale.Type.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчете для пузырькового дерева должна быть
 выбрана метрика «Цвет». Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Drawing, Express, Metabase и Visualizators.


До выполнения примера цветовая шкала пузырькового дерева выглядит так,
 как показано на странице описания интерфейса [IVZDataScale](IVZDataScale.htm).


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EaxBubbleTree:IEaxBubbleTree;

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	    i: Integer;

	    Color: IGxColor;

	    Brush: IGxSolidBrush;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    EaxBubbleTree := EaxAnalyzer.BubbleTree;

	    BubbleTree := EaxBubbleTree.BubbleTree;

	    // Получим шкалу пузырькового дерева

	    Scale := BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Определим цвет для элементов шкалы

	    For i:=0 To Scale.ItemsCount - 1 Do

	        // Создадим красный цвет

	        Color := New GxColor.CreateRGB(255 - 50 * i, 0, 0);

	        // Создадим кисть

	        Brush := New GxSolidBrush.Create(Color);

	        // Установим кисть элементу шкалы

	        Scale.Item(i) := Brush;

	    End For;

	    // Выведем информацию о шкале

	    Debug.WriteLine("Идентификатор шкалы: " + Scale.ID);

	    Debug.WriteLine("Общее количество значений шкалы: " + Scale.ValuesCount.ToString);

	    Debug.WriteLine("Диапазон значений шкалы: " + Scale.Value(0).ToString + " - " + Scale.Value(3).ToString);

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для элементов шкалы пузырькового дерева
 были установлены разные оттенки красного цвета:


![](IVZDataScale_Item.png)


В консоль были выведены идентификатор шкалы и общее количество её значений:


Идентификатор шкалы: Scale220


Общее количество значений шкалы: 4


Диапазон значений шкалы: 6.5034786623558 - 21.5011791813519


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
