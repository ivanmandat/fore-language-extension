# IDimAttributeInstance.DisplayValue

IDimAttributeInstance.DisplayValue
-


# IDimAttributeInstance.DisplayValue


## Синтаксис


DisplayValue(Element: Integer): Variant;


## Параметры


Element - индекс элемента справочника.


## Описание


Свойство DisplayValue возвращает
 отображаемое значение по текущему атрибуту для указанного элемента.


## Комментарии


При использовании в справочниках НСИ связей, отображаемые значения атрибутов,
 используемых для связи, могут иметь тип данных, не совпадающий с типом
 данных самого атрибута. Тип отображаемых данных зависит от установленного
 [формата
 отображения](KeRds.chm::/Interface/IRdsLink/IRdsLink.DisplayFormat.htm). Значение, которое будет отображаться при
 открытии справочника, можно получить используя данное свойство.


## Пример


Пример использования данного свойства приведен в примере для свойства
 [DisplayDifferentValue](IDimAttributeInstance.DisplayDifferentValue.htm).


См. также:


[IDimAttributeInstance](IDimAttributeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
