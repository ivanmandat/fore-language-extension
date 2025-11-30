# UiWorkspaceObject: Компонент

UiWorkspaceObject: Компонент
-


# UiWorkspaceObject


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


           [IUiWorkspaceObject](KeWsp.chm::/Interface/IUiWorkspaceObject/IUiWorkspaceObject.htm)


           [UiWorkspaceObject](KeWsp.chm::/Class/UiWorkspaceObject/UiWorkspaceObject.htm)


## Описание


Компонент UiWorkspaceObject
 предназначен для отображения и работы с рабочим пространством репозитория.


## Работа с компонентом


После
 размещения компонента на форме для его использования выполните следующие
 действия:


	- В инспекторе объектов в свойстве
	 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
	 укажите рабочее пространство репозитория. Для этого в редакторе свойства
	 нажмите кнопку ![](../../Select_Button.gif) или в контекстном меню для компонента
	 выберите команду «Объект».
	 В открывшемся диалоге выберите необходимое рабочее пространство;


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значения
	 True.


После этого компонент может быть указан в качестве источника данных
 для визуального компонента [WorkspaceBox](WorkspaceBox.htm).


В коде на Fore, используя свойство
 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm),
 можно получить актуальное рабочее пространство, описываемое интерфейсами
 [IWxWorkspace](Andy.chm::/Interface/IWxWorkspace/IWxWorkspace.htm)
 и [IWorkspace](KeWsp.chm::/Interface/IWorkspace/IWorkspace.htm).


## Свойства компонента UiWorkspaceObject


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active определяет
		 активность компонента.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance определяет
		 данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
		 Свойство Object определяет
		 объект репозитория, к которому необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm)
		 Свойство ObjectClassId
		 возвращает числовой идентификатор, соответствующий классу объекта,
		 загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)
		 Свойство OperationMode
		 определяет режим подключения объекта.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Workspace](KeWsp.chm::/Interface/IUiWorkspaceObject/IUiWorkspaceObject.Workspace.htm)
		 Свойство Workspace
		 определяет рабочее пространство репозитория, данные которого будут
		 отображаться в дальнейшем в компоненте [WorkspaceBox](WorkspaceBox.htm).


## Методы компонента UiWorkspaceObject


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
