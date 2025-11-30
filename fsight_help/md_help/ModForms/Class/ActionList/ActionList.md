# ActionList: Класс

ActionList: Класс
-


# ActionList


## Описание


Класс ActionList реализует компонент
 среды разработки [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm)
 используемый для создания каких-либо одинаковых действий для соответствующих
 пунктов меню и кнопок на панели инструментов.


## Свойства, унаследованные от [IActionList](../../Interface/IActionList/IActionList.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActionCount](../../Interface/IActionList/IActionList.ActionCount.htm)


		 Свойство ActionCount
		 возвращает количество действий в списке компонента.


		 ![](../../Property_Image.gif)
		 [Actions](../../Interface/IActionList/IActionList.Actions.htm)


		 Свойство Actions возвращает
		 параметры указанного действия.


		 ![](../../Property_Image.gif)
		 [Images](../../Interface/IActionList/IActionList.Images.htm)


		 Свойство Images определяет
		 компонент, изображения которого будут использоваться в действиях
		 текущего компонента.


		 ![](../../Property_Image.gif)
		 [Suspended](../../Interface/IActionList/IActionList.Suspended.htm)


		 Свойство Suspended
		 определяет состояние компонента и его действий.


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


## Методы, унаследованные от [IActionList](../../Interface/IActionList/IActionList.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddAction](../../Interface/IActionList/IActionList.AddAction.htm)


		 Метод AddAction осуществляет
		 добавление указанного действия в список действий данного компонента.


		 ![](../../Sub_Image.gif)
		 [RemoveAction](../../Interface/IActionList/IActionList.RemoveAction.htm)


		 Метод RemoveAction
		 осуществляет удаление указанного действия из списка действий данного
		 компонента.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnExecute](ActionList.OnExecute.htm)
		 Событие OnExecute наступает
		 при выполнении какого-либо действия компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).


		 ![](../../Event_Image.gif)
		 [OnUpdate](ActionList.OnUpdate.htm)
		 Событие OnUpdate наступает
		 при обновлении действий компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm).


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
