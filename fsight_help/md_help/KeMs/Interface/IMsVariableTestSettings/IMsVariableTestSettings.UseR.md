# IMsVariableTestSettings.UseR

IMsVariableTestSettings.UseR
-


# IMsVariableTestSettings.UseR


## Синтаксис


UseR: Boolean;


## Описание


Свойство UseR определяет,
 используется ли при расчете описательной статистики подключение к R.


## Комментарии


Для получения информации о том, возможен ли расчет описательной статистики
 с помощью R, используйте свойство [IMsVariableTestSettings.SupportsR](IMsVariableTestSettings.SupportsR.htm).


Допустимые значения:


	- True. Описательная статистика
	 рассчитывается с помощью R. Для этого в репозитории должна быть настроена
	 интеграция с R. Подробнее о том, как можно настроить интеграцию вы
	 можете узнать в разделе «[Как настроить
	 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)»;


	- False. Описательная
	 статистика рассчитывается с помощью «Форсайт. Аналитическая платформа».


## Пример


Использование свойства приведено в примере для [IMsMetaModelVisualController.DFTest](../IMsMetaModelVisualController/IMsMetaModelVisualController.DFTest.htm).


См. также:


[IMsVariableTestSettings](IMsVariableTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
