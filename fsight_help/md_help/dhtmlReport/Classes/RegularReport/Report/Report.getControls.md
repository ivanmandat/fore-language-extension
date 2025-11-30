# Report.getControls

Report.getControls
-


# Report.getControls


## Синтаксис


getControls(forSheet);


## Параметры


forSheet. Индекс листа отчета.
 Необязательный параметр, по умолчанию возвращается список элементов управления
 открытого листа отчета.


## Описание


Метод getControls возвращает
 список [элементов управления](../Control/Control.htm) для указанного
 листа отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 ReportBox, источником которого является экземпляр класса [Report](Report.htm)
 с наименованием «prxReport». Добавим обработчик события [ControlBarView.PropertyChanged](../ControlBarView/ControlBarView.PropertyChanged.htm):


        reportBox.getDataAreaView().getControlBar().PropertyChanged.add(function (sender, args) {//обработчик события смены значения свойств панели элементов управления
           var ind = prxReport.getSheetIndexByKey(prxReport.getActiveSheetKey())//возвращаем индекс активного листа отчета
           prxReport.getControls(ind)[2].setVisibleForReport(true);//второй элемнета управления активного листа отчета делаем видимым для всех листов.
           reportBox.getDataAreaView().getControlBar().refreshAll();//обновляем панель элементов
        })

После выполнения примера при изменении свойств панели элементов управления
 (например, при изменении отметки в измерении) второй элемент управления
 активного листа отчета будет видимым на всех листах отчета.


См. также:


[Report](Report.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
