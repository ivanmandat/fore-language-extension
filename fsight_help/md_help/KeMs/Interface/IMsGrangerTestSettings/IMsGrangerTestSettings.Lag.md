# IMsGrangerTestSettings.Lag

IMsGrangerTestSettings.Lag
-


# IMsGrangerTestSettings.Lag


## Синтаксис


Lag: Integer;


## Описание


Свойство Lag определяет значение лага для тестируемых переменных.


## Комментарии


Рекомендуется проводить тест для нескольких различных значений лага и выяснить, насколько сильно размер лага влияет на результаты теста.


Для корректного расчёта теста длина переменной должна удовлетворять соотношению: L ≥ 3 * m + 3. Где: L - количество точек переменной; m - значение лага.


## Пример


Использование свойства приведено в примере для [IMsMetaModelVisualController.GrangerTest](../IMsMetaModelVisualController/IMsMetaModelVisualController.GrangerTest.htm).


См. также:


[IMsGrangerTestSettings](IMsGrangerTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
