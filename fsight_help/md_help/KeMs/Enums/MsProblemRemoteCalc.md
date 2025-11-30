# MsProblemRemoteCalc

MsProblemRemoteCalc
-


# MsProblemRemoteCalc


## Описание


Перечисление MsProblemRemoteCalc
 используется для определения режима расчёта задачи моделирования.


Используется следующим свойством:


	- [IMsProblemCalculationSettings.RemoteCalc](../Interface/IMsProblemCalculationSettings/IMsProblemCalculationSettings.RemoteCalc.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Disable. Задача моделирования
		 рассчитывается локально.


		 1
		 Enable. Задача моделирования
		 рассчитывается удалённо на BI-сервере, указанном в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


		 2
		 EnableBySources. Задача
		 моделирования рассчитывается удалённо на BI-сервере, указанном
		 в свойстве [IMsProblemCalculationProxy.Address](../Interface/IMsProblemCalculationProxy/IMsProblemCalculationProxy.Address.htm).
		 Если свойство не задано, то для расчёта используется BI-сервер,
		 указанный в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
