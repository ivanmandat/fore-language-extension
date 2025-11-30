# IABACEngine.SetCallback

IABACEngine.SetCallback
-


# IABACEngine.SetCallback


## Синтаксис


SetCallback(Callback: [IABACEvaluateCallback](../IABACEvaluateCallback/IABACEvaluateCallback.htm));


## Параметры


Callback. Функция, определяющая
 значение атрибута.


## Описание


Метод SetCallback задает функцию,
 определяющую значение атрибута, если атрибут субъекта или объекта неопределен.


## Комментарии


Метод используется с методом [IABACEngine.Evaluate](IABACEngine.Evaluate.htm)
 для вычисления доступа субъекта к объекту.


Для определения функции используйте метод [IABACEvaluateCallback.AttrValue](../IABACEvaluateCallback/IABACEvaluateCallback.AttrValue.htm).


## Пример


Использование метода приведено в примере для [IABACEngine.Evaluate](IABACEngine.Evaluate.htm).


См. также:


[IABACEngine](IABACEngine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
