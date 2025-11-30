# PrxMdService.getDocumentData

PrxMdService.getDocumentData
-


# PrxMdService.getDocumentData


## Синтаксис


getDocumentData (report, callback);


## Параметры


report. Отчет, экземпляр класса [Report](../Report/Report.htm);


callback. Процедура обратного вызова.


## Описание


Метод getDocumentData возвращает метаданные текстового листа регламентного отчета.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В открытом регламентном отчете должен содержаться текстовый лист. Предполагается наличие в репозитории регламентного отчета с ключом 123, содержащего текстовый лист. Вернем метаданные текстового листа отчета с ключом 123:


dv = reportBox.getDataView(); //получаем область данных отчета
doc = dv.getDocument(); //получаем активный лист (текстовый лист)
mb = reportBox.getSource().getMetabase(); //получаем объект метабазы, установленный для отчета
service = new PP.Prx.PrxMdService({
   Metabase: mb,
   PPServiceUrl: mb.getPPServiceUrl()
}); //создаем сревис для работы с регламентными отчетами
report = service.open(123); //открываем отчет
doc.setSource(report); //устанавливаем новый источник для текстового листа
doc.setService(service); //устанавливаем новый сервис для текстогвого листа
//отправляем запрос веб-сервису на получение метаданных текстового листа регламентного отчета
service.getDocumentData(report, PP.Delegate(function (sender, args) {
   console.log(args)
}));

После выполнения примера будет отправлен запрос на получение метаданных текстового листа отчета с ключом 123, в консоль браузера будет выведен объект, содержащий эти метаданные.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
