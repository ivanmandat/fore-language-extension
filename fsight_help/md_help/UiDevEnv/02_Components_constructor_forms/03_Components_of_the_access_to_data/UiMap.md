# UiMap: Компонент

UiMap: Компонент
-


# UiMap


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMap](Map.chm::/Interface/IUiMap/IUiMap.htm)


           [UiMap](Map.chm::/Class/UiMap/UiMap.htm)


## Описание


Компонент UiMap является невизуальным,
 предназначен для предоставления доступа к картам репозитория.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- Установите компонент в качестве источника данных для какого-либо
	 компонента [MapBox](MapBox.htm).


	- В коде на Fore, используя свойство [Map](Map.chm::/Interface/IUiMap/IUiMap.Map.htm),
	 получите параметры карты, описываемой интерфейсом [IMap](Map.chm::/Interface/IMap/IMap.htm).
	 Для полученной карты в свойстве [IMap.Topobase](Map.chm::/Interface/IMap/IMap.TopoBase.htm)
	 необходимо указать топооснову. Для этого используется примерно следующий
	 код на Fore:


		Var

		    MB: IMetabase;

		    WorldMap: IMap;

		Begin

		    MB := MetabaseClass.Active;

		    WorldMap := UiMap1.Map;

		    WorldMap.Topobase := MB.ItemById("World_TBS").Bind As IMapTopobase;


При запуске формы карта будет отображена в компоненте [MapBox](MapBox.htm).


Вся дальнейшая работа заключается в подключении источников данных для
 слоев карты и настройке визуального оформления. Данные действия выполняются
 в коде на Fore. Более подробно смотрите описание интерфейса [IMap](Map.chm::/Interface/IMap/IMap.htm),
 а также интерфейсов связанных с ним.


## Свойства компонента UiMap


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
		 [Map](Map.chm::/Interface/IUiMap/IUiMap.Map.htm)
		 Свойство Map возвращает
		 ссылку на объект, содержащий параметры отображения карты.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
