# ActionItem

ActionItem
-


# ActionItem


## Описание


Класс ActionItem реализует действие
 компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).


## Свойства, унаследованные от [IActionItem](../../Interface/IActionItem/IActionItem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActionList](../../Interface/IActionItem/IActionItem.ActionList.htm)


		 Свойство ActionList
		 определяет компонент [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm),
		 содержащий данное действие.


		 ![](../../Property_Image.gif)
		 [AdditionalShortCuts](../../Interface/IActionItem/IActionItem.AdditionalShortCuts.htm)


		 Свойство AdditionalShortCuts
		 возвращает коллекцию дополнительных сочетаний горячих клавиш,
		 связанных с данным действием.


		 ![](../../Property_Image.gif)
		 [AutoCheck](../../Interface/IActionItem/IActionItem.AutoCheck.htm)


		 Свойство AutoCheck
		 определяет, будет ли производиться автоматическое изменение состояния
		 флажка при выполнении действия.


		 ![](../../Property_Image.gif)
		 [Caption](../../Interface/IActionItem/IActionItem.Caption.htm)


		 Свойство Caption определяет
		 заголовок действия.


		 ![](../../Property_Image.gif)
		 [Category](../../Interface/IActionItem/IActionItem.Category.htm)


		 Свойство Category определяет
		 наименование категории, к которой относится данное действие.


		 ![](../../Property_Image.gif)
		 [Checked](../../Interface/IActionItem/IActionItem.Checked.htm)


		 Свойство Checked определяет
		 состояние флажка у действия.


		 ![](../../Property_Image.gif)
		 [Enabled](../../Interface/IActionItem/IActionItem.Enabled.htm)


		 Свойство Enabled определяет
		 доступность действия для пользователя.


		 ![](../../Property_Image.gif)
		 [GroupIndex](../../Interface/IActionItem/IActionItem.GroupIndex.htm)


		 Свойство GroupIndex
		 задает индекс группы, в которую входит данное действие.


		 ![](../../Property_Image.gif)
		 [Hint](../../Interface/IActionItem/IActionItem.Hint.htm)


		 Свойство Hint определяет
		 текст всплывающей подсказки, связанной с данным действием.


		 ![](../../Property_Image.gif)
		 [ImageIndex](../../Interface/IActionItem/IActionItem.ImageIndex.htm)


		 Свойство ImageIndex
		 определяет индекс изображения, соответствующего данному действию.


		 ![](../../Property_Image.gif)
		 [RadioItem](../../Interface/IActionItem/IActionItem.RadioItem.htm)


		 Свойство RadioItem
		 определяет, будет ли для указания флажка действия использоваться
		 радио-переключатель.


		 ![](../../Property_Image.gif)
		 [ShortCut](../../Interface/IActionItem/IActionItem.ShortCut.htm)


		 Свойство ShortCut определяет
		 комбинацию «горячих клавиш», используемых для быстрого
		 вызова данного действия.


		 ![](../../Property_Image.gif)
		 [Visible](../../Interface/IActionItem/IActionItem.Visible.htm)


		 Свойство Visible определяет
		 признак видимости для данного действия.


## Свойства, унаследовано от [IComponent](../../Interface/IComponent/IComponent.htm)


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


## Методы, унаследованные от [IActionItem](../../Interface/IActionItem/IActionItem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../../Interface/IActionItem/IActionItem.Execute.htm)


		 Метод Execute осуществляет
		 выполнение данного действия.


		 ![](../../Sub_Image.gif)
		 [Update](../../Interface/IActionItem/IActionItem.Update.htm)


		 Метод Update осуществляет
		 обновление состояния действия.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnExecute](ActionItem.OnExecute.htm)


		 Событие OnExecute наступает
		 при выполнении действий ActionItem
		 компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).


		 ![](../../Event_Image.gif)
		 [OnUpdate](ActionItem.OnUpdate.htm)


		 Событие OnUpdate наступает
		 при обновлении действий ActionItem
		 компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
