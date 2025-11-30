# IForeSub.IsResult

IForeSub.IsResult
-


# IForeSub.IsResult


## Синтаксис


		IsResult: Boolean;


## Описание


Свойство IsResult возвращает
 признак возврата результата.


## Комментарии


Допустимые значения:


	- True. Метод возвращает
	 результат, то есть соответствует функции. Информацию о результате
	 можно получить в свойствах [ResultName](IForeSub.ResultName.htm),
	 [ResultType](IForeSub.ResultType.htm). После выполнения
	 функции результат возвращает свойство [ResultValue](IForeSub.ResultValue.htm);


	- False. Метод не возвращает
	 результат, то есть соответствует процедуре.


Также для определения типа структуры модуля (процедура, функция, делегат)
 используйте свойство [IForeSub.SubType](IForeSub.SubType.htm).


## Пример


Пример использования приведён в описании метода [IForeAssembly.BindToClass](../IForeAssembly/IForeAssembly.BindToClass.htm).


См. также:


[IForeSub](IForeSub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
