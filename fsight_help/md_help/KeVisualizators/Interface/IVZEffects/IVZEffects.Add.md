# IVZEffects.Add

IVZEffects.Add
-


# IVZEffects.Add


## Синтаксис


Add(Value: [IVZEffect](../IVZEffect/IVZEffect.htm)):
 Interger;


## Параметры


Value. Эффект, использующийся
 для подсветки элемента управления.


## Описание


Метод Add добавляет новый эффект
 в коллекцию эффектов.


## Комментарии


Эффект добавляется в конец коллекции.


Метод возвращает индекс добавленного в коллекцию эффекта.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта,
 в котором содержится [пузырьковая
 диаграмма](UiVisualizators.chm::/bubblechart/bubblechart.htm). Зададим контур для активных и неактивных
 элементов, определим параметры прозрачности, выведем в консоль количество
 эффектов в коллекции для неактивных элементов.


Разместите на форме компоненты Button, UiErAnalyzer, EaxBubbleChartBox
 с наименованиями «Button1», «UiErAnalyzer1» и «EaxBubbleChartBox1» соответственно.
 Для UiErAnalyzer установите свойство Active в True, OperationMode в Edit
 и выберите экспресс-отчёт в свойстве Object. Для EaxBubbleChartBox выберите
 в свойстве Source компонент «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Express, Drawing, Forms, Visualizators.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    EBubbleChart: IVZBubbleChart;

	    AlphaEffect: IVZAlphaChannelEffect;

	    BoEffect: IVZBorderEffect;

	    Color: IGxColor;

	    Feather: IGxPen;

	    SAE, SIE: IVZEffects;

	Begin

	    EBubbleChart := UiErAnalyzer1.ErAnalyzer.BubbleChart.BubbleChart;

	    // Определим параметры эффекта прозрачности элементов

	    AlphaEffect := New VZAlphaChannelEffect.Create;

	    AlphaEffect.Alpha := 0.2;

	    SIE := New VZEffects.Create;

	    // Добавим эффект в коллекцию

	    SIE.Add(AlphaEffect);

	    // Определим параметры эффекта выделения контура фиолетовым цветом

	    Color := New GxColor.CreateRGB(153, 50, 204);

	    Feather := New GxPen.CreateSolid(Color, 1);

	    BoEffect := New VZBorderEffect.Create;

	    BoEffect.BorderPen := Feather;

	    // Вставим новый эффект в позицию с индексом 0 для выделения неактивных элементов

	    SIE.InsertAt(0, BoEffect);

	    // Применим эффекты для неактивных элементов

	    EBubbleChart.SelectInactiveEffects := SIE;

	    // Создадим контур зеленого цвета

	    Color := New GxColor.CreateRGB(14, 128, 75);

	    Feather := New GxPen.CreateSolid(Color, 1);

	    BoEffect := New VZBorderEffect.Create;

	    BoEffect.BorderPen := Feather;

	    SAE := New VZEffects.Create;

	    SAE.Add(BoEffect);

	    // Применим эффект для активных элементов

	    EBubbleChart.SelectActiveEffects := SAE;

	    UiErAnalyzer1.ErAnalyzer.BubbleChart.Refresh;

	    // Выведем в консоль количество эффектов для неактивных элементов

	    Debug.WriteLine("Количество эффектов в коллекции для неактивных элементов: " + SIE.Count.ToString);

	End Sub Button1OnClick;


После нажатия на кнопку выберите элемент пузырьковой диаграммы. Активный
 элемент будет отображаться с контуром зеленого цвета, неактивные элементы
 - с заданной прозрачностью и контуром фиолетового цвета. В консоль будет
 выведена информация о количестве эффектов в коллекции для неактивных элементов:


Количество эффектов в коллекции для неактивных элементов:
 2


См. также:


[IVZEffects](IVZEffects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
