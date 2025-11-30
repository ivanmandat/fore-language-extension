# UiEaxMap: Компонент

UiEaxMap: Компонент
-


# UiEaxMap


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiEaxMap](KeExpress.chm::/Interface/IUiEaxMap/IUiEaxMap.htm)


           [UiEaxMap](KeExpress.chm::/Class/UiEaxMap/UiEaxMap.htm)


## Описание


Компонент UiEaxMap является
 невизуальным, предназначен для предоставления доступа к картам экспресс-отчета.


## Комментарии


Компонент является аналогом [UiMap](UiMap.htm),
 но используется в качестве источника для компонента [EaxMapBox](EaxMapBox.htm),
 который использует для отображения карт формата *.svg технологию WPF.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- Установите UiEaxMap
	 в качестве источника данных для компонента [EaxMapBox](EaxMapBox.htm).


	- В инспекторе объектов для компонента UiEaxMap
	 в свойстве [MapChart](KeExpress.chm::/Interface/IUiEaxMap/IUiEaxMap.MapChart.htm)>[Topobase](KeExpress.chm::/Interface/IEaxMapChart/IEaxMapChart.Topobase.htm) задайте
	 топооснову из репозитория или в разрабатываемом коде добавьте примерно
	 следующий код для подключения:

	Var

	    MB: IMetabase;

	    WorldMap: IEaxMapChart;

	Begin

	    MB := MetabaseClass.Active;

	    WorldMap := UiEaxMap1.MapChart;

	    WorldMap.Topobase := MB.ItemById("<идентификатор топоосновы в репозитории>").Bind As ITopobase;


При запуске формы карта будет отображена в компоненте [EaxMapBox](EaxMapBox.htm).


Вся дальнейшая работа заключается в подключении источников данных для
 слоев карты и настройке визуального оформления. Данные действия выполняются
 в коде на Fore. Более подробно
 смотрите описание интерфейса [IEaxMapChart](KeExpress.chm::/Interface/IEaxMapChart/IEaxMapChart.htm),
 а также интерфейсов связанных с ним.


## Свойства компонента


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


		 Свойство Data
		 предназначено для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [MapChart](KeExpress.chm::/Interface/IUiEaxMap/IUiEaxMap.MapChart.htm)


		 Свойство MapChart
		 возвращает параметры карты, к которой компонент предоставляет
		 доступ.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name
		 определяет наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag
		 не используется компилятором. Пользователь может изменить значение
		 свойства Tag и использовать
		 его по своему усмотрению.


См. также:


[Компоненты
 доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
