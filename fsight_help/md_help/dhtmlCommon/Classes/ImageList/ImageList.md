# ImageList

ImageList
-


# ImageList


Пространство имен: PP;


## Иерархия наследования


[Object](../Object/Object.htm)


ImageList


## Описание


Класс ImageList реализует невизуальный
 компонент [ImageList](dhtmlUi.chm::/components/imagelist/imagelist.htm),
 в котором указана ссылка на спрайт (набор картинок в одном файле) и размер
 картинки в спрайте.


## Синтаксис


PP.initClass(PP.ImageList, [PP.Object](../Object/Object.htm),
 "ImageList");


## Конструктор


			 Имя конструктора
			 Краткое описание


			 ![](../../Sub_Image.gif)
			 [ImageList](dhtmlCommon.chm::/classes/imagelist/constructor_imagelist.htm)
			 Конструктор ImageList
			 создает экземпляр компонента ImageList.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IconHeight](dhtmlCommon.chm::/classes/imagelist/imagelist.iconheight.htm)
		 Свойство IconHeight
		 устанавливает высоту пиктограммы.


		 ![](../../Property_Image.gif)
		 [IconWidth](dhtmlCommon.chm::/classes/imagelist/imagelist.iconwidth.htm)
		 Свойство IconWidth устанавливает
		 ширину пиктограммы.


		 ![](../../Property_Image.gif)
		 [IsRetinaAvailable](dhtmlCommon.chm::/Classes/ImageList/ImageList.IsRetinaAvailable.htm)
		 Свойство IsRetinaAvailable
		 возвращает признак возможности работы на устройстве с дисплеем
		 Retina.


		 ![](../../Property_Image.gif)
		 [Source](dhtmlCommon.chm::/classes/imagelist/imagelist.source.htm)
		 Свойство Source определяет
		 путь к набору пиктограмм.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [applyToBackground](dhtmlCommon.chm::/Classes/ImageList/ImageList.applyToBackground.htm)
		 Метод applyToBackground
		 устанавливает в качестве фона DOM-элемента указанное изображение
		 из спрайта.


		 ![](../../Sub_Image.gif)
		 [applyToCanvas](dhtmlCommon.chm::/Classes/ImageList/ImageList.applyToCanvas.htm)
		 Метод applyToCanvas
		 осуществляет отрисовку загруженного изображения на [канве](dhtmlGraphicBase.chm::/components/canvas/canvas.htm).


		 ![](../../Sub_Image.gif)
		 [getIcon](dhtmlCommon.chm::/classes/imagelist/imagelist.geticon.htm)
		 Метод getIcon возвращает
		 пиктограмму по индексу строки и столбца [списка](dhtmlList.chm::/components/listbox/listbox.htm).


		 ![](../../Sub_Image.gif)
		 [getLeft](dhtmlCommon.chm::/classes/imagelist/imagelist.getleft.htm)
		 Метод getLeft
		 возвращает смещение по горизонтали.


		 ![](../../Sub_Image.gif)
		 [getTop](dhtmlCommon.chm::/classes/imagelist/imagelist.gettop.htm)
		 Метод getTop возвращает
		 смещение по вертикали.


		 ![](../../Sub_Image.gif)
		 [isImageLoaded](dhtmlCommon.chm::/Classes/ImageList/ImageList.isImageLoaded.htm)
		 Метод isImageLoaded
		 возвращает состояние загрузки изображения.


		 ![](../../Sub_Image.gif)
		 [loadImage](dhtmlUi.chm::/Classes/ImageList/ImageList.loadImage.htm)
		 Метод loadImage осуществляет
		 загрузку изображения для последующей отрисовки на [канве](dhtmlGraphicBase.chm::/components/canvas/canvas.htm).


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [ImageLoaded](dhtmlCommon.chm::/Classes/ImageList/ImageList.ImageLoaded.htm)
		 Событие ImageLoaded
		 наступает после загрузки изображения.


		 ![](../../Event_Image.gif)
		 [ImageLoading](dhtmlCommon.chm::/Classes/ImageList/ImageList.ImageLoading.htm)
		 Событие ImageLoading
		 наступает в начале выполнения загрузки изображения.


## Свойства, унаследованные от класса [Object](../Object/Object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](../Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
