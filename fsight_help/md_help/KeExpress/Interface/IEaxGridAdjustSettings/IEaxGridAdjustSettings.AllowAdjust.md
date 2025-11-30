# IEaxGridAdjustSettings.AllowAdjust

IEaxGridAdjustSettings.AllowAdjust
-


# IEaxGridAdjustSettings.AllowAdjust


## Синтаксис


AllowAdjust: Boolean;


## Описание


Свойство AllowAdjust определяет,
 будет ли производиться автоподбор размера ячеек.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом осуществляется автоматический подбор размера ячеек во время [обновления](../IEaxObject/IEaxObject.Refresh.htm) содержимого
 таблицы. Также автоподбор размера ячеек осуществляется при изменении настроек
 с помощью свойств текущего интерфейса [IEaxGridAdjustSettings](IEaxGridAdjustSettings.htm).


Если свойству установить значение False,
 то автоматический подбор размера ячеек выполняться не будет. Для выполнения
 автоподбора может быть использован метод [IEaxGrid.Adjust](../IEaxGrid/IEaxGrid.Adjust.htm).


## Пример


Использование свойства приведено в примере для [IEaxGrid.Adjust](../IEaxGrid/IEaxGrid.Adjust.htm).


См. также:


[IEaxGridAdjustSettings](IEaxGridAdjustSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
