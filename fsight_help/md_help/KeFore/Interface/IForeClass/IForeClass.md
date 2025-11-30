# IForeClass

IForeClass
-


# IForeClass


Сборка: Fore;


## Описание


Интерфейс IForeClass предназначен
 для работы с конструкциями, которые могут быть реализованы в Fore-сборке.


## Иерархия наследования


IForeClass


## Комментарии


Интерфейс позволяет получить информацию о классах, интерфейсах и перечислениях.
 Получить конструкцию сборки можно с помощью метода [IForeAssembly.BindToClass](../IForeAssembly/IForeAssembly.BindToClass.htm)
 или [IForeAssembly.ClassItem](../IForeAssembly/IForeAssembly.ClassItem.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClassAccessSpecificatorKind](IForeClass.ClassAccessSpecificatorKind.htm)
		 Свойство ClassAccessSpecificatorKind
		 возвращает модификатор доступа конструкции.


		 ![](../../Property_Image.gif)
		 [ClassType](IForeClass.ClassType.htm)
		 Свойство ClassType
		 возвращает тип конструкции.


		 ![](../../Property_Image.gif)
		 [Name](IForeClass.Name.htm)
		 Свойство Name возвращает
		 наименование конструкции.


		 ![](../../Property_Image.gif)
		 [ParentName](IForeClass.ParentName.htm)
		 Свойство ParentName
		 возвращает наименование родительского класса/интерфейса.


		 ![](../../Property_Image.gif)
		 [XMLDocumentation](IForeClass.XMLDocumentation.htm)
		 Свойство XMLDocumentation
		 возвращает XML-комментарий, который задан для текущей конструкции.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BindToMethod](IForeClass.BindToMethod.htm)
		 Метод BindToMethod
		 возвращает информацию о процедуре/функции с указанным именем.


		 ![](../../Sub_Image.gif)
		 [BindToProperty](IForeClass.BindToProperty.htm)
		 Метод BindToProperty
		 возвращает информацию об указанном свойстве.


		 ![](../../Sub_Image.gif)
		 [CreateObject](IForeClass.CreateObject.htm)
		 Метод CreateObject
		 создаёт экземпляр объекта текущего класса.


		 ![](../../Sub_Image.gif)
		 [IsHaveClassOrInterface](IForeClass.IsHaveClassOrInterface.htm)
		 Метод IsHaveClassOrInterface
		 осуществляет проверку и возвращает признак наличия наследования
		 текущей конструкции от указанного класса/интерфейса.


		 ![](../../Sub_Image.gif)
		 [PropertiesCount](IForeClass.PropertiesCount.htm)
		 Метод PropertiesCount
		 возвращает количество свойств, реализованных в текущей конструкции.


		 ![](../../Sub_Image.gif)
		 [PropertyItem](IForeClass.PropertyItem.htm)
		 Метод PropertyItem
		 возвращает информацию о свойстве с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [SubItem](IForeClass.SubItem.htm)
		 Метод SubItem возвращает
		 информацию о процедуре/функции с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [SubsCount](IForeClass.SubsCount.htm)
		 Метод SubsCount возвращает
		 количество процедур/функций, реализованных в текущей конструкции.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
