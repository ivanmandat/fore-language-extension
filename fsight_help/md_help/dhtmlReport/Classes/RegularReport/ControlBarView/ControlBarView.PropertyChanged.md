# ControlBarView.PropertyChanged

ControlBarView.PropertyChanged
-


# ControlBarView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает
 при изменении отметки в элементах управления.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум два элемента управления. Второй элемент управления
 должен представлять собой раскрывающийся список элементов измерения (экземпляр
 класса [DimComboControlView](../DimComboControlView/DimComboControlView.htm)).
 Для данного списка должен быть доступен множественный выбор элементов.


        reportBox.getDataView().getControlBar().PropertyChanged.add(function (sender, args) {
            var ctrlV = reportBox.getDataView().getControlBar().getControl(2);
            var ctrl = ctrlV.getControl();
            ctrl.getTreeView().setMultiSelect(false);
        });

После выполнения примера при изменении отметки в одном из элементов
 управления для второго элемента управления будет отключена множественная
 отметка.


См. также:


[ControlBarView](ControlBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
