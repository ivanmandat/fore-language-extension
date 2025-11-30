# IWxConnector.LastPointAutoCpSelect

IWxConnector.LastPointAutoCpSelect
-


# IWxConnector.LastPointAutoCpSelect


## Синтаксис


LastPointAutoCpSelect: Boolean;


## Описание


Свойство LastPointAutoCpSelect
 определяет признак использования автоматического выбора точки при соединении
 конца соединяющего объекта с другой фигурой.


## Комментарии


Если значение данного свойства True,
 то связь будет привязана к одной из точек соединения "по периметру"
 в зависимости от места положения объекта, то есть фактически для соединения
 используется точка соединения "по центру".


Если значение данного свойства False,
 то связь будет всегда привязана к одной [точке
 соединения](UiWsp.chm::/2_WorkSpace/Objects_Work/UiWsp_ObjectsWork_Points.htm) объекта вне зависимости от места расположения объекта.


По умолчанию свойство имеет значение False.


## Пример


Пример использования приведен в описании [IWxConnector.FirstPointAutoCpSelect](IWxConnector.FirstPointAutoCpSelect.htm).


См. также:


[IWxConnector](IWxConnector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
