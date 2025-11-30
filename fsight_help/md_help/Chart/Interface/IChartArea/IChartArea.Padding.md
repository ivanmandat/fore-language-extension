# IChartArea.Padding

IChartArea.Padding
-


# IChartArea.Padding


## Синтаксис


Padding: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство Padding определяет пользовательские величины внутренних отступов от краев диаграммы.


## Комментарии


Использование свойства возможно при установке свойству [AutoPadding](IChartArea.AutoPadding.htm) значения False. Данное свойство сохраняется с диаграммой. Если загружается объект предыдущей версии, то для него устанавливаются свойства AutoPadding и Padding по умолчанию.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox, UiChart.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    c: IChart;

Begin

    c:= UiChart1.Chart;

    c.ChartArea.Padding:= New GxRectF.Create(0, 0, 0, 0);

    c.ChartArea.AutoPadding:= False;

End Sub Button1OnClick;


При нажатии кнопки «Button1» будут установлены нулевые внутренние отступы от краев диаграммы.


См. также:


[IChartArea](IChartArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
