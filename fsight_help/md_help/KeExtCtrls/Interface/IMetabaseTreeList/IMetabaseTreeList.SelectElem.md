# IMetabaseTreeList.SelectElem

IMetabaseTreeList.SelectElem
-


# IMetabaseTreeList.SelectElem


## Синтаксис


SelectElem(Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
 [Focus: Boolean = False]);


## Параметры


Object. Описание объекта репозитория,
 для которого необходимо отметить соответствующий элемент в дереве элементов
 компонента;


Focus. Параметр, определяющий
 будет ли данный элемент фокусироваться в дереве компонента. По умолчанию
 передается значение False, при
 этом фокусировка элемента не производится. Если передавать значение True, то элемент будет сфокусирован
 в дереве компонента.


## Описание


Метод SelectElem осуществляет
 отметку элемента, который соответствует объекту репозитория, передаваемому
 посредством параметра Object.


См. также:


[IMetabaseTreeList](IMetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
