# IUiMetabaseDataset

IUiMetabaseDataset
-


# IUiMetabaseDataset


Сборка: ExtCtrls;


## Описание


Интерфейс IUiMetabaseDataset
 содержит свойства и методы компонента среды разработки - [UiMetabaseDataset](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMetabaseDataset.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dataset](IUiMetabaseDataset.Dataset.htm)
		 Свойство Dataset определяет
		 реляционный источник данных, к которому необходимо получить доступ.


## Свойства, унаследованные от [IUiDataSet](../IUiDataSet/IUiDataSet.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](../IUiDataSet/IUiDataSet.Active.htm)
		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Bof](../IUiDataSet/IUiDataSet.Bof.htm)
		 Свойство Bof возвращает
		 признак расположения курсора в источнике данных на первой записи.


		 ![](../../Property_Image.gif)
		 [CachedDataset](../IUiDataSet/IUiDataSet.CachedDataset.htm)
		 Свойство CachedDataset
		 возвращает кеш источника данных.


		 ![](../../Property_Image.gif)
		 [Eof](../IUiDataSet/IUiDataSet.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [Fields](../IUiDataSet/IUiDataSet.Fields.htm)
		 Свойство Fields возвращает
		 коллекцию полей набора данных.


		 ![](../../Property_Image.gif)
		 [Filter](../IUiDataSet/IUiDataSet.Filter.htm)
		 Свойство Filter определяет
		 текст текущего фильтра набора данных.


		 ![](../../Property_Image.gif)
		 [Filtered](../IUiDataSet/IUiDataSet.Filtered.htm)
		 Свойство Filtered определяет
		 необходимость фильтрации активного набора данных.


		 ![](../../Property_Image.gif)
		 [RecNo](../IUiDataSet/IUiDataSet.RecNo.htm)
		 Свойство RecNo определяет
		 номер текущей записи в источнике данных.


		 ![](../../Property_Image.gif)
		 [RecordCount](../IUiDataSet/IUiDataSet.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [State](../IUiDataSet/IUiDataSet.State.htm)
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


## Методы, унаследованные от [IUiDataSet](../IUiDataSet/IUiDataSet.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Append](../IUiDataSet/IUiDataSet.Append.htm)
		 Метод Append позволяет
		 добавить пустую запись в начало таблицы.


		 ![](../../Sub_Image.gif)
		 [Cancel](../IUiDataSet/IUiDataSet.Cancel.htm)
		 Метод Cancel осуществляет
		 выход из режима редактирования текущей записи без сохранения внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Close](../IUiDataSet/IUiDataSet.Close.htm)
		 Метод Close закрывает
		 источник данных.


		 ![](../../Sub_Image.gif)
		 [Delete](../IUiDataSet/IUiDataSet.Delete.htm)
		 Метод Delete осуществляет
		 удаление текущей записи.


		 ![](../../Sub_Image.gif)
		 [Edit](../IUiDataSet/IUiDataSet.Edit.htm)
		 Метод Edit переводит
		 текущую запись в режим редактирования.


		 ![](../../Sub_Image.gif)
		 [FieldByName](../IUiDataSet/IUiDataSet.FieldByName.htm)
		 Метод FieldByName позволяет
		 найти поле по его имени.


		 ![](../../Sub_Image.gif)
		 [First](../IUiDataSet/IUiDataSet.First.htm)
		 Метод First осуществляет
		 переход в источнике данных на первую запись.


		 ![](../../Sub_Image.gif)
		 [IsEmpty](../IUiDataSet/IUiDataSet.IsEmpty.htm)
		 Метод IsEmpty осуществляет
		 проверку наличия данных.


		 ![](../../Sub_Image.gif)
		 [Last](../IUiDataSet/IUiDataSet.Last.htm)
		 Метод Last осуществляет
		 переход в источнике данных на последнюю запись.


		 ![](../../Sub_Image.gif)
		 [MoveBy](../IUiDataSet/IUiDataSet.MoveBy.htm)
		 Метод MoveBy осуществляет
		 перемещение курсора в источнике данных и возвращает количество
		 записей, на которое переместился курсор.


		 ![](../../Sub_Image.gif)
		 [Next](../IUiDataSet/IUiDataSet.Next.htm)
		 Метод Next осуществляет
		 переход в источнике данных к следующей записи.


		 ![](../../Sub_Image.gif)
		 [Open](../IUiDataSet/IUiDataSet.Open.htm)
		 Метод Open осуществляет
		 открытие источника данных.


		 ![](../../Sub_Image.gif)
		 [Post](../IUiDataSet/IUiDataSet.Post.htm)
		 Метод Post осуществляет
		 выход из режима редактирования текущей записи с сохранением внесенных
		 в нее изменений.


		 ![](../../Sub_Image.gif)
		 [Prior](../IUiDataSet/IUiDataSet.Prior.htm)
		 Метод Prior осуществляет
		 переход в источнике данных к предыдущей записи.


		 ![](../../Sub_Image.gif)
		 [Refresh](../IUiDataSet/IUiDataSet.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление данных при внесении изменений в набор данных источника.


		 ![](../../Sub_Image.gif)
		 [Truncate](../IUiDataSet/IUiDataSet.Truncate.htm)
		 Метод Truncute осуществляет
		 удаление всех записей из источника данных.


См. также:


[Интерфейсы сборки ExtCtrls](../KeExtCtrls_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
