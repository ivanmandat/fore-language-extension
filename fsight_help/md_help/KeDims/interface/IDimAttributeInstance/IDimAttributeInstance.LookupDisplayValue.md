# IDimAttributeInstance.LookupDisplayValue

IDimAttributeInstance.LookupDisplayValue
-


# IDimAttributeInstance.LookupDisplayValue


## Синтаксис


LookupDisplayValue(Value: Variant): Integer;


## Параметры


Value - отображаемое значение
 атрибута.


## Описание


Метод LookupDisplayValue осуществляет
 поиск отображаемого значения атрибута и возвращает индекс элемента в случае
 удачного поиска.


## Комментарии


Данный метод актуально использовать, если для атрибута свойство [DisplayDifferentValue](IDimAttributeInstance.DisplayDifferentValue.htm)
 возвращает значение True. В этом
 случае поиск с использованием метода [LookupValue](IDimAttributeInstance.LookupValue.htm)
 может не дать результата.


Данный метод возвращает индекс первого найденного элемента, имеющего
 указанное отображаемое значение атрибута. Если указанное значение атрибута
 не найдено, то метод возвращает «-1». Значение, указываемое в параметре
 Value, чувствительно к регистру
 символов. Поиск осуществляется только по полному значению.


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
