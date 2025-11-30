# UiMemoryTable: Класс

UiMemoryTable: Класс
-


# UiMemoryTable


Сборка: ExtCtrls;


## Описание


Класс UiMemoryTable реализует
 компонент среды разработки [UiMemoryTable](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMemoryTable.htm),
 предоставляющий временную таблицу с заданным списком полей, хранящуюся
 в памяти ПК.


## Свойства, унаследованные от [IUiDataSet](../../Interface/IUiDataSet/IUiDataSet.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](../../Interface/IUiDataSet/IUiDataSet.Active.htm)
		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Bof](../../Interface/IUiDataSet/IUiDataSet.Bof.htm)
		 Свойство Bof возвращает
		 признак расположения курсора в источнике данных на первой записи.


		 ![](../../Property_Image.gif)
		 [CachedDataset](../../Interface/IUiDataSet/IUiDataSet.CachedDataset.htm)
		 Свойство CachedDataset
		 возвращает кеш источника данных.


		 ![](../../Property_Image.gif)
		 [Eof](../../Interface/IUiDataSet/IUiDataSet.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [Fields](../../Interface/IUiDataSet/IUiDataSet.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей набора данных.


		 ![](../../Property_Image.gif)
		 [Filter](../../Interface/IUiDataSet/IUiDataSet.Filter.htm)
		 Свойство Filter определяет
		 текст текущего фильтра набора данных.


		 ![](../../Property_Image.gif)
		 [Filtered](../../Interface/IUiDataSet/IUiDataSet.Filtered.htm)
		 Свойство Filtered определяет
		 необходимость фильтрации активного набора данных.


		 ![](../../Property_Image.gif)
		 [RecNo](../../Interface/IUiDataSet/IUiDataSet.RecNo.htm)
		 Свойство RecNo определяет
		 номер текущей записи в источнике данных.


		 ![](../../Property_Image.gif)
		 [RecordCount](../../Interface/IUiDataSet/IUiDataSet.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [State](../../Interface/IUiDataSet/IUiDataSet.State.htm)
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


## Методы, унаследованные от [IUiDataSet](../../Interface/IUiDataSet/IUiDataSet.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Append](../../Interface/IUiDataSet/IUiDataSet.Append.htm)
		 Метод Append позволяет
		 добавить пустую запись в начало таблицы.


		 ![](../../Sub_Image.gif)
		 [Cancel](../../Interface/IUiDataSet/IUiDataSet.Cancel.htm)
		 Метод Cancel осуществляет
		 выход из режима редактирования текущей записи без сохранения внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Close](../../Interface/IUiDataSet/IUiDataSet.Close.htm)
		 Метод Close закрывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [Delete](../../Interface/IUiDataSet/IUiDataSet.Delete.htm)
		 Метод Delete осуществляет
		 удаление текущей записи.


		 ![](../../Sub_Image.gif)
		 [Edit](../../Interface/IUiDataSet/IUiDataSet.Edit.htm)
		 Метод Edit переводит
		 текущую запись в режим редактирования.


		 ![](../../Sub_Image.gif)
		 [FieldByName](../../Interface/IUiDataSet/IUiDataSet.FieldByName.htm)
		 Метод FieldByName позволяет
		 найти поле по его имени.


		 ![](../../Sub_Image.gif)
		 [First](../../Interface/IUiDataSet/IUiDataSet.First.htm)
		 Метод First осуществляет
		 переход в источнике данных на первую запись.


		 ![](../../Sub_Image.gif)
		 [IsEmpty](../../Interface/IUiDataSet/IUiDataSet.IsEmpty.htm)
		 Метод IsEmpty осуществляет
		 проверку наличия данных.


		 ![](../../Sub_Image.gif)
		 [Last](../../Interface/IUiDataSet/IUiDataSet.Last.htm)
		 Метод Last осуществляет
		 переход в источнике данных на последнюю запись.


		 ![](../../Sub_Image.gif)
		 [MoveBy](../../Interface/IUiDataSet/IUiDataSet.MoveBy.htm)
		 Метод MoveBy осуществляет
		 перемещение курсора в источнике данных и возвращает количество
		 записей, на которое переместился курсор.


		 ![](../../Sub_Image.gif)
		 [Next](../../Interface/IUiDataSet/IUiDataSet.Next.htm)
		 Метод Next осуществляет
		 переход в источнике данных к следующей записи.


		 ![](../../Sub_Image.gif)
		 [Open](../../Interface/IUiDataSet/IUiDataSet.Open.htm)
		 Метод Open осуществляет
		 открытие источника данных.


		 ![](../../Sub_Image.gif)
		 [Post](../../Interface/IUiDataSet/IUiDataSet.Post.htm)
		 Метод Post осуществляет
		 выход из режима редактирования текущей записи с сохранением внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Prior](../../Interface/IUiDataSet/IUiDataSet.Prior.htm)
		 Метод Prior осуществляет
		 переход в источнике данных к предыдущей записи.


		 ![](../../Sub_Image.gif)
		 [Refresh](../../Interface/IUiDataSet/IUiDataSet.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление данных при внесении изменений в набор данных источника.


		 ![](../../Sub_Image.gif)
		 [Truncate](../../Interface/IUiDataSet/IUiDataSet.Truncate.htm)
		 Метод Truncute осуществляет
		 удаление всех записей из источника данных.


## События, унаследованные от [IUiDataSet](../../Interface/IUiDataSet/IUiDataSet.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterClose](../../Interface/IUiDataSet/IUiDataSet.OnAfterClose.htm)
		 Событие OnAfterClose
		 наступает после закрытия источника данных.


		 ![](../../Event_Image.gif)
		 [OnAfterOpen](../../Interface/IUiDataSet/IUiDataSet.OnAfterOpen.htm)
		 Событие OnAfterOpen
		 наступает после открытия источника данных.


		 ![](../../Event_Image.gif)
		 [OnAfterScroll](../../Interface/IUiDataSet/IUiDataSet.OnAfterScroll.htm)
		 Событие OnAfterScroll
		 наступает после перемещения по записям в источнике данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeClose](../../Interface/IUiDataSet/IUiDataSet.OnBeforeClose.htm)
		 Событие OnBeforeClose
		 наступает перед закрытием источника данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeOpen](../../Interface/IUiDataSet/IUiDataSet.OnBeforeOpen.htm)
		 Событие OnBeforeOpen
		 наступает перед открытием источника данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeScroll](../../Interface/IUiDataSet/IUiDataSet.OnBeforeScroll.htm)
		 Событие OnBeforeScroll
		 наступает перед перемещением по записям в источнике данных.


См. также:


[Классы сборки ExtCtrls](../KeExtCtrls_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
