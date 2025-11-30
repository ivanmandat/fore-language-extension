# IMenuItem

IMenuItem
-


# IMenuItem


## Описание


Интерфейс IMenuItem содержит
 свойства и методы элемента меню.


## Комментарии


Интерфейс описывает элементы компонентов [MainMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/MainMenu.htm)
 и [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm).
 Коллекции элементов возвращают свойства [Items](../IMenu/IMenu.Items.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](IMenuItem.Action.htm)


		 Свойство Action определяет
		 действие, ассоциируемое с пунктом меню.


		 ![](../../Property_Image.gif)
		 [AdditionalShortCuts](IMenuItem.AdditionalShortCuts.htm)


		 Свойство AdditionalShortCuts
		 возвращает коллекцию дополнительных сочетаний горячих клавиш,
		 связанных с данным пунктом меню.


		 ![](../../Property_Image.gif)
		 [AutoCheck](IMenuItem.AutoCheck.htm)


		 Свойство AutoCheck
		 определяет, будет ли производиться автоматическое изменение состояния
		 флажка при выборе пункта меню.


		 ![](../../Property_Image.gif)
		 [Checked](IMenuItem.Checked.htm)


		 Свойство Checked определяет
		 состояние флажка, отображаемого слева от пункта меню.


		 ![](../../Property_Image.gif)
		 [CloseOnCommand](IMenuItem.CloseOnCommand.htm)


		 Свойство CloseOnCommand
		 определяет признак закрытия меню после выбора данного элемента
		 меню.


		 ![](../../Property_Image.gif)
		 [DefaultItem](IMenuItem.DefaultItem.htm)


		 Свойство DefaultItem
		 определяет возможность выполнения по умолчанию данного пункта
		 меню при двойном щелчке мышью на родительском подменю.


		 ![](../../Property_Image.gif)
		 [Enabled](IMenuItem.Enabled.htm)


		 Свойство Enabled определяет
		 доступность пункта меню для пользователя.


		 ![](../../Property_Image.gif)
		 [GroupIndex](IMenuItem.GroupIndex.htm)


		 Свойство GroupIndex
		 задает индекс группы элементов меню.


		 ![](../../Property_Image.gif)
		 [ImageIndex](IMenuItem.ImageIndex.htm)


		 Свойство ImageIndex
		 определяет индекс изображения, отображаемого в пункте меню.


		 ![](../../Property_Image.gif)
		 [IsCaption](IMenuItem.IsCaption.htm)


		 Свойство IsCaption
		 определяет, является ли текущий элемент заголовком.


		 ![](../../Property_Image.gif)
		 [Items](IMenuItem.Items.htm)


		 Свойство Items возвращает
		 коллекцию подменю данного пункта меню.


		 ![](../../Property_Image.gif)
		 [RadioItem](IMenuItem.RadioItem.htm)


		 Свойство RadioItem
		 определяет, будет ли для указания выбранного пункта использоваться
		 радио-переключатель.


		 ![](../../Property_Image.gif)
		 [ShortCut](IMenuItem.ShortCut.htm)


		 Свойство ShortCut определяет
		 комбинацию «горячих клавиш» для быстрого выбора пункта
		 меню.


		 ![](../../Property_Image.gif)
		 [Text](IMenuItem.Text.htm)


		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Visible](IMenuItem.Visible.htm)


		 Свойство Visible определяет
		 видимость пункта меню во время выполнения формы.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Click](IMenuItem.Click.htm)


		 Метод Click инициализирует
		 событие [OnClick](../../Class/MenuItem/MenuItem.OnClick.htm)
		 для данного пункта меню.


См. также:


[Интерфейсы сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
