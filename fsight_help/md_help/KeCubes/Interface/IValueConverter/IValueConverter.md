# IValueConverter

IValueConverter
-


# IValueConverter


Сборка: Cubes;


## Описание


Интерфейс IValueConverter предназначен
 для преобразования загружаемых данных.


## Иерархия наследования


           IValueConverter


## Комментарии


Преобразование данных выполняется с помощью объекта пользовательского
 класса, являющегося потомком интерфейса [IValueConverter](IValueConverter.htm).
 Пример реализации преобразователя приведен в описании свойства [IValueConverter.Convert](IValueConverter.Convert.htm).


Использование пользовательского класса приведено в примере для [ITableCreator.Execute](../ITableCreator/ITableCreator.Execute.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataType](IValueConverter.DataType.htm)
		 Свойство DataType
		 возвращает тип данных, полученный после преобразования.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Convert](IValueConverter.Convert.htm)
		 Метод Convert
		 преобразует указанное значение.


		 ![](../../Sub_Image.gif)
		 [TryConvert](IValueConverter.TryConvert.htm)
		 Метод TryConvert
		 пробует выполнить преобразование данных и возвращает признак успешности
		 преобразования.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
