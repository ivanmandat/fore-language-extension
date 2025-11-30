# IChart.IsConnectingLinesVisible

IChart.IsConnectingLinesVisible
-


# IChart.IsConnectingLinesVisible


## Синтаксис


IsConnectingLinesVisible: Boolean;


## Описание


Свойство IsConnectingLinesVisible
 определяет признак отображения соединительных линий столбцов диаграммы.


## Комментарии


По умолчанию свойство имеет значении False.


## Пример


Для выполнения примера предполагается наличие компонента Button с идентификатором
 «Button1» и наличие экспресс-отчета с идентификатором «EXPRESS_REPORT».


Подключите системные сборки: Chart, Express и Metabase.


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

    //Задаем признак отображения соединительных линий

    Chart.IsConnectingLinesVisible := True

End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки в диаграмме экспресс-отчета
 будут отображены соединительные линии.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
