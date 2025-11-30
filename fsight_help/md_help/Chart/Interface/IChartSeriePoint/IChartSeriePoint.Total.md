# IChartSeriePoint.Total

IChartSeriePoint.Total
-


# IChartSeriePoint.Total


## Синтаксис


Total: Boolean;


## Описание


Свойство Total определяет признак
 является ли столбик итогом.


## Комментарии


True. Столбик является итогом.


False. Столбик не является итогом.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 «EXPRESS_REPORT» и наличие на форме компонента Button с идентификатором
 «Button1».


Добавьте ссылки на системные сборки: Express и Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    MB: IMetabase;

    Eax: IEaxAnalyzer;

Begin

    //Подключаемся к репозиторию

    MB := MetabaseClass.Active;

    //Получаем экспресс-отчет

    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

    //Получаем диаграмму

    Chart := Eax.Chart As IChart;

    //Получаем признак итогового столбца

    Debug.Write(Eax.Chart.Chart.Series.Item(0).SeriePoint(3).Total);


End Sub Button1OnClick;


В результате выполнения примера после нажатия
 кнопки в консоли будет выведен признак того, является ли столбик с индексом
 3 итогом.


См. также:


[IChartSeriePoint](IChartSeriePoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
