# BubbleChart.ShowHistoryPreviousStepsOnly

BubbleChart.ShowHistoryPreviousStepsOnly
-


**


# BubbleChart.ShowHistoryPreviousStepsOnly


## Синтаксис


ShowHistoryPreviousStepsOnly: Boolean;


## Описание


Свойство ShowHistoryPreviousStepsOnly**
 определяет режим отображения только предыдущих пузырьков истории значений.


## Комментарии


Пузырьки истории значений - режим отображения значений за предыдущие
 года. По умолчанию отображаются значение за несколько предыдущих годов,
 при значении свойства true - будет
 отображено только одно предыдущее значение истории.


Значение свойства устанавливается из JSON и с помощью метода set**ShowHistory****PreviousStepsOnly**, а возвращается
 с помощью метода get**ShowHistory****PreviousStepsOnly**.


## Пример с BubbleChart


Для выполнения примера необходимо наличие на html-странице компонента
 [BubbleChart](../../../Components/BubbleChart/BubbleChart.htm)
 с наименованием «bubbleChart» (см. [Пример
 создания компонента BubbleChart](../../../Components/BubbleChart/BubbleChart_Example.htm)). Включим режим отображения пузырьков
 истории значений и определим режим отображения только предыдущих пузырьков:


// Отобразим пузырьки истории значений
bubbleChart.setShowBubbleHistory(true);
// Включим отображение пузырьков истории значений при отображении подсказок
bubbleChart.setShowHistoryBubbleTooltip(true);
// Отобразим только предыдущие пузырьки истории значений
bubbleChart.setShowHistoryPreviousStepsOnly(true);
// Включим второй элемент на временной шкале
bubbleChart.setTimelineStep(1);
В результате выполнения примера был включен режим отображения пузырьков
 истории значений, включены подписи для пузырьков истории значений и включен
 режим отображения только предыдущих пузырьков истории значений.


## Пример с ExpressBox


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Classes/Express/expressbox/expressbox.htm)
 с наименованием «expressBox» (см. [Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)). Включим режим отображения
 пузырьков истории значений и определим режим отображения только предыдущих
 пузырьков:


// Получим экземпляр пузырьковой диаграммы
DV = expressBox.getDataView();
CV = DV.getBubbleChartView();
bubbleChart = CV.getInstance();
// Отобразим пузырьки истории значений
bubbleChart.setShowBubbleHistory(true);
// Включим отображение пузырьков истории значений при отображении подсказок
bubbleChart.setShowHistoryBubbleTooltip(true);
// Отобразим только предыдущие пузырьки истории значений
bubbleChart.setShowHistoryPreviousStepsOnly(true);
// Включим второй элемент на временной шкале
bubbleChart.setTimelineStep(1);
В результате выполнения примера был включен режим отображения пузырьков
 истории значений, включены подписи для пузырьков истории значений и включен
 режим отображения только предыдущих пузырьков истории значений.


См. также:


[BubbleChart](BubbleChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
