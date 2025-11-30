# PrxMdService.setControlsValue

PrxMdService.setControlsValue
-


# PrxMdService.setControlsValue


## Синтаксис


setControlsValue(report, metadata, callback);


## Параметры


report. Регламентный отчёт;


metadata. Метаданные;


callback. Обратный вызов.


## Описание


Метод setControlsValue устанавливает
 значение для элемента управления.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» и сервиса для работы с регламентным отчётом
 с наименованием «prxMbService» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В отчёте должна содержаться панель
 элементов управления.


Добавим в конце функции [renderReport](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)
 обработку события [GridView.Rendered](../GridView/GridView.Rendered.htm)
 для вызова функции setControlsValue, которая будет выполняться при отрисовке
 таблицы регламентного отчёта:


reportBox.getDataView().getGridView().Rendered.add(setControlsValue,this);

Создадим функцию setControlsValue:


function setControlsValue() {
    var md = reportBox.getSource().getMetadata();
    var cmd = md.controls;
    cmd.its.it[0].value.value = "Новая строка";
    prxMbService.setControlsValue(prxReport, cmd.its.it, null);
    reportBox.getDataView().getControlBar().refresh()
}

В результате выполнения примера для первого элемента управления будет
 установлено значение «Новая строка».


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
