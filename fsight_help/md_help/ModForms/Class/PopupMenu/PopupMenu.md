# PopupMenu: Класс

PopupMenu: Класс
-


# PopupMenu


## Описание


Класс PopupMenu реализует компонент
 среды разработки [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm),
 используемый для создания контекстного меню.


## Свойства, унаследованные от [IPopupMenu](../../Interface/IPopupMenu/IPopupMenu.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Alignment](../../Interface/IPopupMenu/IPopupMenu.Alignment.htm)
		 Свойство Alignment
		 определяет, с какой стороны относительно курсора мыши будет появляться
		 контекстное меню.


		 ![](../../Property_Image.gif)
		 [AutoPopup](../../Interface/IPopupMenu/IPopupMenu.AutoPopup.htm)
		 Свойство AutoPopup
		 определяет признак автоматического появления контекстного меню
		 по щелчку дополнительной кнопки мыши.


## Свойства, унаследованные от [IMenu](../../Interface/IMenu/IMenu.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Images](../../Interface/IMenu/IMenu.Images.htm)
		 Свойство Images определяет
		 наименование компонента, изображения которого будут использоваться
		 в компоненте.


		 ![](../../Property_Image.gif)
		 [Items](../../Interface/IMenu/IMenu.Items.htm)
		 Свойство Items возвращает
		 коллекцию элементов меню.


## Свойства, унаследованные от [IComponent](../../Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../../Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../../Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../../Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IPopupMenu](../../Interface/IPopupMenu/IPopupMenu.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Popup](../../Interface/IPopupMenu/IPopupMenu.Popup.htm)
		 Метод Popup отображает
		 контекстное меню в заданной позиции.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnClose](PopupMenu.OnClose.htm)
		 Событие OnClose наступает
		 после закрытия контекстного меню.


		 ![](../../Event_Image.gif)
		 [OnPopup](PopupMenu.OnPopup.htm)
		 Событие OnPopup наступает
		 непосредственно перед появлением контекстного меню.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
