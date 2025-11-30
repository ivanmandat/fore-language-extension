# IntervalsLegend.ItemHovered

IntervalsLegend.ItemHovered
-


# IntervalsLegend.ItemHovered


## Синтаксис


ItemHovered: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Item - элемент легенды, Hovered - признак, определяющий,
 наведен или отведен курсор;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие ItemHovered наступает
 при наведении указателя мыши на элемент легенды.


## Комментарии


Событие ItemHovered наступает
 вне зависимости от применения подсветки элемента легенды при наведении
 на него указателя мыши.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с
 наименованием «bubbleChart» (см. «[Пример
 создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»).


// Получим легенду интервалов значений
var legend = bubbleChart.getLegend();
// Установим формат записи интервалов с обеими границами
legend.setBetweenFormat("от {0:0} до {1:0}");
// Установим формат записи интервала с левой границей
legend.setGreaterFormat("более {0:0}");
// Установим формат записи интервала с правой границей
legend.setLessFormat("менее {0:0}");
/*
Установим расположение элемента, соответствующему отсутствующим данным
в визуализаторе, перед остальными элементами
*/
legend.setNoDataPosition(PP.Ui.NoDataPosition.Before);
legend.ItemHovered.add(
    function () {
        bubbleChart.refresh();
    }
);
В результате выполнения примера были изменены следующие свойства легенды:
 формат записи интервалов с левой, правой и обеими границами, расположение
 и текст элемента, соответствующего отсутствующим данным в визуализаторе.
 Данные изменения будут отображены при наведении указателя мыши на элемент
 легенды.


См. также:


[IntervalsLegend](IntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
