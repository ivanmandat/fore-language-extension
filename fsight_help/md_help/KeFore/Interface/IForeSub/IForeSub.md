# IForeSub

IForeSub
-


# IForeSub


Сборка: Fore;


## Описание


Интерфейс IForeSub предназначен
 для работы с пользовательскими методами, а также конструкторами классов.


## Иерархия наследования


IForeSub


## Комментарии


Интерфейс позволяет получить информацию о методах (процедурах или функциях).
 Также можно произвести запуск на выполнение и получить результат в случае
 работы с функциями.


Получить процедуру/функцию/конструктор можно с помощью методов: [IForeAssembly.BindToSub](../IForeAssembly/IForeAssembly.BindToSub.htm),
 [IForeAssembly.SubItem](../IForeAssembly/IForeAssembly.SubItem.htm),
 [IForeClass.BindToMethod](../IForeClass/IForeClass.BindToMethod.htm),
 IForeClass.BindToMethodEx,
 [IForeClass.SubItem](../IForeClass/IForeClass.SubItem.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsConstructor](IForeSub.IsConstructor.htm)
		 Свойство IsConstructor
		 возвращает признак соответствия конструктору класса.


		 ![](../../Property_Image.gif)
		 [IsResult](IForeSub.IsResult.htm)
		 Свойство IsResult возвращает
		 признак возврата результата.


		 ![](../../Property_Image.gif)
		 [IsStatic](IForeSub.IsStatic.htm)
		 Свойство IsStatic возвращает
		 признак соответствия статической процедуре/функции.


		 ![](../../Property_Image.gif)
		 [ModuleName](IForeSub.ModuleName.htm)
		 Свойство ModuleName
		 возвращает наименование модуля, в котором находится непосредственная
		 реализация метода.


		 ![](../../Property_Image.gif)
		 [Name](IForeSub.Name.htm)
		 Свойство Name
		 возвращает наименование процедуры/функции/конструктора.


		 ![](../../Property_Image.gif)
		 [OrderNumber](IForeSub.OrderNumber.htm)
		 Свойство OrderNumber
		 возвращает порядковый номер метода в коде.


		 ![](../../Property_Image.gif)
		 [Params](IForeSub.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров метода.


		 ![](../../Property_Image.gif)
		 [ResultName](IForeSub.ResultName.htm)
		 Свойство ResultName
		 возвращает наименование типа у результата функции.


		 ![](../../Property_Image.gif)
		 [ResultType](IForeSub.ResultType.htm)
		 Свойство ResultType
		 возвращает тип результата функции.


		 ![](../../Property_Image.gif)
		 [ResultValue](IForeSub.ResultValue.htm)
		 Свойство ResultValue
		 возвращает результат выполнения функции.


		 ![](../../Property_Image.gif)
		 [Self](IForeSub.Self.htm)
		 Свойство Self определяет
		 экземпляр родительского класса, в рамках которого будет выполнятся
		 метод.


		 ![](../../Property_Image.gif)
		 [SubAccessSpecificatorKind](IForeSub.SubAccessSpecificatorKind.htm)
		 Свойство SubAccessSpecificatorKind
		 возвращает модификатор доступа метода.


		 ![](../../Property_Image.gif)
		 [SubType](IForeSub.SubType.htm)
		 Свойство SubType возвращает
		 тип структуры метода в коде.


		 ![](../../Property_Image.gif)
		 [XMLDocumentation](IForeSub.XMLDocumentation.htm)
		 Свойство XMLDocumentation
		 возвращает XML-комментарий, который задан для текущей процедуры/функции/конструктора.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Invoke](IForeSub.Invoke.htm)
		 Метод Invoke запускает
		 на выполнение текущую процедуру/функцию.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
