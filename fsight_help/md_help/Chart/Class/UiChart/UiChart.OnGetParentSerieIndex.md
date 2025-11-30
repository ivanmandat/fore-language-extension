# UiChart.OnGetParentSerieIndex

UiChart.OnGetParentSerieIndex
-


# UiChart.OnGetParentSerieIndex


## Синтаксис


Sub OnGetParentSerieIndex(Sender:
 Object; Args: [IUiChartParentSerieIndexEventArgs](../../Interface/IUiChartParentSerieIndexEventArgs/IUiChartParentSerieIndexEventArgs.htm));

Begin

    //набор операторов

End Sub OnGetParentSerieIndex;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие;


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetParentSerieIndex
 позволяет определить индекс родительского ряда.


## Комментарии


Ряды с одинаковым родителем и сам ряд-родитель объединяются в одну группу
 с одинаковыми настройками.


Для определения, будут ли использоваться относительные ряды, используйте
 [UiChart.OnGetRelativeSerieEnabled](UiChart.OnGetRelativeSerieEnabled.htm).


## Пример


Использование события приведено в примере для [IChart.DisplayMode](../../Interface/IChart/IChart.DisplayMode.htm).


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
