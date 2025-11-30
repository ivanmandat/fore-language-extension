# Использование R при расчете модели

Использование R при расчете модели
-


# Использование R при расчете модели


Инструмент «Моделирование и прогнозирование»
 позволяет рассчитывать модели с помощью методов пакета R.


Примечание.
 Методы R доступны, если в «Форсайт. Аналитическая платформа»
 подключен пакет R. Подробнее см. раздел: «[Как
 настроить интеграцию с R?](../../../../FAQ/R_Integration.htm)».


Для использования R при расчете модели:


	- Создайте и откройте стандартную модель.


	- Перейдите на вкладку «Параметры».


	- Задайте моделируемую переменную и метод расчета модели. Если
	 метод поддерживает расчет с помощью R, то будет отображен флажок «Использовать при расчете подключение к
	 R». Например:


![](R_Parms.gif)


	- Установите флажок «Использовать
	 при расчете подключение к R».


	- Настройка прочих параметров модели, рассчитываемой R, совпадает
	 с [настройкой параметров](UiModelling_Panel_Param_Attr.htm)
	 стандартной модели.


Модель будет рассчитана с помощью R. Если расчёт с помощью R невозможен,
 то на панели «[Ошибки](UiModelling_Model_Error.htm)»
 будет отображено соответствующее сообщение.


Модели, доступные для расчета с помощью методов пакета R:


	- [Линейная
	 регрессия (оценка МНК)](../Specification/8_Linear_regression/uimodelling_model_specification_linaer_reg.htm). Для данной модели ряд диагностических
	 тестов может быть рассчитан с помощью методов пакета R:


		- [Критерий
		 Годфри автокорреляции остатков](../DiagnosticTest/UiModelling_DiagnTest_SerialCorellationLM.htm);


		- [Критерий
		 функциональной формы](../DiagnosticTest/UiModelling_DiagnTest_RamseyResset.htm);


	- [Линейная
	 регрессия (оценка методом инструментальных переменных)](../Specification/8_Linear_regression/uimodelling_model_specification_linaer_reg2.htm);


	- [Нелинейная
	 регрессия (оценка нелинейным МНК)](../Specification/7_Nonlinear_regression/7_nonlinear_regression.htm);


	- [Медианное
	 сглаживание](../Specification/6_Median_smoothing/6_median_smoothing.htm);


	- [Скользящее
	 среднее](../Specification/2_Slitherring_smoothing/2_Slitherring_smoothing.htm);


	- [Фильтр
	 Ходрика-Прескотта](../Specification/10_Filter_Hodrika_Preskotta/10_filter_hordrika_preskotta.htm);


	- [Фильтр
	 Бакстера-Кинга](../Specification/UiModelling_Specification_BaxterKingFilter.htm);


	- [Экспоненциальное
	 сглаживание](../Specification/5_Exponential_smoothing/uimodelling_model_specification_exponential.htm);


	- [ARIMA](../Specification/1_Arima/uimodelling_model_specification_arima.htm);


	- [R](../Specification/R.htm).


Примечание.
 Подробная информация об особенностях работы методов R приведена в разделе:
 «[Какие
 методы в «Форсайт. Аналитическая платформа»
 можно рассчитать с помощью R?](uinav.chm::/FAQ/Use_of_R.htm)».


См. также:


[Параметры](UiModelling_Panel_Param_Attr.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
