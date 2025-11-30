# IEaxDataArea.BeginUpdate

IEaxDataArea.BeginUpdate
-


# IEaxDataArea.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate блокирует
 обновление при внесении изменений в настройки аналитической области данных.


## Комментарии


После вызова данного метода будет блокироваться применение настроек,
 вносимых в [срезы данных](IEaxDataArea.Slices.htm) и их [представления](IEaxDataArea.Views.htm). Применение всех изменений
 и возобновление работы аналитической области данных осуществляется после
 вызова метода [IEaxDataArea.EndUpdate](IEaxDataArea.EndUpdate.htm).


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
