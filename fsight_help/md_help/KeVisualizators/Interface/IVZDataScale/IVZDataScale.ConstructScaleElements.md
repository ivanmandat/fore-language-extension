# IVZDataScale.ConstructScaleElements

IVZDataScale.ConstructScaleElements
-


# IVZDataScale.ConstructScaleElements


## Синтаксис


ConstructScaleElements(Values: [IVZDataArray](../IVZDataArray/IVZDataArray.htm));


## Параметры


Values. Массив данных, отображаемых
 визуализатором. По этим данным рассчитывается шкала.


## Описание


Метод ConstructScaleElements
 перерассчитывает шкалу визуализатора, используя массив данных и заданный
 [режим расчета](IVZDataScale.Mode.htm).


## Комментарий


Метод актуален для использования, если включен [автоматический
 расчет шагов шкалы](IVZDataScale.AutoCalculable.htm) (AutoCalculable=True).


Перед вычислением шкалы можно определить [количество
 интервалов](IVZDataScale.IntervalsCount.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. В отчете для пузырькового дерева должна быть
 выбрана метрика «Цвет». Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    Scale: IVZDataScale;

	    DataSource: IVZMultiplyDataSource;

	    Values: IVZDataArray;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим шкалу цветов пузырькового дерева

	    Scale := BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Разрешим автоматическое вычисление шкалы

	    Scale.AutoCalculable := True;

	    // Включим использование в шкале элементов «равно»

	    Scale.EnableEquality := True;

	    // Определим режим расчёта шкалы визуализатора

	    Scale.Mode := VisualizatorScaleMode.ScaleLogarithmic;

	    // Определим основание для логарифмической шкалы

	    Scale.LogarithmBase := 4;

	    // Получаем источник данных

	    DataSource := BubbleTree.ColorVisual.ColorMapping.DataSource;

	    // Получаем массив данных, на основе которых будет рассчитана шкала

	    Values := New VZDataArray.Create;

	    Values := DataSource.GetAllLevelDataEx("color",-1);

	    // Перерассчитаем шкалу, если данные были получены

	    If Values <> Null Then

	        Scale.ConstructScaleElements(Values);

	    Else

	        Debug.WriteLine("Данных нет, расчет шкалы не выполнен");

	    End If;

	    // Сохраним изменения, сделанные в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет выполнен перерасчет шкалы визуализатора
 с заданными параметрами и данными.


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
