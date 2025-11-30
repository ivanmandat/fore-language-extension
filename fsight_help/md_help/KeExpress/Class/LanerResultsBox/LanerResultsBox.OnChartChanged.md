# LanerResultsBox.OnChartChanged

LanerResultsBox.OnChartChanged
-


# LanerResultsBox.OnChartChanged


## Синтаксис


OnChartChanged(Sender: Object; Args: [ILanerResultsBoxChartChangedEventArgs](../../Interface/ILanerResultsBoxChartChangedEventArgs/ILanerResultsBoxChartChangedEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnChartChanged наступает
 при изменении диаграммы экспресс-отчета.


## Комментарии


Событие вызывается при выполнении редактирования диаграммы, например,
 по точкам или рисованием.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 LanerResultsBox с наименованием «LanerResultsBox1» и компонент UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющийся
 источником данных для компонента «LanerResultsBox1». В компонент «UiErAnalyzer1»
 должен быть загружен экспресс-отчет, сохраненный на листе с диаграммой.


Пример является обработчиком события OnChartChanged для компонента «LanerResultsBox1».


	Sub LanerResultsBox1OnChartChanged(Sender: Object; Args: ILanerResultsBoxChartChangedEventArgs);

	Begin

	    text := text + "1";

	End Sub LanerResultsBox1OnChartChanged;


В результате выполнения примера после каждого изменения диаграммы в
 строке, идентифицирующей компонент «LanerResultsBox1», будет добавляться
 символ «1».


См. также:


[LanerResultsBox.OnChartChanged](LanerResultsBox.OnChartChanged.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
