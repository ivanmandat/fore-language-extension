# Report.getSheets

Report.getSheets
-


# Report.getSheets


## Синтаксис


getSheets (onlyVisible)


## Параметры


onlyVisible. Определяет, будут ли возвращаться описания скрытых листов отчета. Если установлено true, будут возвращаться описания только видимых листов отчета. Необязательный параметр.


## Описание


Метод getSheets возвращает массив описаний листов отчета.


## Комментарий


Метод возвращает массив JSON-объектов с описаниями листов регламентного отчета.


JSON-объект имеет следующие поля:


 Имя поля
 Тип
 Краткое описание


 dataChange
 Object
 Объект, содержащий поле isDataChanged, которое возвращает признак того, были ли изменены данные на листе отчета.


 id
 String
 Идентификатор листа отчета.


 isActive
 Boolean
 Признак того, открыт ли лист отчета: true - открыт, false - закрыт.


 k
 Number
 Ключ листа отчета.


 n
 String
 Наименование листа отчета.


 vis
 Boolean
 Признак того, является лист отчета видимым: true - лист отчета отображается, false - лист скрыт.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm), источником которого является экземпляр класса [Report](Report.htm) с наименованием «prxReport» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим обработчик события [DataAreaView.ActiveSheetChanged](../DataAreaView/DataAreaView.ActiveSheetChanged.htm):


        reportBox.getDataAreaView().ActiveSheetChanged.add(function (sender, args) {
            prxReport.getSheets()[prxReport.getActiveSheetIndex()].n = "New Name";
            reportBox.refresh();
        })

После выполнения примера при смене активного листа отчета будет изменено название открытого листа отчета на «New Name».


См. также:


[Report](Report.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
