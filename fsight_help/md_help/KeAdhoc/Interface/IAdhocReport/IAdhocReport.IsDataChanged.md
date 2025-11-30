# IAdhocReport.IsDataChanged

IAdhocReport.IsDataChanged
-


# IAdhocReport.IsDataChanged


## Синтаксис


IsDataChanged: Boolean;


## Описание


Свойство IsDataChanged определяет,
 изменены ли данные в визуализаторе «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


## Комментарии


Допустимые значения:


	- True. Данные изменены.
	 Для сохранения измененных данных используйте метод [IAdhocReport.SaveData](IAdhocReport.SaveData.htm);


	- False. Данные не изменены.
	 Если установить свойству данное значение, то все изменения в данных
	 будут отменены.


В визуализаторе «Таблица» разрешено
 изменение данных, если [IAdhocReport.AllowEditData](IAdhocReport.AllowEditData.htm)
 имеет значение True.


## Пример


Использование свойства приведено в примере для [IAdhocReport.SaveData](IAdhocReport.SaveData.htm).


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
