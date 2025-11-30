# IMetabaseCustomClass.ImplementationCoreClass

IMetabaseCustomClass.ImplementationCoreClass
-


# IMetabaseCustomClass.ImplementationCoreClass


## Синтаксис


ImplementationCoreClass: String;


## Описание


Свойство ImplementationCoreClass
 определяет наименование класса без визуальных зависимостей, в котором
 реализованы процедуры для обработки операций.


## Комментарии


Свойство используется при настройке объекта пользовательского класса,
 работа с которым будет осуществляться в веб-приложении. Указанный класс
 должен быть реализован в объекте среды разработки, который указан в свойстве
 [ImplementationCoreAssembly](IMetabaseCustomClass.ImplementationCoreAssembly.htm).
 Требования к методам, реализуемым в классе, указаны в описании свойства
 [ImplementationClass](IMetabaseCustomClass.ImplementationClass.htm).


В реализации методов не должны быть использованы:


	- работа с буфером обмена (использование свойств и методов, осуществляющих
	 копирование/вырезание/вставку в буфер обмена);


	- работа с формами (класс Form) и ресурсами сборки ExtCtrls;


	- использование окон (окна, реализованные в сборке Ui);


	- работа со свойствами, определяющими состояние и положение курсора
	 мыши.


## Пример


Использование свойства приведено в примере для [ImplementationCoreAssembly](IMetabaseCustomClass.ImplementationCoreAssembly.htm).


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
