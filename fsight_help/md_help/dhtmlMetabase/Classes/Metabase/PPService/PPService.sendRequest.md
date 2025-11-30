# PPService.sendRequest

PPService.sendRequest
-


**


# PPService.sendRequest


## Синтаксис


sendRequest (body: String, callbackDelegate: PP.Delegate,
 errorCallbackDelegate: PP.Delegate, contentType: String, urlParams: String,
 language: String)


## Параметры


body. Тело запроса к веб-сервису;


callbackDelegate. Процедура
 обратного вызова;


errorCallbackDelegate. Процедура
 обратного вызова при ошибке;


contentType. Используемый протокол:


	- application/json. Используется
	 протокол JSON-RPC. По умолчанию;


	- text/xml. Используется
	 протокол SOAP.


urlParams. Параметры URL запроса;


language. Языковые настройки.
 Можно вернуть при помощи метода [PP.getCurrentCulture](dhtmlCommon.chm::/Classes/PP/PP.getCurrentCulture.htm).CultureName.


## Описание


Метод sendRequest** отправляет запрос веб-сервису.


## Комментарии


Обязательным параметром является body.
 Запрос нужно отправлять в виде строки. Чтобы перевести JSON в строку,
 используйте метод JSON.stringify.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ReportBox](dhtmlReport.chm::/Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](dhtmlReport.chm::/Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В JSON-объект в
 параметрах конструктора [сервиса](dhtmlReport.chm::/Classes/RegularReport/PrxMdService/PrxMdService.htm)
 «prxMbService» добавьте свойство [PPService.PPServiceUrl](PPService.PPServiceUrl.htm),
 где пропишите URL-адрес, по которому будет отправлен запрос (то же значение
 свойства [PPServiceUrl](PPService.PPServiceUrl.htm), что установлено
 в параметрах конструктора [Metabase](../Metabase/Metabase.htm)).
 Отправим запрос с опреацией SetTabSheetData
 (установка данных таблицы отчета):


var body = {
   SetTabSheetData: {
      tTabSheet: prxReport.getTabId(), //моникер табличного листа
      tArg: {
         refresh: {
            all: false,
            saveData: true
         },
         setPattern: {
            data: true
         },
         TabSheetData: {
            Cells: {
               Cell: reportBox.getDataView().getGridView().getTabSheet().getChangedCells() //ячейки с измененными данными
            }
         },
         getArg: {
            pattern: {
               data: true
            }
         }
      }
   }
};
prxBody = JSON.stringify(body); //переводим JSON в строку
prxMbService.clearRequests(); //очищаем список запросов из очереди и удаляем текущий запрос
prxMbService.sendRequest(prxBody); //отправляем запрос
//добавляем процедуру обратного вызова для запроса
prxMbService.addCallbackToLastRqt(new PP.Delegate(function (sender, args) {
         console.log(args.ResponseText)
      }));

После выполнения примера веб-сервису будет отправлен запрос с операцией
 SetTabSheetData. В консоль браузера
 будет выведен ответ от сервиса и значение true, указывающее, что для запроса
 установлена процедура обратного вызова.


См. также:


[PPService](PPService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
