# PrxMdService.StartMetabaseRequest

PrxMdService.StartMetabaseRequest
-


# PrxMdService.StartMetabaseRequest


## Синтаксис


StartMetabaseRequest: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие StartMetabaseRequest наступает в начале выполнения запроса к метабазе.


## Пример


Для выполнения примера необходимо, чтобы на html-странице было создано соединение с метабазой (metabase) и подключены ссылки на необходимые js-и css-файлы (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Создадим сервис для работы с регламентными отчетами:


         prxMbService = new PP.Prx.PrxMdService({
	Metabase: metabase,
	StartMetabaseRequest: function () {
	       alert("Начало запроса")
	  },
	Opened: function () {
	       alert("Открытие отчета")
	  },
	EndMetabaseRequest: function () {
	       alert("Конец запроса")}
	 });

После выполнения примера в начале и конце запроса к метабазе и после открытия отчета будут выдаваться соответствующие сообщения.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
