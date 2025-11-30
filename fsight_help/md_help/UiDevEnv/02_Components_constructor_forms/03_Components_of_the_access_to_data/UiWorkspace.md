# UiWorkspace: Компонент

UiWorkspace: Компонент
-


# UiWorkspace


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiWorkspace](KeWsp.chm::/Interface/IUiWorkspace/IUiWorkspace.htm)


           [UiWorkspace](KeWsp.chm::/Class/UiWorkspace/UiWorkspace.htm)


## Описание


Компонент UiWorkspace является
 источником данных для компонента [WorkspaceBox](WorkspaceBox.htm)
 и создает рабочее пространство, не связанное с репозиторием.


## Работа с компонентом


После размещения компонента на форме установите его в качестве источника
 для какого-либо компонента [WorkspaceBox](WorkspaceBox.htm).
 При запуске формы в компоненте отобразится рабочее пространство.


В коде на Fore, используя свойство
 [WxWorkspace](KeWsp.chm::/Interface/IUiWorkspace/IUiWorkspace.WxWorkspace.htm),
 можно получить и настроить параметры рабочего пространства, описываемого
 интерфейсом [IWxWorkspace](Andy.chm::/Interface/IWxWorkspace/IWxWorkspace.htm).


## Свойства компонента UiWorkspace


		 Имя свойства
		 Краткое описание


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
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [WxWorkspace](KeWsp.chm::/Interface/IUiWorkspace/IUiWorkspace.WxWorkspace.htm)
		 Свойство WxWorkspace
		 возвращает графический контекст рабочего пространства, отображаемый
		 в дальнейшем компонентом [WorkspaceBox](WorkspaceBox.htm).


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
