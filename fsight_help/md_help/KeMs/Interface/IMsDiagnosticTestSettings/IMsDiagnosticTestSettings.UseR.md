# IMsDiagnosticTestSettings.UseR

IMsDiagnosticTestSettings.UseR
-


# IMsDiagnosticTestSettings.UseR


## Синтаксис


		UseR: Boolean;


## Описание


Свойство UseR определяет
 признак использования подключения к R при расчёте диагностического теста.


## Комментарии


Допустимые значения:


	- True. Диагностический
	 тест рассчитывается с помощью R. Для этого в репозитории должна быть
	 настроена интеграция с R. Подробнее о том, как можно настроить интеграцию,
	 смотрите в разделе «[Как
	 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)»;


	- False. Диагностический
	 тест рассчитывается с помощью «Форсайт. Аналитическая платформа».


Для получения информации о возможности расчёта диагностического теста
 с помощью R используйте свойство [IMsDiagnosticTestSettings.SupportsR](IMsDiagnosticTestSettings.SupportsR.htm).


## Пример


Использование свойства приведено в примере для [IMsDiagnosticTestResults.CoefficientsNames](../IMsDiagnosticTestResults/IMsDiagnosticTestResults.CoefficientsNames.htm).


См. также:


[IMsDiagnosticTestSettings](IMsDiagnosticTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
