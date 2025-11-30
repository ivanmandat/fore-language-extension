# IBaseRibbonElement

IBaseRibbonElement
-


# IBaseRibbonElement


Сборка: Forms;


## Описание


Интерфейс IBaseRibbonElement
 содержит базовые свойства всех элементов управления, которые могут использоваться
 при организации ленты. Также все элементы управления ленты реализуют ряд
 событий, описание которых представлено в данном разделе.


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           IBaseRibbonElement


## Комментарии


Данный интерфейс является базовым для следующих интерфейсов:


	- [IRibbonButton](../IRibbonButton/IRibbonButton.htm);


	- [IRibbonCheckBox](../IRibbonCheckBox/IRibbonCheckBox.htm);


	- [IRibbonColorButton](../IRibbonColorButton/IRibbonColorButton.htm);


	- [IRibbonComboBox](../IRibbonComboBox/IRibbonComboBox.htm);


	- [IRibbonEdit](../IRibbonEdit/IRibbonEdit.htm);


	- [IRibbonFloatEdit](../IRibbonFloatEdit/IRibbonFloatEdit.htm);


	- [IRibbonGroup](../IRibbonGroup/IRibbonGroup.htm);


	- [IRibbonIntegerEdit](../IRibbonIntegerEdit/IRibbonIntegerEdit.htm);


	- [IRibbonLabel](../IRibbonLabel/IRibbonLabel.htm);


	- [IRibbonMainButton](../IRibbonMainButton/IRibbonMainButton.htm);


	- [IRibbonPaletteButton](../IRibbonPaletteButton/IRibbonPaletteButton.htm);


	- [IRibbonProgressBar](../IRibbonProgressBar/IRibbonProgressBar.htm);


	- [IRibbonRadioButton](../IRibbonRadioButton/IRibbonRadioButton.htm);


	- [IRibbonSeparator](../IRibbonSeparator/IRibbonSeparator.htm);


	- [IRibbonSlider](../IRibbonSlider/IRibbonSlider.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Category](IBaseRibbonElement.Category.htm)
		 Свойство Category возвращает
		 вкладку, в области которой расположен элемент управления.


		 ![](../../Property_Image.gif)
		 [Description](IBaseRibbonElement.Description.htm)
		 Свойство Description
		 определяет описание элемента управления.


		 ![](../../Property_Image.gif)
		 [Enabled](IBaseRibbonElement.Enabled.htm)
		 Свойство Enabled определяет
		 доступность элемента управления для пользователя.


		 ![](../../Property_Image.gif)
		 [Height](IBaseRibbonElement.Height.htm)
		 Свойство Height возвращает
		 высоту элемента управления.


		 ![](../../Property_Image.gif)
		 [Highlighted](IBaseRibbonElement.Highlighted.htm)
		 Свойство Highlighted
		 возвращает признак подсветки текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [Hint](IBaseRibbonElement.Hint.htm)
		 Свойство Hint определяет
		 текст всплывающей подсказки для элемента управления.


		 ![](../../Property_Image.gif)
		 [Id](IBaseRibbonElement.Id.htm)
		 Свойство Id возвращает
		 идентификатор элемента управления.


		 ![](../../Property_Image.gif)
		 [Keys](IBaseRibbonElement.Keys.htm)
		 Свойство Keys определяет
		 горячую клавишу, которая будет использоваться для быстрого доступа
		 к элементу управления.


		 ![](../../Property_Image.gif)
		 [Left](IBaseRibbonElement.Left.htm)
		 Свойство Left возвращает
		 расстояние от левой границы родительского компонента до левой
		 границы текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [ParentElement](IBaseRibbonElement.ParentElement.htm)
		 Свойство ParentElement
		 возвращает родительский элемент управления.


		 ![](../../Property_Image.gif)
		 [ParentGroup](IBaseRibbonElement.ParentGroup.htm)
		 Свойство ParentGroup
		 возвращает группу, в которую включен данный элемент управления.


		 ![](../../Property_Image.gif)
		 [ParentPanel](IBaseRibbonElement.ParentPanel.htm)
		 Свойство ParentPanel
		 возвращает панель, на которой расположен элемент управления.


		 ![](../../Property_Image.gif)
		 [Text](IBaseRibbonElement.Text.htm)
		 Свойство Text определяет
		 текст, отображаемый в области элемента управления.


		 ![](../../Property_Image.gif)
		 [Top](IBaseRibbonElement.Top.htm)
		 Свойство Top возвращает
		 расстояние от верхней границы родительского компонента до верхней
		 границы текущего элемента управления.


		 ![](../../Property_Image.gif)
		 [Visible](IBaseRibbonElement.Visible.htm)
		 Свойство Visible определяет
		 признак видимости элемента управления.


		 ![](../../Property_Image.gif)
		 [Width](IBaseRibbonElement.Width.htm)
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


## События


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnChange](IBaseRibbonElement.OnChange.htm)


		 Событие OnChange наступает
		 при использовании элемента управления ленты.


		 ![](../../Event_Image.gif)
		 [OnUpdate](IBaseRibbonElement.OnUpdate.htm)


		 Событие OnUpdate наступает
		 при обновлении элемента управления ленты.


См. также:


[Интерфейсы
 сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
