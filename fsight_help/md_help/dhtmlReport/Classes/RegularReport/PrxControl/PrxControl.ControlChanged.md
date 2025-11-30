# PrxControl.ControlChanged

PrxControl.ControlChanged
-


# PrxControl.ControlChanged


## Синтаксис


ControlChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ControlChanged наступает
 при изменении значения элемента управления.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум три элемента управления. Добавим обработчик события
 ControlChanged для третьего элемента управления:


        var ctrlV = reportBox.getDataView().getControlBar().getControl(3);
        ctrlV.ControlChanged(function (sender, args) {
            ctrlV.getSource().setVisibleForReport(false)
        })

После изменения изменении значения третьего элемента управления данный
 элемент будет скрыт на всех листах отчета.


См. также:


[PrxControl](PrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
