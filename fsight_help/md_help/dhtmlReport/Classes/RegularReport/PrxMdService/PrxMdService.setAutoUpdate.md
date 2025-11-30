# PrxMdService.setAutoUpdate

PrxMdService.setAutoUpdate
-


# PrxMdService.setAutoUpdate


## Синтаксис


setAutoUpdate(report: [PP.Prx.Report](../Report/Report.htm),
 updateSettings: object, callback: PP.Delegate);


## Параметры


report. Отчет, для которого
 настраивается автообновление;


updateSettings. Настройки автообновления;


callback. Процедура обратного
 вызова.


## Описание


Метод setAutoUpdate настраивает
 автоообновление отчета.


## Комментарии


Настройки автообновления updateSettings
 имеют следующие параметры:


	- updateByIntervalEnabled.
	 Параметр определяет использование периодического обновления. Если
	 принимает значение true, то
	 периодическое обновление будет включено, иначе - false;


	- AutoUpdateInterval.
	 Интервал периодического обновления;


	- autoUpdateIntervalUnits.
	 Единица измерения периодического обновления.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» и сервиса для работы с регламентным отчетом
 с наименованием «prxMbService» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Настроим автообновление отчета:


// Зададим настройки автообновления - периодическое обновление с интервалом в 2 секунды
updateSettings = {updateByIntervalEnabled: true, AutoUpdateInterval: 2, autoUpdateIntervalUnits: "Seconds"};
report = reportBox.getSource();
// Применим настройки
prxMbService.setAutoUpdate(report, updateSettings);
// Обновим отчет
reportBox.refreshAll();
В результате выполнения примера будет настроено автообновление отчета.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
