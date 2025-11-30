# IPrxTableDataBinding.AttachRange

IPrxTableDataBinding.AttachRange
-


# IPrxTableDataBinding.AttachRange


## Синтаксис


AttachRange(TabRange: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 Slice: [IPrxSlice](../IPrxSlice/IPrxSlice.htm); Selection:
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 Boolean;


## Параметры


TabRange - диапазон ячеек листа;


Slice - срез источника данных;


Selection - отметка среза;


## Описание


Метод AttachRange осуществляет
 привязку диапазона ячеек к срезу данных.


## Комментарии


Количество отмеченных элементов в срезе должно соответствовать размеру
 диапазона. Метод возвращает True
 при успешном завершении, False
 - при неудаче.


При вычислении листа привязка сбрасывается.


## Пример


Использование метода приведено в примере для [IPrxTable.DataBinding](../IPrxTable/IPrxTable.DataBinding.htm).


См. также:


[IPrxTableDataBinding](IPrxTableDataBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
