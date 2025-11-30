# IVZLegendBase.IsDependent

IVZLegendBase.IsDependent
-


# IVZLegendBase.IsDependent


## Синтаксис


IsDependent: Boolean;


## Описание


Свойство IsDependent определяет
 зависимость легенды от данных.


## Комментарии


По умолчанию имеет значение True.


При значении False легенда не
 будет зависеть от данных, то-есть при изменении видимых данных максимальные/минимальные
 значения в легенде меняться не будут. Сразу после объявления основной
 легенды независимой будет создана новая основная легенда, которая будет
 зависима от выбранных данных.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP, содержащим пузырьковое дерево. Модуль, в котором
 размещается пример, должен иметь ссылки на системные сборки Express, Metabase
 и Visualizators. Также предполагается наличие формы, содержащей следующие
 компоненты:


	- Кнопка с идентификатором «Button1»;


	- Компонент UiErAnalyzer с идентификатором «UiErAnalyzer1». Свойство
	 Object настроено на экспресс-отчет «EXP», свойству Active задано значение
	 True.


	- Компонент EaxDocumentViewerBox с идентификатором «EaxDocumentViewerBox1».
	 Свойство Analyzer содержит значение «UiErAnalyzer1».


Пример является обработчиком события кнопки «Button1»:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer : IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    SizeLegend: IVZSizeLegend;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    BubbleTree := Analyzer.BubbleTree.BubbleTree;

	    // Получим размерную шкалу

	    SizeLegend := BubbleTree.Legends.Item(1) As IVZSizeLegend;

	    // Зададим независимость от данных

	    SizeLegend.IsDependent := False;

	    // Обновим компонент. При обновлении будет создана новая легенда размера,

	    // т.к. больше нет легенды, привязанной к данным

	    Analyzer.BubbleTree.Refresh;

	    // Определим привязку независимой легенды к верхней части отчёта

	    SizeLegend.VerticalAlignment := VisualizatorVerticalAlignment.Top;

	    // Обновим компонент

	    Analyzer.BubbleTree.Refresh;

	End Sub Button1OnClick;


В результате выполнения примера легенда с индексом 1 становится независимой
 от данных, после чего автоматически будет создана новая зависимая от данных
 легенда. Для удобства визуального восприятия, независимая легенда переносится
 в верхнюю часть отчета.


В дальнейшем, если изменить максимальные значения выбранных данных,
 то независимая легенда останется прежней, а новая основная легенда поменяет
 максимальное значение.


См. также:


[IVZLegendBase](IVZLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
