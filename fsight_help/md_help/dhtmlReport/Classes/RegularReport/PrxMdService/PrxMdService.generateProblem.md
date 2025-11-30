# PrxMdService.generateProblem

PrxMdService.generateProblem
-


# PrxMdService.generateProblem


## Синтаксис


generateProblem(report, callback);


## Параметры


report. [PP.Prx.Report](../Report/Report.htm).
 Отчет;


callback. PP.Delegate. Возвратная
 функция.


## Описание


Метод generateProblem отправляет
 запрос на генерацию задачи моделирования.


## Комментарии


Метод реализует логику нажатия на кнопку «Моделирование
 и прогнозирование» ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Отчет должен быть построен на базе
 данных временных рядов.


// Получим сервис и отчет
dv = reportBox.getDataView();
prxMdService = dv.getService();
report = reportBox.getSource();
// Зададим обработчик событий, выводящий ответ сервера в консоль
callback = function(sender, args) {
  console.log(args.Response);
};
// Отправим запрос на генерацию задачи моделирования
prxMdService.generateWbk(report, callback);

После выполнения примера в консоль браузера будет выведен JSON-объект,
 содержащий ответ сервера о генерации задачи моделирования.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
