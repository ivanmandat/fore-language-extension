# IValidationUserComponents.RemoveByKey

IValidationUserComponents.RemoveByKey
-


# IValidationUserComponents.RemoveByKey


## Синтаксис


RemoveByKey(UserComponentKey: Integer): Boolean;


## Параметры


UserComponentKey. Ключ удаляемого
 пользовательского компонента.


## Описание


Метод RemoveByKey удаляет
 пользовательский компонент из коллекции по ключу.


## Комментарии


Метод возвращает результат удаления компонента. Допустимые значения:


	- True. Удаление прошло
	 успешно. Значение свойства [IValidationUserComponents.Count](IValidationUserComponents.Count.htm)
	 уменьшается на единицу;


	- False. Компонент не
	 был удален.


## Пример


Использование метода приведено в примере для [IValidationUserComponents.FindByKey](IValidationUserComponents.FindByKey.htm).


См. также:


[IValidationUserComponents](IValidationUserComponents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
