# EaxBubbleChartView.RequestMetadata

EaxBubbleChartView.RequestMetadata
-


**


# EaxBubbleChartView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике данных пузырьковой диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)) и с загруженной пузырьковой диаграммой в области данных. Обработаем событие RequestMetadata, обновляя все содержимое пузырьковой диаграммы экспресс-отчета:


// Получаем мастер управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Получаем представление пузырьковой диаграммы экспресс-отчета
var bubbleChartView = master.getDataView();
// Обрабатываем событие RequestMetadata
bubbleChartView.RequestMetadata.add(function () {
    // Обновляем все содержимое экспресс-отчета
    bubbleChartView.refreshAll();
});

После выполнения примера в результате наступления события RequestMetadata будет обновлено все содержимое пузырьковой диаграммы экспресс-отчета.


См. также:


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
