# MenuItem

MenuItem
-


# MenuItem


## Описание


Класс MenuItem реализует объект,
 представляющий собой пункт меню.


## Свойства, унаследованные от [IMenuItem](../../Interface/IMenuItem/IMenuItem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](../../Interface/IMenuItem/IMenuItem.Action.htm)


		 Свойство Action определяет
		 действие, ассоциируемое с пунктом меню.


		 ![](../../Property_Image.gif)
		 [AdditionalShortCuts](../../Interface/IMenuItem/IMenuItem.AdditionalShortCuts.htm)


		 Свойство AdditionalShortCuts
		 возвращает коллекцию дополнительных сочетаний горячих клавиш,
		 связанных с данным пунктом меню.


		 ![](../../Property_Image.gif)
		 [AutoCheck](../../Interface/IMenuItem/IMenuItem.AutoCheck.htm)


		 Свойство AutoCheck
		 определяет, будет ли производиться автоматическое изменение состояния
		 флажка при выборе пункта меню.


		 ![](../../Property_Image.gif)
		 [Checked](../../Interface/IMenuItem/IMenuItem.Checked.htm)


		 Свойство Checked определяет
		 состояние флажка, отображаемого слева от пункта меню.


		 ![](../../Property_Image.gif)
		 [CloseOnCommand](../../Interface/IMenuItem/IMenuItem.CloseOnCommand.htm)


		 Свойство CloseOnCommand
		 определяет признак закрытия меню после выбора данного элемента
		 меню.


		 ![](../../Property_Image.gif)
		 [DefaultItem](../../Interface/IMenuItem/IMenuItem.DefaultItem.htm)


		 Свойство DefaultItem
		 определяет возможность выполнения по умолчанию данного пункта
		 меню при двойном щелчке мышью на родительском подменю.


		 ![](../../Property_Image.gif)
		 [Enabled](../../Interface/IMenuItem/IMenuItem.Enabled.htm)


		 Свойство Enabled определяет
		 доступность пункта меню для пользователя.


		 ![](../../Property_Image.gif)
		 [GroupIndex](../../Interface/IMenuItem/IMenuItem.GroupIndex.htm)


		 Свойство GroupIndex
		 задает индекс группы элементов меню.


		 ![](../../Property_Image.gif)
		 [ImageIndex](../../Interface/IMenuItem/IMenuItem.ImageIndex.htm)


		 Свойство ImageIndex
		 определяет индекс изображения, отображаемого в пункте меню.


		 ![](../../Property_Image.gif)
		 [IsCaption](../../Interface/IMenuItem/IMenuItem.IsCaption.htm)


		 Свойство IsCaption
		 определяет, является ли текущий элемент заголовком.


		 ![](../../Property_Image.gif)
		 [Items](../../Interface/IMenuItem/IMenuItem.Items.htm)


		 Свойство Items возвращает
		 коллекцию подменю данного пункта меню.


		 ![](../../Property_Image.gif)
		 [RadioItem](../../Interface/IMenuItem/IMenuItem.RadioItem.htm)


		 Свойство RadioItem
		 определяет, будет ли для указания выбранного пункта использоваться
		 радио-переключатель.


		 ![](../../Property_Image.gif)
		 [ShortCut](../../Interface/IMenuItem/IMenuItem.ShortCut.htm)


		 Свойство ShortCut определяет
		 комбинацию «горячих клавиш» для быстрого выбора пункта
		 меню.


		 ![](../../Property_Image.gif)
		 [Text](../../Interface/IMenuItem/IMenuItem.Text.htm)


		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Visible](../../Interface/IMenuItem/IMenuItem.Visible.htm)


		 Свойство Visible определяет
		 видимость пункта меню во время выполнения формы.


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


## Методы, унаследованные от [IMenuItem](../../Interface/IMenuItem/IMenuItem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Click](../../Interface/IMenuItem/IMenuItem.Click.htm)


		 Метод Click инициализирует
		 событие [OnClick](MenuItem.OnClick.htm)
		 для данного пункта меню.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnClick](MenuItem.OnClick.htm)


		 Событие OnClick наступает,
		 если пользователь нажал кнопку мыши, когда указатель
		 мыши находился на пункте меню.


		 ![](../../Event_Image.gif)
		 [OnPopup](MenuItem.OnPopup.htm)


		 Событие OnPopup наступает
		 непосредственно перед появлением контекстного меню.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
