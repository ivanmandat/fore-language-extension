# IVZLegendBase.DefaultFormat

IVZLegendBase.DefaultFormat
-


# IVZLegendBase.DefaultFormat


## Синтаксис


DefaultFormat: String;


## Описание


Свойство DefaultFormat
 определяет формат чисел легенды.


## Комментарии


Формат чисел легенды записывается в следующем виде: «#,####0.0000».


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта,
 в котором содержится [карта](uimaps.chm::/map.htm). Изменим формат
 чисел легенды.


Разместите на форме компоненты Button, UiErAnalyzer, EaxMapBox с наименованиями
 «Button1», «UiErAnalyzer1» и «EaxMapBox1» соответственно. Для UiErAnalyzer
 установите свойство Active в True, OperationMode в Edit и выберите экспресс-отчёт
 в свойстве Object. Для EaxMapBox выберите в свойстве Source компонент
 «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Express, Forms, Visualizators.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Legend: IVZLegendBase;

	Begin

	    Map := UiErAnalyzer1.ErAnalyzer.MapChart.MapChart;

	    // Получим легенду карты

	    Legend := Map.Legends.Item(0);

	    // Установим новый формат чисел легенды

	    Legend.DefaultFormat := "#,####0.0000";

	    // Обновим карту после изменений

	    UiErAnalyzer1.ErAnalyzer.Map.Refresh;

	End Sub Button1OnClick;


После нажатия на кнопку формат чисел легенды изменится до четырех
 знаков после запятой.


См. также:


[IVZLegendBase](IVZLegendBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
