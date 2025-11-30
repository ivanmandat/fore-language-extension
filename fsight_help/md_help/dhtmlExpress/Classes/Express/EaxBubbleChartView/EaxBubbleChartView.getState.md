# EaxBubbleChartView.getState

EaxBubbleChartView.getState
-


# EaxBubbleChartView.getState


## Синтаксис


getState();


## Описание


Метод getState возвращает настройки
 представления пузырьковой диаграммы в экспресс-отчёте.


## Комментарии


Метод возвращает объект типа PP.Ui.PropertyChangedEventArgs.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной пузырьковой диаграммой в области
 данных. Расположим легенду под областью построения пузырьковой диаграммы слева:


// Получаем список панелей у мастера управления пузырьковой диаграммой экспресс-отчета
var master = expressBox.getPropertyBarView().getBubbleChartMaster();
// Отображаем данный мастер
master.show();
// Отображаем первую панель мастера
master.expandFirstItem(true);
// Получаем первую пузырьковую диаграмму экспресс-отчёта
var bubbleChartView = master.getDataView()[0];
// Получаем настройки пузырьковой диаграммы
var state = bubbleChartView.getState();
var meta = state.getMetadata();
for (var i in meta) {
    // Расположим легенду пузырьковой диаграммы в правом верхнем углу
    if (meta[i].Name == "chartmaster.legendpanel.legendposition") {
        meta[i].Value = "Bottom&Left"
    }
};
// Обновляем пузырьковую диаграмму
bubbleChartView.refresh(state);
// Применяем обновлённые настройки
master.setSettings(meta);
В результате выполнения примера легенда была отображена под областью
 построения пузырьковой диаграммы слева:


![](EaxBubbleChartView_LegendPosition.png)


[EaxBubbleChartView](EaxBubbleChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
