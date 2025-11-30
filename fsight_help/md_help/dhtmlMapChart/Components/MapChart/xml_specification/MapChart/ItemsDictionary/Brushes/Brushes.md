# Кисти

Кисти
-


# Кисти


В [словаре элементов](../ItemsDictionary.htm) могут размещаться
 коллекции кистей следующих видов:


	- кисть со сплошной заливкой ([SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm));


	- кисть линейного градиента ([LinearGradientBrush](dhtmlCommon.chm::/Classes/PP/LinearGradientBrush/LinearGradientBrush.htm));


	- кисть радиального градиента ([RadialGradientBrush](dhtmlCommon.chm::/Classes/PP/LinearGradientBrush/LinearGradientBrush.htm)).


[Пример настройки списка кистей](Brushes_exmpl.htm)


## Элемент SolidColorBrush


Элемент SolidColorBrush представляет
 собой коллекцию кистей со сплошной заливкой. Элемент коллекции - экземпляр
 класса [SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm).


### Атрибуты элемента коллекции


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор кисти.


		 Color
		 String
		 Имя или HTML-представление цвета кисти.


		 Opacity
		 Double
		 Прозрачность
		 кисти. Значения от 0 до 1.


## Элемент LinearGradientBrush


Элемент LinearGradientBrush
 представляет собой коллекцию кистей со сплошной заливкой. Элемент коллекции
 - экземпляр класса [LinearGradientBrush](dhtmlCommon.chm::/Classes/PP/LinearGradientBrush/LinearGradientBrush.htm).


### Атрибуты элемента коллекции


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор кисти.


		 StartPoint
		 [Point](dhtmlCommon.chm::/Classes/PP/Point/Point.htm)
		 Стартовая точка градиента.


		 EndPoint
		 [Point](dhtmlCommon.chm::/Classes/PP/Point/Point.htm)
		 Конечная точка градиента.


		 Opacity
		 Double
		 Прозрачность
		 кисти. Значения от 0 до 1.


### Вложенный элемент коллекции


Список точек линейного градиента содержится в элементе GradientStops.
 Описание точки линейного градиента содержится в элементе [GradientStop](dhtmlCommon.chm::/Classes/PP/GradientStop/GradientStop.htm).


### Атрибуты элемента [GradientStop](dhtmlCommon.chm::/Classes/PP/GradientStop/GradientStop.htm)


		 Наименование атрибута
		 Тип
		 Описание


		 Color
		 String
		 Имя или HTML-представление цвета кисти.


		 Offset
		 Double
		 Отступ точки.
		 Может использоваться как элемент.


## Элемент RadialGradientBrush


Элемент RadialGradientBrush
 представляет собой коллекцию кистей со сплошной заливкой. Элемент коллекции
 - экземпляр класса [RadialGradientBrush](dhtmlCommon.chm::/Classes/PP/RadialGradientBrush/RadialGradientBrush.htm).


### Атрибуты элемента коллекции


		 Наименование атрибута
		 Тип
		 Описание


		 Id
		 String
		 Идентификатор кисти.


		 Center
		 [Point](dhtmlCommon.chm::/Classes/PP/Point/Point.htm)
		 Центральная точка радиального градиента.


		 Opacity
		 Double
		 Прозрачность
		 кисти. Значения от 0 до 1.


### Вложенный элемент коллекции


Список точек радиального градиента содержится в элементе GradientStops.
 Описание точки линейного градиента содержится в элементе [GradientStop](dhtmlCommon.chm::/Classes/PP/GradientStop/GradientStop.htm).
 Атрибуты элемента GradientStop
 см. выше.


См. также:


[Элемент
 ItemsDictionary](../ItemsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
