# IVZBaseDataVisualizer.Background

IVZBaseDataVisualizer.Background
-


# IVZBaseDataVisualizer.Background


## Синтаксис


Background: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Background определяет
 настройки кисти для фона визуализатора.


## Комментарии


Для получения объекта для форматирования данных визуализатора используйте
 [IVZBaseDataVisualizer.Formatter](IVZBaseDataVisualizer.Formatter.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- экспресс-отчета с идентификатором EXPRESS, содержащего пузырьковое
	 дерево;


	- графического файла Graph.png, находящегося в корне диска C.
	 Минимальный размер изображения 200х200.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    BubbleTree: IVZBaseDataVisualizer;

	    Formatter: IVZBaseFormatter;

	    Color: IGxColor;

	    Brush: IGxBrush;

	    Bitmap: IGxBitmap;

	    Image: IGxImage;

	    Graphics: IGxGraphics;

	    Rect: IGxRectF;

	    UnRed: IUndoRedo;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Analyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := Analyzer.BubbleTree.BubbleTree As IVZBaseDataVisualizer;

	    // Изменим настройки кисти фона визуализатора

	    Color := GxColor.FromName("Yellow");

	    Brush := New GxSolidBrush.Create(Color);

	    BubbleTree.Background := Brush;

	    // Получим процентное выражение числа 0.425 с помощью инструмента для форматирования данных

	    Formatter := BubbleTree.Formatter;

	    Formatter.FormatByParam("{0}", 0.425, "0.00%");

	    Debug.WriteLine("Число 0.425, выраженное в процентах: " + Formatter.FormatByParam("{0}", 0.425, "0.00%"));

	    // Включим анимацию визуализатора

	    If Not BubbleTree.EnableAnimating Then

	        BubbleTree.EnableAnimating := True;

	    End If;

	    // Выключим режим печати визуализатора

	    If BubbleTree.IsPrintMode Then

	        BubbleTree.IsPrintMode := False;

	    End If;

	    // Изменения в визуализаторе отсутствуют

	    If BubbleTree.IsDirty Then

	        BubbleTree.IsDirty := False;

	    End If;

	    // Получим стек изменений настроек визуализатора

	    UnRed := BubbleTree.UndoRedo;

	    // Зададим доступность и количество изменений стека

	    UnRed.Enabled:= True;

	    UnRed.Limit:= 5;

	    // Сохраним изображение визуализатора в файл

	    Bitmap := BubbleTree.GetBitmap(1795, 1205, 300);

	    Bitmap.SaveToFile("C:\Image.jpg");

	    // Отрисуем визуализатор на графический объект

	    Image := New GxImage.CreateFromFile("C:\Graph.jpg");

	    Graphics := GxGraphicsClass.FromImage(Image);

	    Rect := New GxRectF.Create(100, 100, 100, 100);

	    BubbleTree.Draw(Graphics, Rect, 300, True);

	    // Обновим отчет и сохраним изменения

	    Analyzer.RefreshAll;

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для пузырькового дерева:


	- фон станет желтым;


	- в окно консоли будет выведено процентное выражение числа 0,425
	 с помощью инструмента для форматирования даннных;


	- будет включена анимация;


	- будет недоступен режим печати;


	- будет доступна отмена и повтор изменений настроек визуализатора
	 только 5 раз;


	- перед закрытием отчета будет предложено сохранить изменения,
	 только, если они производились;


	- изображение визуализатора будет сохранено в файл по указанному
	 пути;


	- визуализатор будет отрисован в графический файл, созданный из
	 указанного изображения.


См. также:


[IVZBaseDataVisualizer](IVZBaseDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
