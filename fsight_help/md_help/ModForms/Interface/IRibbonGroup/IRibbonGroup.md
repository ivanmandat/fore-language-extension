# IRibbonGroup

IRibbonGroup
-


# IRibbonGroup


Сборка: Forms;


## Описание


Интерфейс IRibbonGroup содержит
 свойства группы элементов управления ленты.


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm)


           IRibbonGroup


## Комментарии


Элементы управления, объединенные в группу, визуально располагаются
 в один горизонтальный ряд. В них можно использовать только маленькие изображения,
 источник которых указан в свойстве [Images](IRibbonGroup.Images.htm).
 Если свойство [Images](IRibbonGroup.Images.htm) не задано,
 то будут использоваться [маленькие
 изображения](../IRibbonCategory/IRibbonCategory.SmallImages.htm) вкладки, на которой расположена группа.


В группу могут быть объеденены следующие элементы управления:


	- [Кнопки](../IRibbonButton/IRibbonButton.htm);


	- [Комбинированные
	 списки](../IRibbonComboBox/IRibbonComboBox.htm);


	- [Кнопки
	 для вызова комбинированного меню](../IRibbonPaletteButton/IRibbonPaletteButton.htm);


	- [Редакторы текста](../IRibbonEdit/IRibbonEdit.htm);


	- [Кнопки
	 для выбора цвета](../IRibbonColorButton/IRibbonColorButton.htm);


	- [Редакторы
	 целочисленных значений](../IRibbonIntegerEdit/IRibbonIntegerEdit.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Elements](IRibbonGroup.Elements.htm)


		 Свойство Elements возвращает
		 коллекцию элементов управления, которые объединены в группу.


		 ![](../../Property_Image.gif)
		 [Images](IRibbonGroup.Images.htm)


		 Свойство Images определяет
		 компонент, содержащий изображения, которые будут использоваться
		 элементами управления, входящими в группу.


## Свойства, унаследованные от [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Category](../IBaseRibbonElement/IBaseRibbonElement.Category.htm)
		 Свойство Category возвращает
		 вкладку, в области которой расположен элемент управления.


		 ![](../../Property_Image.gif)
		 [Description](../IBaseRibbonElement/IBaseRibbonElement.Description.htm)
		 Свойство Description
		 определяет описание элемента управления.


		 ![](../../Property_Image.gif)
		 [Enabled](../IBaseRibbonElement/IBaseRibbonElement.Enabled.htm)
		 Свойство Enabled определяет
		 доступность элемента управления для пользователя.


		 ![](../../Property_Image.gif)
		 [Height](../IBaseRibbonElement/IBaseRibbonElement.Height.htm)
		 Свойство Height возвращает
		 высоту элемента управления.


		 ![](../../Property_Image.gif)
		 [Highlighted](../IBaseRibbonElement/IBaseRibbonElement.Highlighted.htm)
		 Свойство Highlighted
		 возвращает признак подсветки текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [Hint](../IBaseRibbonElement/IBaseRibbonElement.Hint.htm)
		 Свойство Hint определяет
		 текст всплывающей подсказки для элемента управления.


		 ![](../../Property_Image.gif)
		 [Id](../IBaseRibbonElement/IBaseRibbonElement.Id.htm)
		 Свойство Id возвращает
		 идентификатор элемента управления.


		 ![](../../Property_Image.gif)
		 [Keys](../IBaseRibbonElement/IBaseRibbonElement.Keys.htm)
		 Свойство Keys определяет
		 горячую клавишу, которая будет использоваться для быстрого доступа
		 к элементу управления.


		 ![](../../Property_Image.gif)
		 [Left](../IBaseRibbonElement/IBaseRibbonElement.Left.htm)
		 Свойство Left возвращает
		 расстояние от левой границы родительского компонента до левой
		 границы текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [ParentElement](../IBaseRibbonElement/IBaseRibbonElement.ParentElement.htm)
		 Свойство ParentElement
		 возвращает родительский элемент управления.


		 ![](../../Property_Image.gif)
		 [ParentGroup](../IBaseRibbonElement/IBaseRibbonElement.ParentGroup.htm)
		 Свойство ParentGroup
		 возвращает группу, в которую включен данный элемент управления.


		 ![](../../Property_Image.gif)
		 [ParentPanel](../IBaseRibbonElement/IBaseRibbonElement.ParentPanel.htm)
		 Свойство ParentPanel
		 возвращает панель, на которой расположен элемент управления.


		 ![](../../Property_Image.gif)
		 [Text](../IBaseRibbonElement/IBaseRibbonElement.Text.htm)
		 Свойство Text определяет
		 текст, отображаемый в области элемента управления.


		 ![](../../Property_Image.gif)
		 [Top](../IBaseRibbonElement/IBaseRibbonElement.Top.htm)
		 Свойство Top возвращает
		 расстояние от верхней границы родительского компонента до верхней
		 границы текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [Visible](../IBaseRibbonElement/IBaseRibbonElement.Visible.htm)
		 Свойство Visible определяет
		 признак видимости элемента управления.


		 ![](../../Property_Image.gif)
		 [Width](../IBaseRibbonElement/IBaseRibbonElement.Width.htm)
		 Свойство Width возвращает
		 ширину элемента управления.


## Свойства, унаследованные от [IComponent](../IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


См. также:


[Интерфейсы
 сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
