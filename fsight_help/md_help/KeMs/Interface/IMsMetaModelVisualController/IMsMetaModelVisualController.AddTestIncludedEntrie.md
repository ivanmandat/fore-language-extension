# IMsMetaModelVisualController.AddTestIncludedEntrie

IMsMetaModelVisualController.AddTestIncludedEntrie
-


# IMsMetaModelVisualController.AddTestIncludedEntrie


## Синтаксис


AddTestIncludedEntrie(EntryKey: Integer; Type: [MsVariableTestType](../../Enums/MsVariableTestType.htm)): [IMsVariableTestData](../IMsVariableTestData/IMsVariableTestData.htm);


## Параметры


EntryKey. Ключ элемента цепочки расчёта метамодели, который является переменной;


Type. Тип описательной статистики.


## Описание


Метод AddTestIncludedEntrie добавляет переменную в расчёт указанной описательной статистики.


## Комментарии


Свойство для получения параметров расчёта описательной статистики зависит от значения параметра Type:


 Значение Type
 Свойство
 Описательная статистика


 MsVariableTestType.DF

[IMsMetaModelVisualController.DFTest](IMsMetaModelVisualController.DFTest.htm)

 Расширенный тест Дики-Фуллера.


 MsVariableTestType.Granger

[IMsMetaModelVisualController.GrangerTest](IMsMetaModelVisualController.GrangerTest.htm)

 Тест Гранжера.


 MsVariableTestType.Johansen

[IMsMetaModelVisualController.JohansenTest](IMsMetaModelVisualController.JohansenTest.htm)

 Тест Йохансена.


 MsVariableTestType.PairCorrelation

[IMsMetaModelVisualController.PairCorrelationTest](IMsMetaModelVisualController.PairCorrelationTest.htm)

 Парные коэффициенты корреляции.


## Пример


Использование свойства приведено в примере для [IMsMetaModelVisualController.JohansenTest](IMsMetaModelVisualController.JohansenTest.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
