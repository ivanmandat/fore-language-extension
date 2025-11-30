# IForeSub.Invoke

IForeSub.Invoke
-


# IForeSub.Invoke


## Синтаксис


		Invoke;


## Описание


Метод Invoke запускает на выполнение
 текущую процедуру/функцию.


## Комментарии


Перед запуском на выполнение должны быть выполнены следующие условия:


	- Для параметрических процедур/функций в свойстве [Params](IForeSub.Params.htm) заданы значения параметров;


	- Для процедур/функций, которые реализованы в классе и не имеют
	 в своей сигнатуре директиву [Shared](Fore.chm::/02_GeneralInfo/Fore_ClassesAndObjects.htm#shared)
	 (свойство [IsStatic](IForeSub.IsStatic.htm) возвращает
	 False), в свойстве [Self](IForeSub.Self.htm) задан экземпляр класса.


При работе с функциями, после запуска их на выполнение, результат работы
 можно получить в свойстве [ResultValue](IForeSub.ResultValue.htm).
 Результат работы процедур будет обусловлен тем кодом, который в них реализован.


## Пример


Пример использования приведён в описании метода [IForeClass.BindToMethod](../IForeClass/IForeClass.BindToMethod.htm).


См. также:


[IForeSub](IForeSub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
