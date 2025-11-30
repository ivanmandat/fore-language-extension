# ToolbarButton

ToolbarButton
-


# ToolbarButton


## Описание


Класс ToolbarButton реализует
 кнопку, которая может располагаться на панели инструментов [ToolBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ToolBar.htm).


## Свойства, унаследованные от [IToolbarButton](../../Interface/IToolbarButton/IToolbarButton.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](../../Interface/IToolbarButton/IToolbarButton.Action.htm)


		 Свойство Action определяет
		 действие [ActionItem](../../Interface/IActionItem/IActionItem.htm),
		 ассоциируемое с кнопкой панели инструментов [ToolBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ToolBar.htm).


		 ![](../../Property_Image.gif)
		 [AdditionalShortCuts](../../Interface/IToolbarButton/IToolbarButton.AdditionalShortCuts.htm)


		 Свойство AdditionalShortCuts
		 возвращает коллекцию дополнительных сочетаний горячих клавиш,
		 связанных с данной кнопкой панели инструментов.


		 ![](../../Property_Image.gif)
		 [BeginGroup](../../Interface/IToolbarButton/IToolbarButton.BeginGroup.htm)


		 Свойство BeginGroup
		 позволяет разделить группы компонентов, расположенных на панели
		 инструментов, визуально вертикальной чертой.


		 ![](../../Property_Image.gif)
		 [DisplayText](../../Interface/IToolbarButton/IToolbarButton.DisplayText.htm)


		 Свойство DisplayText
		 определяет признак отображения текста кнопки справа от пиктограммы
		 кнопки на панели инструментов.


		 ![](../../Property_Image.gif)
		 [Down](../../Interface/IToolbarButton/IToolbarButton.Down.htm)


		 Свойство Down определяет
		 в каком состоянии находится кнопка.


		 ![](../../Property_Image.gif)
		 [Enabled](../../Interface/IToolbarButton/IToolbarButton.Enabled.htm)


		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [Hint](../../Interface/IToolbarButton/IToolbarButton.Hint.htm)


		 Свойство Hint определяет
		 текст всплывающей подсказки, отображаемой при наведении указателя
		 мыши на кнопку в панели инструментов.


		 ![](../../Property_Image.gif)
		 [ImageIndex](../../Interface/IToolbarButton/IToolbarButton.ImageIndex.htm)


		 Свойство ImageIndex
		 определяет индекс изображения


		 ![](../../Property_Image.gif)
		 [MenuMode](../../Interface/IToolbarButton/IToolbarButton.MenuMode.htm)


		 Свойство MenuMode определяет
		 признак вызова контекстного меню при нажатии на саму кнопку.


		 ![](../../Property_Image.gif)
		 [PopupMenu](../../Interface/IToolbarButton/IToolbarButton.PopupMenu.htm)


		 Свойство PopupMenu
		 определяет контекстное меню, связанное с текущей кнопкой панели
		 инструментов.


		 ![](../../Property_Image.gif)
		 [ShortCut](../../Interface/IToolbarButton/IToolbarButton.ShortCut.htm)


		 Свойство ShortCut определяет
		 комбинацию «горячих клавиш» для быстрого выбора пункта
		 меню.


		 ![](../../Property_Image.gif)
		 [Text](../../Interface/IToolbarButton/IToolbarButton.Text.htm)


		 Свойство Text определяет
		 наименование кнопки в панели инструментов.


		 ![](../../Property_Image.gif)
		 [Toolbar](../../Interface/IToolbarButton/IToolbarButton.Toolbar.htm)


		 Свойство Toolbar возвращает
		 объект-родитель.


		 ![](../../Property_Image.gif)
		 [Visible](../../Interface/IToolbarButton/IToolbarButton.Visible.htm)


		 Свойство Visible определяет
		 видимость кнопки на панели инструментов во время выполнения формы.


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


## Методы, унаследованные от [IToolbarButton](../../Interface/IToolbarButton/IToolbarButton.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Click](../../Interface/IToolbarButton/IToolbarButton.Click.htm)


		 Метод Click генерирует
		 событие [OnClick](ToolbarButton.OnClick.htm).


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnClick](ToolbarButton.OnClick.htm)
		 Событие OnClick наступает,
		 если пользователь нажал и отпустил кнопку мыши на кнопке,
		 расположенной на панели инструментов.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
