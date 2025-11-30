# ILaner.IsInContext

ILaner.IsInContext
-


# ILaner.IsInContext


## Синтаксис


IsInContext: Boolean;


## Описание


Свойство IsInContext возвращает
 признак того, зарегистрирована ли рабочая книга в контексте.


## Комментарии


Допустимые значения:


	- True. Рабочая книга
	 зарегистрирована в контексте. Для отключения от контекста используйте
	 метод [ILanerContext.Unregister](../ILanerContext/ILanerContext.Unregister.htm);


	- False. Рабочая книга
	 не зарегистрирована в контексте. Для регистрации используйте метод
	 [ILanerContext.Register](../ILanerContext/ILanerContext.Register.htm).


## Пример


Использование свойства приведено в примере для [ILanerContext.DataLoadStartDate](../ILanerContext/ILanerContext.DataLoadStartDate.htm).


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
