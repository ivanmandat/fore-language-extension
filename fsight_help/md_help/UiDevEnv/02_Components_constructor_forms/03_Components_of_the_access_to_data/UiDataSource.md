# UiDataSource: Компонент

UiDataSource: Компонент
-


# UiDataSource


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiDataSource](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.htm)


           [UiDataSource](KeExtCtrls.chm::/Class/UiDataSource/UiDataSource.htm)


## Описание


Компонент UiDataSource используется
 для подключения компонентов доступа к данным к компонентам, позволяющим
 визуально отображать и редактировать данные.


## Работа с компонентом


Для работы компонента необходимо в свойстве [Dataset](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.Dataset.htm) указать
 источник данных. В качестве источника данных можно указать следующие компоненты:


	- [UiTable](UiTable.htm);


	- [UiQuery](UiQuery.htm);


	- [UiMemoryTable](UiMemoryTable.htm);


	- [UiMetabaseDataset](UiMetabaseDataset.htm);


	- [UiRdsDictionary](UiRdsDictionary.htm).


После этого компонент UiDataSource
 необходимо указать в качестве источника данных для соответствующего визуального
 компонента. В качестве визуальных компонентов могут использоваться следующие:


	- [DataGrid](DataGrid.htm);


	- [DBComboBox](DBComboBox.htm);


	- [DBEditBox](DBEditBox.htm);


	- [DBListBox](DBListBox.htm);


	- [DBLookupComboBox](DBLookupComboBox.htm);


	- [DBLookupListBox](DBLookupListBox.htm);


	- [DBMemo](DBMemo.htm).


Также в визуальном компоненте будет необходимо указать поле, данные
 которого будут отображаться и редактироваться.


## Свойства компонента UiDataSource


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
		 [Dataset](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.Dataset.htm)
		 Свойство Dataset определяет
		 набор данных, для которого данный компонент служит каналом передачи
		 информации к визуальным компонентам доступа к данным.


		 ![](../../Property_Image.gif)
		 [Enabled](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.Enabled.htm)
		 Свойство Enabled определяет
		 признак передачи данных в компоненты визуального отображения данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [State](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.State.htm)
		 Свойство State возвращает
		 текущее состояние источника данных.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiDataSource


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Edit](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.Edit.htm)
		 Метод Edit позволяет
		 редактировать источник данных.


		 ![](../../Sub_Image.gif)
		 [IsLinkedTo](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.IsLinkedTo.htm)
		 Метод IsLinkedTo осуществляет
		 проверку наличия связи источника данных UiDataSource
		 с набором данных, передаваемым в качестве входного параметра.


## События компонента UiDataSource


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnDataChange](KeExtCtrls.chm::/Class/UiDataSource/UiDataSource.OnDataChange.htm)
		 Событие OnDataChange
		 происходит во время перехода на другую запись и при изменении
		 значения поля.


		 ![](../../Event_Image.gif)
		 [OnUpdateData](KeExtCtrls.chm::/Class/UiDataSource/UiDataSource.OnUpdateData.htm)
		 Событие OnUpdateData
		 происходит перед занесением измененных данных в БД.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
