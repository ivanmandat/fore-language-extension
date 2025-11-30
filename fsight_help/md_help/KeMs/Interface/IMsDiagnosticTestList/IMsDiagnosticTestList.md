# IMsDiagnosticTestList

IMsDiagnosticTestList
-


# IMsDiagnosticTestList


Сборка: Ms;


## Описание


Интерфейс IMsDiagnosticTestList
 предназначен для работы с набором диагностических тестов модели.


## Иерархия наследования


           IMsDiagnosticTestList


## Комментарии


Диагностические тесты могут быть выполнены для следующих моделей:


	- [линейная
	 регрессия (оценка МНК)](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm);


	- [ARIMA](../IMsArimaTransform/IMsArimaTransform.htm).


Тесты возвращает свойство DiagnosticTests.
 Набор тестов нельзя изменить, т.е. удалить существующий или добавить
 собственный тест.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsDiagnosticTestList.Count.htm)
		 Свойство Count возвращает
		 число тестов в наборе.


		 ![](../../Property_Image.gif)
		 [FindByType](IMsDiagnosticTestList.FindByType.htm)
		 Свойство FindByType
		 возвращает тест указанного типа.


		 ![](../../Property_Image.gif)
		 [Item](IMsDiagnosticTestList.Item.htm)
		 Свойство Item возвращает
		 тест с указанным индексом.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
