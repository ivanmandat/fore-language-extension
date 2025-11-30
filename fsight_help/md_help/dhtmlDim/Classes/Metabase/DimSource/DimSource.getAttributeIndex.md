# DimSource.getAttributeIndex

DimSource.getAttributeIndex
-


# DimSource.getAttributeIndex


## Синтаксис


getAttributeIndex (attributeId);


## Параметры


attributeId. Идентификатор
 атрибута.


## Описание


Метод getAttributeIndex возвращает
 индекс атрибута справочника по идентификатору.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [DimTree](../../../Components/Metabase/DimTree/DimTree.htm)
 с наименованием «dimTree», для которого установлен источник - справочник
 с наименованием «dim» (см. «[Пример
 создания компонента DimTree](../../../Components/Metabase/DimTree/DimTree_Example.htm)»). Для каждого элемента справочника настроено
 как минимум три атрибута. Вернем текст последнего выделенного элемента
 по третьему атрибуту:


attrId = dim.getAttributes()[2].id;


textLast = dim.[getLastSelectedText](DimSource.getLastSelectedText.htm)(attrId);


textFirst = dim.[getFirstSelectedText](DimSource.getFirstSelectedText.htm)(attrId);


После выполнения примера в переменных «textLast» и «textFirst» будут
 содержаться соответственно текст последнего и первого выделенных элементов
 по третьему атрибуту.


См. также:


[DimSource](DimSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
