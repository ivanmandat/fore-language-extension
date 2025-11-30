# IPrxUserButtonActionMethod

IPrxUserButtonActionMethod
-


# IPrxUserButtonActionMethod


Сборка: Report;


## Описание


Интерфейс IPrxUserButtonActionMethod
 предназначен для настройки Fore-метода и JavaScript-функции в качестве
 обработчика пользовательской кнопки.


## Иерархия наследования


           [IPrxUserButtonAction](../IPrxUserButtonAction/IPrxUserButtonAction.htm)


           [IPrxUserButtonActionForeMethod](../IPrxUserButtonActionForeMethod/IPrxUserButtonActionForeMethod.htm)


           IPrxUserButtonActionMethod


## Комментарии


Настройки обработчика можно получить, используя свойства [IPrxUserButton.AfterAction](../IPrxUserButton/IPrxUserButton.AfterAction.htm),
 [IPrxUserButton.BeforeAction](../IPrxUserButton/IPrxUserButton.BeforeAction.htm).


Также к интерфейсу IPrxUserButtonActionMethod
 может быть приведено свойство [IPrxUserButton.Action](../IPrxUserButton/IPrxUserButton.Action.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [JsFunction](IPrxUserButtonActionMethod.JsFunction.htm)
		 Свойство JsFunction
		 определяет JavaScript-метод, который должен срабатывать при запуске
		 обработчика.


## Свойства, унаследованные от [IPrxUserButtonActionForeMethod](../IPrxUserButtonActionForeMethod/IPrxUserButtonActionForeMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ForeMethod](../IPrxUserButtonActionForeMethod/IPrxUserButtonActionForeMethod.ForeMethod.htm)
		 Свойство ForeMethod
		 определяет Fore-метод, который должен срабатывать при запуске
		 обработчика.


## Методы, унаследованные от [IPrxUserButtonAction](../IPrxUserButtonAction/IPrxUserButtonAction.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Invoke](../IPrxUserButtonAction/IPrxUserButtonAction.Invoke.htm)
		 Метод Invoke выполняет
		 обработчик действия кнопки и возвращает полученный результат.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
