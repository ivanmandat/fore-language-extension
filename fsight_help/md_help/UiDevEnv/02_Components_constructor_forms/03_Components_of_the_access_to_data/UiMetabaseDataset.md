# UiMetabaseDataset: Компонент

UiMetabaseDataset: Компонент
-


# UiMetabaseDataset


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiDataSet](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.htm)


           [IUiMetabaseDataset](KeExtCtrls.chm::/Interface/IUiMetabaseDataset/IUiMetabaseDataset.htm)


           [UiMetabaseDataset](KeExtCtrls.chm::/Class/UiMetabaseDataset/UiMetabaseDataset.htm)


## Описание


Компонент UiMetabaseDataset
 является невизуальным, используется для получения доступа к данным реляционных
 источников данных репозитория.


## Комментарии


К реляционным источникам данных относятся [Таблицы](UiNavObj.chm::/Table/UiDb_relational_table.htm),
 [Запросы](UiNavObj.chm::/Query/query.htm)
 и [Представления](UiNavObj.chm::/conception/UiDb_relational_conception.htm).
 UiMetabaseDataset представляет
 собой расположенный в памяти кеш данных, загружаемых из источника. Для
 работы компонента необходимо в инспекторе объектов в свойстве [Dataset](KeExtCtrls.chm::/Interface/IUiMetabaseDataset/IUiMetabaseDataset.Dataset.htm)
 указать реляционный источник данных. Для этого в редакторе свойства укажите
 идентификатор соответствующего объекта репозитория или нажмите кнопку
 ![](../../Select_Button.gif) и выберите объект в открывшемся диалоге.
 В поле [Fields](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Fields.htm)
 можно выбрать поля, значения которых будут доступны при работе с компонентом.
 Для свойства [Active](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Active.htm)
 установите значение True.


Для просмотра и редактирования данных необходимо компонент UiMetabaseDataset
 подключить к визуальным компонентам через [UiDataSource](UiDataSource.htm).


## Свойства компонента UiMetabaseDataset


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Active.htm)


		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Bof](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Bof.htm)


		 Свойство Bof возвращает
		 True, если указатель в
		 источнике данных стоит на первой записи.


		 ![](../../Property_Image.gif)
		 [CachedDataset](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.CachedDataset.htm)


		 Свойство CachedDataset
		 возвращает кеш источника данных.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/icomponent/icomponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/icomponent/icomponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/icomponent/icomponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Dataset](KeExtCtrls.chm::/Interface/IUiMetabaseDataset/IUiMetabaseDataset.Dataset.htm)


		 Свойство Dataset определяет
		 структуру источника данных, к которому необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [Eof](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Eof.htm)


		 Свойство Eof возвращает
		 True, если указатель в
		 источнике данных стоит на последней записи.


		 ![](../../Property_Image.gif)
		 [Fields](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Fields.htm)


		 Свойство Fields возвращает
		 коллекцию полей.


		 ![](../../Property_Image.gif)
		 [Filter](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Filter.htm)


		 Свойство Filter определяет
		 условие фильтрации данных.


		 ![](../../Property_Image.gif)
		 [Filtered](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Filtered.htm)


		 Свойство Filtered определяет,
		 будет ли производится фильтрации данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/icomponent/icomponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [RecNo](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.RecNo.htm)


		 Свойство RecNo определяет
		 номер текущей записи в источнике данных.


		 ![](../../Property_Image.gif)
		 [RecordCount](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.RecordCount.htm)


		 Свойство RecordCount
		 определяет количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [State](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.State.htm)


		 Свойство State возвращает
		 текущее состояние источника данных.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiMetabaseDataset


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Append](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Append.htm)


		 Метод Append осуществляет
		 добавление пустой записи в начало таблицы.


		 ![](../../Sub_Image.gif)
		 [Cancel](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Cancel.htm)


		 Метод Cancel осуществляет
		 отмену внесенных изменений текущей записи.


		 ![](../../Sub_Image.gif)
		 [Close](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Close.htm)


		 Метод Close осуществляет
		 закрытие источника данных.


		 ![](../../Sub_Image.gif)
		 [Delete](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Delete.htm)


		 Метод Delete удаляет
		 текущую запись.


		 ![](../../Sub_Image.gif)
		 [Edit](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Edit.htm)


		 Метод Edit открывает
		 на редактирование текущую запись источника данных.


		 ![](../../Sub_Image.gif)
		 [FieldByName](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.FieldByName.htm)


		 Метод FieldByName осуществляет
		 поиск поля по наименованию.


		 ![](../../Sub_Image.gif)
		 [First](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.First.htm)


		 Метод First устанавливает
		 курсор на первую запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [IsEmpty](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.IsEmpty.htm)


		 Метод IsEmpty возвращает
		 True если источник данных
		 пуст.


		 ![](../../Sub_Image.gif)
		 [Last](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Last.htm)


		 Метод Last устанавливает
		 курсор на последнюю запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [MoveBy](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.MoveBy.htm)


		 Метод MoveBy осуществляет
		 перемещение курсора в источнике данных и возвращает количество
		 записей, на которое переместился курсор.


		 ![](../../Sub_Image.gif)
		 [Next](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Next.htm)


		 Метод Next устанавливает
		 курсор на следующую запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [Open](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Open.htm)


		 Метод Open открывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [Post](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Post.htm)


		 Метод Post сохраняет
		 изменения, внесенные в текущую запись источника данных.


		 ![](../../Sub_Image.gif)
		 [Prior](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Prior.htm)


		 Метод Prior устанавливает
		 курсор на предыдущую запись в источнике данных.


		 ![](../../Sub_Image.gif)
		 [Refresh](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Refresh.htm)


		 Метод Refresh осуществляет
		 обновление данных компонента.


		 ![](../../Sub_Image.gif)
		 [Truncate](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Truncate.htm)


		 Метод Truncute осуществляет
		 удаление всех записей из источника данных.


## События компонента UiMetabaseDataset


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterClose](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnAfterClose.htm)


		 Событие OnAfterClose
		 наступает после закрытия источника данных.


		 ![](../../Event_Image.gif)
		 [OnAfterOpen](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnAfterOpen.htm)


		 Событие OnAfterOpen
		 наступает после открытия источника данных.


		 ![](../../Event_Image.gif)
		 [OnAfterScroll](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnAfterScroll.htm)


		 Событие OnAfterScroll
		 наступает после перемещения по строкам данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeClose](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnBeforeClose.htm)


		 Событие OnBeforeClose
		 наступает перед закрытием источника данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeOpen](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnBeforeOpen.htm)


		 Событие OnBeforeOpen
		 наступает перед открытием источника данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeScroll](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.OnBeforeScroll.htm)


		 Событие OnBeforeScroll
		 наступает перед перемещением по строкам данных.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
