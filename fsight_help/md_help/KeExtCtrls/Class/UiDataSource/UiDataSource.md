# UiDataSource: Класс

UiDataSource: Класс
-


# UiDataSource


Сборка: ExtCtrls;


## Описание


Класс UiDataSource реализует
 компонент среды разработки [UiDataSource](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDataSource.htm),
 предназначенный для связи компонентов доступа к данным с визуальными компонентами,
 позволяющими просматривать и редактировать данные.


## Свойства, унаследованные от [IUiDataSource](../../Interface/IUiDataSource/IUiDataSource.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dataset](../../Interface/IUiDataSource/IUiDataSource.Dataset.htm)
		 Свойство Dataset определяет
		 набор данных, для которого данный компонент служит каналом передачи
		 информации к визуальным компонентам доступа к данным.


		 ![](../../Property_Image.gif)
		 [Enabled](../../Interface/IUiDataSource/IUiDataSource.Enabled.htm)
		 Свойство Enabled определяет
		 признак передачи данных в компоненты визуального отображения данных.


		 ![](../../Property_Image.gif)
		 [State](../../Interface/IUiDataSource/IUiDataSource.State.htm)
		 Свойство State возвращает
		 текущее состояние источника данных.


## Свойства, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается
		 посредством входного параметра.


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
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IUiDataSource](../../Interface/IUiDataSource/IUiDataSource.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Edit](../../Interface/IUiDataSource/IUiDataSource.Edit.htm)
		 Метод Edit позволяет
		 редактировать источник данных.


		 ![](../../Sub_Image.gif)
		 [IsLinkedTo](../../Interface/IUiDataSource/IUiDataSource.IsLinkedTo.htm)
		 Метод IsLinkedTo осуществляет
		 проверку наличия связи источника данных [UiDataSource](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDataSource.htm)
		 с набором данных [Dataset](../../Interface/IUiDataSource/IUiDataSource.Dataset.htm).


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnDataChange](UiDataSource.OnDataChange.htm)
		 Событие OnDataChange
		 происходит во время перехода на другую запись и при изменении
		 значения поля.


		 ![](../../Event_Image.gif)
		 [OnUpdateData](UiDataSource.OnUpdateData.htm)
		 Событие OnUpdateData
		 происходит перед занесением измененных данных в БД.


См. также:


[Классы сборки ExtCtrls](../KeExtCtrls_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
