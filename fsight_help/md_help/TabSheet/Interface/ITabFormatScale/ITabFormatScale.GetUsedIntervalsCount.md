# ITabFormatScale.GetUsedIntervalsCount

ITabFormatScale.GetUsedIntervalsCount
-


# ITabFormatScale.GetUsedIntervalsCount


## Синтаксис


GetUsedIntervalsCount: Integer;


## Описание


Метод GetUsedIntervalsCount
 используется для получения индекса интервала шкалы по индексу используемого
 интервала.


## Комментарии


Для получения количества используемых интервалов шкалы используйте метод
 [ITabFormatScale.GetUsedIntervalIndex](ITabFormatScale.GetUsedIntervalIndex.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта,
 в котором содержится таблица.


Разместите на форме компоненты Button, UiErAnalyzer, TabSheetBoxс наименованиями «Button1»,
 «UiErAnalyzer1», «TabSheetBox1» соответственно.


Задайте дополнительные свойства:


	- для
	 компонента UiErAnalyzer установите свойству Active значение True и
	 задайте экспресс-отчёт свойству Object;


	- для
	 компонента TabSheetBox установите свойству Source значение
	 «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Drawing, Express, Forms, Tab.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Range: ITabRange;

	    FormatCondition: ITabFormatCondition;

	    Scale: ITabFormatScale;

	Begin

	    // Получим таблицу экспресс-отчёта

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    // Установим условное форматирование для выделенных ячеек таблицы

	    Range := Tab.View.Selection.Range;

	    FormatCondition := Range.FormatConditions.Add;

	    FormatCondition.Type := TabConditionType.Scale;

	    // Настроим условное форматирование

	    Scale := FormatCondition.Details As ITabFormatScale;

	    // Отменим использование автоподбора значений

	    Scale.UseAutoValues := False;

	    // Зададим количество интервалов цветовой шкалы

	    Scale.IntervalsCount := 4;

	    // Зададим цвета интервалов шкалы

	    Scale.Color(0) := GxColor.FromName("Red");

	    Scale.Color(1) := GxColor.FromName("Blue");

	    Scale.Color(2) := GxColor.FromName("Green");

	    Scale.Color(3) := GxColor.FromName("Yellow");

	    // Выполним пересчёт цветовой шкалы

	    Scale.Recalc;

	    // Выведем в консоль количество интервалов шкалы и индекс второго интервала

	    Debug.WriteLine("Количество используемых интервалов шкалы: " + Scale.GetUsedIntervalsCount.ToString);

	    Debug.WriteLine("Индекс второго
	 интервала шкалы: " + Scale.GetUsedIntervalIndex(1).ToString);

	End Sub Button1OnClick;


При выполнении примера выделите диапазон ячеек таблицы и нажмите кнопку.
 После чего будет применено условное форматирование для выделенных ячеек.
 В консоль будет выведено количество интервалов цветовой шкалы и индекс
 второго интервала.


См. также:


[ITabFormatScale](ITabFormatScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
