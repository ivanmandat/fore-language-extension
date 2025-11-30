# ZoomOptions

ZoomOptions
-


# ZoomOptions


Пространство имен: PP;


## Иерархия наследования


           [PP.Object](../../Object/Object.htm)


           PP.ZoomOptions


## Описание


Класс ZoomOptions предназначен
 для настройки параметров масштабирования визуального компонента.


## Комментарии


Для получения объекта данного класса используйте метод [Chart.getZoom](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getZoom.htm).


Для настройки параметров масштабирования визуального компонента:


	- Задайте значение масштаба с помощью метода [ZoomOptions.setZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm)
	 или свойства [Zoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm)
	 в конструкторе [ZoomOptions](Constructor_ZoomOptions.htm).


	- Выберите один из способов применения заданного масштаба средствами
	 CSS с помощью метода [ZoomOptions.setIsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm)
	 или свойства [IsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm)
	 в конструкторе [ZoomOptions](Constructor_ZoomOptions.htm):


		- true. Масштаб применяется через
		 поле zoom, например - zoom: 0.5;


Примечание.
 Поле zoom не поддерживается в браузере Mozilla Firefox.


		- false. По умолчанию. Масштаб
		 применяется через поле transform, например - transform: scale(0.5).


Значение масштаба, заданное в поле zoom или
 transform, должно совпадать со значением метода [ZoomOptions.setZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm)/свойства
 [Zoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm).


	- Укажите поле, которое используется в качестве способа применения
	 заданного масштаба, с помощью метода [ZoomOptions.setIsCssZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsCssZoom.htm)
	 или свойства [IsCssZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsCssZoom.htm)
	 в конструкторе [ZoomOptions](Constructor_ZoomOptions.htm).
	 Значение метода/свойства должно совпадать со значением метода [ZoomOptions.setIsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm)/свойства
	 [IsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm).


После выполнения действий заданные параметры масштабирования будут применены
 к визуальному компоненту.


Примечание.
 Настройка параметров масштабирования доступна только для [диаграммы](UiDiagrams.chm::/Diagrams.htm).
 При масштабировании диаграммы координаты курсора, всплывающих подсказок,
 выделения осей и других элементов смещаются в соответствии с заданным
 значением масштаба.


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [ZoomOptions](Constructor_ZoomOptions.htm)
		 Конструктор ZoomOptions
		 создает экземпляр класса ZoomOptions.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getIsCssZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsCssZoom.htm)


		 Метод getIsCssZoom
		 возвращает признак масштабирования визуального компонента с помощью
		 поля zoom или transform, заданного в CSS.


		 ![](../../../Sub_Image.gif)
		 [getIsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm)
		 Метод getIsOnlyPosition
		 возвращает способ применения заданного значения масштаба средствами
		 CSS.


		 ![](../../../Sub_Image.gif)
		 [getNodeOffset](ZoomOptions.getNodeOffset.htm)
		 Метод getNodeOffset
		 возвращает координаты визуального компонента, расположенного в
		 видимой области браузера, с учётом масштаба в пикселях.


		 ![](../../../Sub_Image.gif)
		 [getPointOffset](ZoomOptions.getPointOffset.htm)
		 Метод getPointOffset
		 возвращает координаты элемента, расположенного относительно визуального
		 компонента, с учётом масштаба в пикселях.


		 ![](../../../Sub_Image.gif)
		 [getZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm)
		 Метод getZoom возвращает
		 значение масштаба.


		 ![](../../../Sub_Image.gif)
		 [setIsCssZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsCssZoom.htm)
		 Метод setIsCssZoom
		 определяет признак масштабирования визуального компонента с помощью
		 поля zoom или transform, заданного в CSS.


		 ![](../../../Sub_Image.gif)
		 [setIsOnlyPosition](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.IsOnlyPosition.htm)
		 Метод setIsOnlyPosition
		 определяет способ применения заданного значения масштаба средствами
		 CSS.


		 ![](../../../Sub_Image.gif)
		 [setZoom](../../../Interfaces/ZoomOptionsSettings/ZoomOptionsSettings.Zoom.htm)
		 Метод setZoom определяет
		 значение масштаба.


## Методы, унаследованные от класса [PP.Object](../../Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP](../../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
