# IEaxBubbleChartBox.BorderStyle

IEaxBubbleChartBox.BorderStyle
-


# IEaxBubbleChartBox.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](ModForms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxBubbleChartBox
 с наименованием «EaxBubbleChartBox1» и компонента UiEaxBubbleChart,
 являющегося источником данных для «EaxBubbleChartBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EaxBubbleChartBox1.BorderStyle := ControlBorderStyle.Flat;

	End Sub Button1OnClick;


При нажатии на кнопку будет изменен стиль границы компонента «EaxBubbleChartBox1».
 Граница будет иметь объемный вид.


См. также:


[IEaxBubbleChartBox](IEaxBubbleChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
