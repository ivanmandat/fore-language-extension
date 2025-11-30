# ILanerBox.CanExecuteOperation

ILanerBox.CanExecuteOperation
-


# ILanerBox.CanExecuteOperation


## Синтаксис


CanExecuteOperation(Operation: [LanerBoxOperation](../../Enums/LanerBoxOperation.htm)):
 Boolean;


## Параметры


Operation. Тип операции, которую
 необходимо совершить.


## Описание


Метод CanExecuteOperation возвращает
 признак того, можно ли применить указанную операцию к рабочей книге, отображаемой
 в LanerBox.


## Комментарии


Допустимые значения:


	- True. Можно применять
	 указанную операцию к рабочей книге;


	- False. Нельзя применять
	 указанную операцию к рабочей книге.


Для применения операции используйте метод [ILanerBox.ExecuteOperation](ILanerBox.ExecuteOperation.htm).


## Пример


Использование метода приведено в примере для [ILanerBox.ExecuteOperation](ILanerBox.ExecuteOperation.htm).


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
