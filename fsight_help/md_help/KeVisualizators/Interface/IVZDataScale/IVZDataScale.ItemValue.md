# IVZDataScale.ItemValue

IVZDataScale.ItemValue
-


# IVZDataScale.ItemValue


## Синтаксис


ItemValue(Value: Double): Variant;


## Параметры


Value. Значение, по которому
 требуется получить элемент шкалы визуализатора.


## Описание


Свойство ItemValue возвращает
 элемент шкалы, соответствующий указанному значению.


## Комментарии


Свойство возвращает кисть, описываемую интерфейсом [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm),
 или числовое значение в зависимости от [типа
 шкалы](IVZDataScale.Type.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Drawing, Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Вычислим среднее значение шкалы и определим цвет пузырька, соответствующего
 этому значению:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Scale: IVZDataScale;

	    Value: Double;

	    Item: IGxSolidBrush;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим шкалу цветов пузырькового дерева

	    Scale := Analyzer.BubbleTree.BubbleTree.ColorVisual.ColorMapping.Scale;

	    // Получим среднее значение шкалы

	    Value := (Scale.MaxValue - Scale.MinValue) / 2;

	    Debug.WriteLine("Среднее значение шкалы: " + Value.ToString);

	    // Определим пузырёк шкалы, соответствующий среднему значению

	    Item := Scale.ItemValue(Value);

	    Debug.WriteLine("Цвет пузырька для среднего значения: (" +

	        Item.Color.R.ToString + ", " + Item.Color.G.ToString + ", " +

	        Item.Color.B.ToString + ")");

	End Sub UserProc;


В результате выполнения примера в окне консоли были выведены среднее
 значение шкалы и цвет пузырька, соответствующего данному значению:


Среднее значение шкалы: 22.5


Цвет пузырька для среднего значения: (255, 70, 44)


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
