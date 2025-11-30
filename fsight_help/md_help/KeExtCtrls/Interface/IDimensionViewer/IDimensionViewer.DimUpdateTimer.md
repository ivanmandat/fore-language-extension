# IDimensionViewer.DimUpdateTimer

IDimensionViewer.DimUpdateTimer
-


# IDimensionViewer.DimUpdateTimer


## Синтаксис


DimUpdateTimer: Integer;


## Описание


Свойство DimUpdateTimer определяет
 задержку между выделением элементов и сменой отметки в измерении.


## Комментарии


Значение задержки указывается в миллисекундах.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компоненты:


	- DimensionTree с наименованием
	 «DimensionTree1»;


	- DimensionCombo с наименованием
	 «DimensionCombo1»;


	- UiDimension с наименованием
	 «UiDimension1», являющегося источником данных для «DimensionTree1»
	 и «DimensionCombo1».


Предполагается наличие справочника, который является источником данных
 для «UiDimension1».


	Sub UserProc;

	Begin

	    DimensionTree1.DimUpdateTimer := 5000;

	    DimensionCombo1.DimUpdateTimer := 5000;

	End Sub UserProc;


После выполнения примера задержка между выделением элементов в компонентах
 и сменой отметки в измерении станет равной 5 секундам.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
