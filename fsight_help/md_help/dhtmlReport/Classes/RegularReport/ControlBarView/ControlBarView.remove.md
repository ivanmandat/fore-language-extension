# ControlBarView.remove

ControlBarView.remove
-


# ControlBarView.remove


## Синтаксис


remove (key: Number, isDispose: Boolean);


## Параметры


key. Ключ элемента управления, который необходимо удалить;


isDispose. Определяет, будет ли удаляемый элемент уничтожен: true- будет, false - не будет.


## Описание


Метод remove удаляет элемент регламентного отчета по ключу.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Для первого листа регламентного отчета должны быть настроены элементы управления. Удалим первый элемент управления первого листа отчета:


        controlBar = reportBox.getDataView().getControlBar();
        ctrl = controlBar.getControlAt(0);
        key = controlBar.getSheetControls()[0].getMetadata().k;
        controlBar.remove(key);

После выполнения примера будет удален первый элемент управления первого листа регламентного отчета.


См. также:


[ControlBarView](ControlBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
