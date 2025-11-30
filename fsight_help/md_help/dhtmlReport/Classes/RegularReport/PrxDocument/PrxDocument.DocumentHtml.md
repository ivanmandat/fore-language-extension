# PrxDocument.DocumentHtml

PrxDocument.DocumentHtml
-


# PrxDocument.DocumentHtml


## Синтаксис


DocumentHtml: String


## Описание


Свойство DocumentHtml устанавливает HTML-содержимое текстового листа.


## Комментарии


Значение свойства устанавливается из JSON или при помощи метода setDocumentHtml, а возвращается при помощи метода getDocumentHtml.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В открытом регламентном отчете должен содержаться текстовый лист. Установим содержимое текстового листа:


dv = reportBox.getDataView(); //получаем область данных отчета


doc = dv.getActiveSheetView(); //получаем активный лист (текстовый лист)


doc.setDocumentHTML("<p><b>Текстовый лист</b></p>");


После выполнения примера будет установлено содержимое текстового листа: «Текстовый лист».


См. также:


[PrxDocument](PrxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
