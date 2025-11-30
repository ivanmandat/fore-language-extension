# EaxMdService.setAutoUpdate

EaxMdService.setAutoUpdate
-


# EaxMdService.setAutoUpdate


## Синтаксис


setAutoUpdate(report: [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 updateSettings: object, callback: PP.Delegate);


## Параметры


report. Отчет, для которого
 настраивается автообновление;


updateSettings. Настройки автообновления;


callback. Процедура обратного
 вызова.


## Описание


Метод setAutoUpdate настраивает
 автоообновление экспресс-отчета.


## Комментарии


Настройки автообновления updateSettings
 имеют следующие параметры:


	- updateByIntervalEnabled.
	 Параметр определяет использование периодического обновления. Если
	 принимает значение true, то
	 периодическое обновление будет включено, иначе - false;


	- autoUpdateByData. Параметр
	 определяет, будет ли включено автообновление при смене отметки. Если
	 принимает значение true, то
	 автообновление при смене отметки будет включено, иначе - false;


	- AutoUpdateInterval.
	 Интервал периодического обновления;


	- autoUpdateIntervalUnits.
	 Единица измерения периодического обновления.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Настроим автообновление экспресс-отчета:


// Зададим настройки автообновления - включим периодическое обновление с интервалом в 2 секунды и автообновление при смене отметки
updateSettings = {updateByIntervalEnabled: true, autoUpdateByData: true, AutoUpdateInterval: 2, autoUpdateIntervalUnits: "Seconds"};
report = expressBox.getSource();
// Применим настройки
eaxMdService.setAutoUpdate(report, updateSettings);
// Обновим отчет
expressBox.refreshAll();
В результате выполнения примера будет настроено автообновление экспресс-отчета.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
