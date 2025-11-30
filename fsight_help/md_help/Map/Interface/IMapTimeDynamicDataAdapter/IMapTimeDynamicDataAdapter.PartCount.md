# IMapTimeDynamicDataAdapter.PartCount

IMapTimeDynamicDataAdapter.PartCount
-


# IMapTimeDynamicDataAdapter.PartCount


## Синтаксис


PartCount(Attribute: Variant; TimePointIndex: Integer):
 Integer;


## Параметры


Attribute. Параметр
 определяет, какие данные возвращает динамический временной адаптер;


TimePointIndex. Параметр определяет
 временную точку.


## Описание


Свойство PartCount возвращает
 количество составных частей показателя для временной точки.


## Комментарии


Для столбикового показателя свойство возвращает количество столбиков
 в указанную временную точку. Список типов показателей, связываемых со
 слоями карты, представлен в разделе «[Атрибуты](UiReport.chm::/Desktop/Maps/UiMaps_Report_property_1.htm)».


Временная точка задается с помощью параметра TimePointIndex.


## Пример


Пример использования свойства приведен в примере для [IMapTimeDynamicDataAdapter.Data](IMapTimeDynamicDataAdapter.Data.htm).


См. также:


[IMapTimeDynamicDataAdapter](IMapTimeDynamicDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
