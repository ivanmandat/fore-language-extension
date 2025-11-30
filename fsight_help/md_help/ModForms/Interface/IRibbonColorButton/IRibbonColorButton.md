# IRibbonColorButton

IRibbonColorButton
-


# IRibbonColorButton


Сборка: Forms;


## Описание


Интерфейс IRibbonColorButton
 содержит свойства элемента управления ленты - Кнопка для выбора цвета.


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm)


           [IRibbonButton](../IRibbonButton/IRibbonButton.htm)


           [IRibbonPaletteButton](../IRibbonPaletteButton/IRibbonPaletteButton.htm)


           IRibbonColorButton


## Комментарии


Кнопка для выбора цвета основана на кнопке для вызова комбинированного
 меню. Основными элементами меню являются кнопки для выбора одного из имеющихся
 цветов. Цвета разделены на три группы: общие, дополнительные и стандартные.
 Также в состав меню входят:


	- Кнопка Авто, позволяющая
	 выбрать цвет по умолчанию.


	- Кнопка Другие, позволяющая
	 вызвать диалог выбора дополнительного цвета.


Кнопки «Авто» и «Другие»
 отображаются, если для них установлен какой-либо заголовок.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoButtonBorder](IRibbonColorButton.AutoButtonBorder.htm)


		 Свойство AutoButtonBorder
		 определяет, будет ли отображаться рамка вокруг изображения цвета,
		 если цвет выбран с помощью кнопки «Авто».


		 ![](../../Property_Image.gif)
		 [AutoButtonCaption](IRibbonColorButton.AutoButtonCaption.htm)


		 Свойство AutoButtonCaption
		 определяет заголовок кнопки «Авто», предназначенной для выбора
		 цвета по умолчанию.


		 ![](../../Property_Image.gif)
		 [AutoButtonColor](IRibbonColorButton.AutoButtonColor.htm)


		 Свойство AutoButtonColor
		 определяет цвет, который будет выбран при нажатии на кнопку «Авто».


		 ![](../../Property_Image.gif)
		 [AutoButtonOnTop](IRibbonColorButton.AutoButtonOnTop.htm)


		 Свойство AutoButtonOnTop
		 определяет место расположения кнопки «Авто».


		 ![](../../Property_Image.gif)
		 [AutoButtonTooltip](IRibbonColorButton.AutoButtonTooltip.htm)


		 Свойство AutoButtonTooltip
		 определяет всплывающую подсказку для кнопки «Авто».


		 ![](../../Property_Image.gif)
		 [Color](IRibbonColorButton.Color.htm)


		 Свойство Color определяет
		 цвет, выбранный в диалоге.


		 ![](../../Property_Image.gif)
		 [ColorVisible](IRibbonColorButton.ColorVisible.htm)


		 Свойство ColorVisible
		 определяет признак отображения выбранного цвета под пиктограммой,
		 отображаемой возле элемента управления.


		 ![](../../Property_Image.gif)
		 [OtherButtonCaption](IRibbonColorButton.OtherButtonCaption.htm)


		 Свойство OtherButtonCaption
		 определяет заголовок кнопки, предназначенной для вызова диалога
		 выбора дополнительного цвета.


		 ![](../../Property_Image.gif)
		 [OtherButtonTooltip](IRibbonColorButton.OtherButtonTooltip.htm)


		 Свойство OtherButtonTooltip
		 определяет всплывающую подсказку для кнопки, предназначенной для
		 вызова диалога выбора дополнительного цвета.


## Свойства, унаследованные от [IRibbonPaletteButton](../IRibbonPaletteButton/IRibbonPaletteButton.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ButtonMode](../IRibbonPaletteButton/IRibbonPaletteButton.ButtonMode.htm)


		 Свойство ButtonMode
		 определяет режим работы кнопки.


		 ![](../../Property_Image.gif)
		 [ColumnCount](../IRibbonPaletteButton/IRibbonPaletteButton.ColumnCount.htm)


		 Свойство ColumnCount
		 определяет количество колонок, в которых будет располагаться набор
		 основных графических кнопок.


		 ![](../../Property_Image.gif)
		 [Groups](../IRibbonPaletteButton/IRibbonPaletteButton.Groups.htm)


		 Свойство Groups возвращает
		 коллекцию групп графических кнопок.


		 ![](../../Property_Image.gif)
		 [IconWidth](../IRibbonPaletteButton/IRibbonPaletteButton.IconWidth.htm)


		 Свойство IconWidth
		 определяет ширину, в соответствии с которой будет осуществляться
		 разбивка и формирование изображений для основного набора графических
		 кнопок.


		 ![](../../Property_Image.gif)
		 [Images](../IRibbonPaletteButton/IRibbonPaletteButton.Images.htm)


		 Свойство Images определяет
		 компонент, содержащий изображения, которые будут использоваться
		 в основном наборе графических кнопок.


		 ![](../../Property_Image.gif)
		 [ResizeList](../IRibbonPaletteButton/IRibbonPaletteButton.ResizeList.htm)


		 Свойство ResizeList
		 определяет способ изменения размеров комбинированного меню.


		 ![](../../Property_Image.gif)
		 [SelectedItem](../IRibbonPaletteButton/IRibbonPaletteButton.SelectedItem.htm)


		 Свойство SelectedItem
		 определяет индекс последней выбранной кнопки из основного набора
		 графических кнопок.


## Свойства, унаследованные от [IRibbonButton](../IRibbonButton/IRibbonButton.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](../IRibbonButton/IRibbonButton.Action.htm)


		 Свойство Action определяет
		 действие, ассоциируемое с кнопкой ленты.


		 ![](../../Property_Image.gif)
		 [Down](../IRibbonButton/IRibbonButton.Down.htm)


		 Свойство Down определяет
		 состояние элемента управления.


		 ![](../../Property_Image.gif)
		 [ImageIndex](../IRibbonButton/IRibbonButton.ImageIndex.htm)


		 Свойство ImageIndex
		 определяет индекс маленького изображения, которое будет отображаться
		 на кнопке рядом с текстом.


		 ![](../../Property_Image.gif)
		 [LargeImageIndex](../IRibbonButton/IRibbonButton.LargeImageIndex.htm)


		 Свойство LargeImageIndex
		 определяет индекс большого изображения, которое будет отображаться
		 на кнопке рядом с текстом.


		 ![](../../Property_Image.gif)
		 [SplitButton](../IRibbonButton/IRibbonButton.SplitButton.htm)


		 Свойство SplitButton
		 определяет признак разделения кнопки при наличии подэлементов.


		 ![](../../Property_Image.gif)
		 [SubItems](../IRibbonButton/IRibbonButton.SubItems.htm)


		 Свойство SubItems возвращает
		 коллекцию элементов управления, которые формируют раскрывающееся
		 меню кнопки.


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
