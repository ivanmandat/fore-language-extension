# TableWidget: Компонент

TableWidget: Компонент
-


# TableWidget


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [ITableWidget](KeExpress.chm::/Interface/ITableWidget/ITableWidget.htm)


           [TableWidget](KeExpress.chm::/Class/TableWidget/TableWidget.htm)


## Описание


Компонент TableWidget предназначен
 для отображения вкладок навигационной панели, источником данных которой
 является отчет.


## Работа с компонентом


После размещения компонента на форме для
 его использования выполните следующие действия:


	- В свойстве Source укажите
	 источник данных [экспресс-отчета](UiErAnalyzer.htm) или
	 [регламентного отчета](UiReport.htm) репозитория.


	- В свойстве NavBar укажите
	 [навигационную
	 панель](../02_Additional_components/NavigationBar.htm).


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значение
	 True.


Для получения таблицы с данными используйте свойство [ITableSource.GetTable](KeExpress.chm::/Interface/ITableSource/ITableSource.GetTable.htm).


## Свойства компонента TableWidget


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](ModForms.chm::/Interface/IWidget/IWidget.Active.htm)


		 Свойство Active
		 определяет активность компонента.


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
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name
		 определяет наименование компонента.


		 ![](../../Property_Image.gif)
		 [NavBar](ModForms.chm::/Interface/IWidget/IWidget.NavBar.htm)


		 Свойство NavBar определяет
		 навигационную панель.


		 ![](../../Property_Image.gif)
		 [Pads](ModForms.chm::/Interface/IWidget/IWidget.Pads.htm)


		 Свойство Pads предназначено
		 для работы с коллекцией вкладок навигационной панели.


		 ![](../../Property_Image.gif)
		 [Source](KeExpress.chm::/Interface/ITableWidget/ITableWidget.Source.htm)


		 Свойство Source определяет
		 источник данных компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag
		 не используется компилятором. Пользователь может изменить значение
		 свойства Tag
		 и использовать его по своему усмотрению.


## События компонента TableWidget


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 OnRefresh
		 Событие OnRefresh наступает
		 при обновлении компонента.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
