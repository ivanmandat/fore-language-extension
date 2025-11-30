# IValidationUserComponents.Remove

IValidationUserComponents.Remove
-


# IValidationUserComponents.Remove


## Синтаксис


Remove(Index: Integer;): Boolean;


## Параметры


Index. Индекс пользовательского
 компонента в коллекции.


## Описание


Метод Remove удаляет пользовательский
 компонент из коллекции по индексу.


## Комментарии


Значение параметра Index должно
 быть неотрицательным числом, но меньше значения [IValidationUserComponents.Count](IValidationUserComponents.Count.htm).
 Нумерация индексов сквозная и начинается с нуля.


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
