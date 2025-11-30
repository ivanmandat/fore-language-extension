# IMsVariableTest.Settings

IMsVariableTest.Settings
-


# IMsVariableTest.Settings


## Синтаксис


Settings: [IMsVariableTestSettings](../IMsVariableTestSettings/IMsVariableTestSettings.htm);


## Описание


Свойство Settings возвращает общие параметры расчёта описательной статистики.


## Комментарии


Специфические параметры расчёта зависят от типа описательной статистики. Для получения типа рассчитываемой статистики используйте свойство [IMsVariableTest.Type](IMsVariableTest.Type.htm).


Для получения специфических параметров расчёта приведите значение, возвращаемое свойством Settings, к интерфейсу, соответствующему типу статистики:


 Значение IMsVariableTest.Type
 Интерфейс
 Описательная статистика


 MsVariableTestType.DF

[IMsDFTestSettings](../IMsDFTestSettings/IMsDFTestSettings.htm)

 Расширенный тест Дики-Фуллера.


 MsVariableTestType.Granger

[IMsGrangerTestSettings](../IMsGrangerTestSettings/IMsGrangerTestSettings.htm)

 Тест Гранжера.


 MsVariableTestType.Johansen

[IMsJohansenTestSettings](../IMsJohansenTestSettings/IMsJohansenTestSettings.htm)

 Тест Йохансена.


 MsVariableTestType.PairCorrelation

[IMsPairCorrelationTestSettings](../IMsPairCorrelationTestSettings/IMsPairCorrelationTestSettings.htm)

 Парные коэффициенты корреляции.


## Пример


Использование свойства приведено в примере для [IMsMetaModelVisualController.DFTest](../IMsMetaModelVisualController/IMsMetaModelVisualController.DFTest.htm).


См. также:


[IMsVariableTest](IMsVariableTest.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
