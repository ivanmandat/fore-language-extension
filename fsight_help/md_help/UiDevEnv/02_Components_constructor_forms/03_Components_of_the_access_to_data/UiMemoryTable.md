# UiMemoryTable: Компонент

UiMemoryTable: Компонент
-


# UiMemoryTable


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiDataSet](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.htm)


           [IUiMemoryTable](KeExtCtrls.chm::/Interface/IUiMemoryTable/IUiMemoryTable.htm)


           [UiMemoryTable](KeExtCtrls.chm::/Class/UiMemoryTable/UiMemoryTable.htm)


## Описание


Компонент UiMemoryTable используется для генерации временной таблицы с заданным списком полей.


## Работа с компонентом


После размещения компонента на форме необходимо сформировать список полей будущей таблицы. Для этого в [инспекторе объектов](../../01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) дважды щеклните по редактору для свойства [Fields](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Fields.htm) или нажмите кнопку ![](../../Select_Button.gif), расположенную в редакторе. В открывшемся окне сформируйте список полей выбирая тип поля и нажимая верхнюю кнопку «*». Для свойства [Active](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Active.htm) установите значение True.


Созданная таким образом таблица может использоваться для временного хранения результатов различных расчетов. Для просмотра и редактирования данных необходимо компонент UiMemoryTable подключить к визуальным компонентам через [UiDataSource](UiDataSource.htm).


Примечание. Редактирование списка полей доступно только в режиме дизайнера формы.


## Свойства компонента UiMemoryTable


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)


		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Bof](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Bof.htm)


		 Свойство Bof возвращает
		 признак расположения курсора в источнике данных на первой записи.


		 ![](../../Property_Image.gif)
		 [CachedDataset](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.CachedDataset.htm)


		 Свойство CachedDataset
		 возвращает кеш источника данных.


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
		 [Eof](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Eof.htm)


		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [Fields](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Fields.htm)


		 Свойство Fields возвращает
		 коллекцию полей набора данных.


		 ![](../../Property_Image.gif)
		 [Filter](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Filter.htm)


		 Свойство Filter определяет
		 текст текущего фильтра набора данных.


		 ![](../../Property_Image.gif)
		 [Filtered](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Filtered.htm)


		 Свойство Filtered определяет
		 необходимость фильтрации активного набора данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [RecNo](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.RecNo.htm)


		 Свойство RecNo определяет
		 номер текущей записи в источнике данных.


		 ![](../../Property_Image.gif)
		 [RecordCount](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.RecordCount.htm)


		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [State](KeExtCtrls.chm::/Interface/IUiDataSource/IUiDataSource.State.htm)


		 Свойство State возвращает
		 текущее состояние источника данных.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiMemoryTable


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Append](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Append.htm)


		 Метод Append позволяет
		 добавить пустую запись в начало таблицы.


		 ![](../../Sub_Image.gif)
		 [Cancel](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Cancel.htm)


		 Метод Cancel осуществляет
		 выход из режима редактирования текущей записи без сохранения внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Close](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Close.htm)


		 Метод Close осуществляет
		 закрытие источника данных.


		 ![](../../Sub_Image.gif)
		 [Delete](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Delete.htm)


		 Метод Delete осуществляет
		 удаление текущей записи.


		 ![](../../Sub_Image.gif)
		 [Edit](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Edit.htm)


		 Метод Edit переводит
		 текущую запись в режим редактирования.


		 ![](../../Sub_Image.gif)
		 [FieldByName](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.FieldByName.htm)


		 Метод FieldByName позволяет
		 найти поле по его имени.


		 ![](../../Sub_Image.gif)
		 [First](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.First.htm)


		 Метод First осуществляет
		 переход в источнике данных на первую запись.


		 ![](../../Sub_Image.gif)
		 [IsEmpty](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.IsEmpty.htm)


		 Метод IsEmpty осуществляет
		 проверку наличия данных.


		 ![](../../Sub_Image.gif)
		 [Last](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Last.htm)


		 Метод Last осуществляет
		 переход в источнике данных на последнюю запись.


		 ![](../../Sub_Image.gif)
		 [MoveBy](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.MoveBy.htm)


		 Метод MoveBy осуществляет
		 перемещение курсора в источнике данных и возвращает количество
		 записей, на которое переместился курсор.


		 ![](../../Sub_Image.gif)
		 [Next](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Next.htm)


		 Метод Next осуществляет
		 переход в источнике данных к следующей записи.


		 ![](../../Sub_Image.gif)
		 [Open](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Open.htm)


		 Метод Open осуществляет
		 открытие источника данных.


		 ![](../../Sub_Image.gif)
		 [Post](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Post.htm)


		 Метод Post осуществляет
		 выход из режима редактирования текущей записи с сохранением внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Prior](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Prior.htm)


		 Метод Prior осуществляет
		 переход в источнике данных к предыдущей записи.


		 ![](../../Sub_Image.gif)
		 [Refresh](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Refresh.htm)


		 Метод Refresh осуществляет
		 обновление данных при внесении изменений в набор данных источника.


		 ![](../../Sub_Image.gif)
		 [Truncate](KeExtCtrls.chm::/Interface/IUiDataSet/IUiDataSet.Truncate.htm)


		 Метод Truncute осуществляет
		 удаление всех записей из источника данных.


## События компонента UiMemoryTable


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
		 наступает после перемещения по записям источника данных.


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
		 наступает перед перемещением по записям источника данных.


См. также:


[Компоненты доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
