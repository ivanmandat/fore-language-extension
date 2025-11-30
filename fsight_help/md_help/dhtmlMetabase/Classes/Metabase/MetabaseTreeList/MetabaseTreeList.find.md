# MetabaseTreeList.find

MetabaseTreeList.find
-


# MetabaseTreeList.find


## Синтаксис


find(findInfo: Object, filter: Object);


## Параметры


findInfo. Метаданные поиска.


filter. Метаданные фильтрации.


## Описание


Метод find производит поиск
 объектов в дереве.


## Комментарии


Структура объектов findInfo
 и filter приведена в описании
 метода [Metabase.findObjects](../Metabase/Metabase.findObjects.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList.htm)
 с наименованием «list1» (см. «[Пример
 создания компонента MetabaseTreeList](../../../Components/Metabase/MetabaseTreeList/MetabaseTreeList_Example.htm)»). Произведем поиск элементов
 в дереве:


// Зададим параметры поиска по имени
findInfo: {
Active: true,
Text: "FindMe",
Attribute: PP.Mb.FindInfoAttribute.Name,
};
// Произведем поиск элементов
list1.find(findInfo);

В результате выполнения примера в дереве были подсвечены найденные элементы.


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
