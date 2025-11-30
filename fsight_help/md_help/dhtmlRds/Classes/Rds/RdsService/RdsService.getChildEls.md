# RdsService.getChildEls

RdsService.getChildEls
-


# RdsService.getChildEls


## Синтаксис


getChildEls(dict: [PP.Rds.Dictionary](../Dictionary/Dictionary.htm), parentKey: String, callback: function|PP.Delegate, includeRoot: Boolean);


## Параметры


dict. Справочник НСИ;


parentKey. Ключ родительского элемента;


callback. Возвратная функция;


includeRoot. Признак включения в результативный массив корневого элемента. Если параметр равен значению true, то корневой элемент будет включён, иначе - не будет.


## Описание


Метод getChildEls возвращает дочерние элементы справочника НСИ.


## Комментарии


Метод возвращает массив JSON-объектов со следующими полями: a - объект с набором атрибутов, hist - объект с историей значений атрибутов, k - ключ элемента, n - наименование, p - ключ родительского элемента, o - коэффициент прозрачности.


## Пример


Пример использования приведён на странице описания метода [RdsService.beginBatch](RdsService.beginBatch.htm).


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
