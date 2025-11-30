# IDataGridColumn

IDataGridColumn
-


# IDataGridColumn


Сборка: ExtCtrls;


## Описание


Интерфейс IDataGridColumn содержит
 свойства и методы колонки компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IDataGridBandBase](../IDataGridBandBase/IDataGridBandBase.htm)


           IDataGridColumn


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EditorBinding](IDataGridColumn.EditorBinding.htm)
		 Свойство EditorBinding
		 определяет синтаксис редактора для ячеек текущего столбца.


		 ![](../../Property_Image.gif)
		 [Field](IDataGridColumn.Field.htm)
		 Свойство Field определяет
		 поле источника данных, данные которого отображаются в текущем
		 столбце.


		 ![](../../Property_Image.gif)
		 [FieldName](IDataGridColumn.FieldName.htm)
		 Свойство FieldName
		 определяет наименование поля источника данных, с которым связан
		 текущий столбец.


		 ![](../../Property_Image.gif)
		 [FilterAction](IDataGridColumn.FilterAction.htm)
		 Свойство FilterAction
		 возвращает индекс установленной фильтрации столбца.


		 ![](../../Property_Image.gif)
		 [Focused](IDataGridColumn.Focused.htm)
		 Свойство Focused возвращает
		 признак нахождения фокуса в данной колонке.


		 ![](../../Property_Image.gif)
		 [LocalValueFormat](IDataGridColumn.LocalValueFormat.htm)
		 Свойство LocalValueFormat
		 определяет формат отображения данных в столбце таблицы в соответствии
		 с настройками региональных параметров.


		 ![](../../Property_Image.gif)
		 [Lookup](IDataGridColumn.Lookup.htm)
		 Свойство Lookup определяет
		 параметры отображения выбранного элемента в раскрывающемся списке
		 справочника.


		 ![](../../Property_Image.gif)
		 [SortAscending](IDataGridColumn.SortAscending.htm)
		 Свойство SortAscending
		 определяет направление сортировки.


		 ![](../../Property_Image.gif)
		 [SortIndex](IDataGridColumn.SortIndex.htm)
		 Свойство SortIndex
		 определяет индекс установленной сортировки.


		 ![](../../Property_Image.gif)
		 [StyleIndex](IDataGridColumn.StyleIndex.htm)
		 Свойство StyleIndex
		 определяет для текущего столбца индекс стиля из коллекции установленных
		 стилей для компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


		 ![](../../Property_Image.gif)
		 [ValueFormat](IDataGridColumn.ValueFormat.htm)
		 Свойство ValueFormat
		 определяет формат отображения данных в столбце.


## Свойства, унаследованные от [IDataGridBandBase](../IDataGridBandBase/IDataGridBandBase.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoWidth](../IDataGridBandBase/IDataGridBandBase.AutoWidth.htm)
		 Свойство AutoWidth
		 определяет значение, которое будет использоваться для автоматического
		 подгона ширины контейнера или колонки при изменении размеров компонента
		 [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


		 ![](../../Property_Image.gif)
		 [CanSetVisible](../IDataGridBandBase/IDataGridBandBase.CanSetVisible.htm)
		 Свойство CanSetVisible
		 определяет возможность изменить видимость контейнера/колонки компонента.


		 ![](../../Property_Image.gif)
		 [ColumnIndex](../IDataGridBandBase/IDataGridBandBase.ColumnIndex.htm)
		 Свойство ColumnIndex
		 возвращает индекс столбца или контейнера на текущем уровне вложенности.


		 ![](../../Property_Image.gif)
		 [Columns](../IDataGridBandBase/IDataGridBandBase.Columns.htm)
		 Свойство Columns возвращает
		 коллекцию дочерних столбцов контейнера.


		 ![](../../Property_Image.gif)
		 [Fixed](../IDataGridBandBase/IDataGridBandBase.Fixed.htm)
		 Свойство Fixed определяет
		 фиксированный контейнер, в котором расположен объект.


		 ![](../../Property_Image.gif)
		 [HeaderStyle](../IDataGridBandBase/IDataGridBandBase.HeaderStyle.htm)
		 Свойство HeaderStyle
		 возвращает стиль оформления заголовка контейнера или колонки.


		 ![](../../Property_Image.gif)
		 [Height](../IDataGridBandBase/IDataGridBandBase.Height.htm)
		 Свойство Height возвращает
		 высоту контейнера или заголовка колонки.


		 ![](../../Property_Image.gif)
		 [Index](../IDataGridBandBase/IDataGridBandBase.Index.htm)
		 Свойство Index возвращает
		 уникальный индекс объекта в коллекции контейнеров или столбцов.


		 ![](../../Property_Image.gif)
		 [Left](../IDataGridBandBase/IDataGridBandBase.Left.htm)
		 Свойство Left возвращает
		 расстояние левой границы контейнера или колонки от левой границы
		 компонента DataGrid.


		 ![](../../Property_Image.gif)
		 [Level](../IDataGridBandBase/IDataGridBandBase.Level.htm)
		 Свойство Level возвращает
		 уровень вложенности объекта.


		 ![](../../Property_Image.gif)
		 [Menu](../IDataGridBandBase/IDataGridBandBase.Menu.htm)
		 Свойство Menu определяет
		 контекстное меню, вызываемое в области заголовка контейнера/колонки.


		 ![](../../Property_Image.gif)
		 [MinWidth](../IDataGridBandBase/IDataGridBandBase.MinWidth.htm)
		 Свойство MinWidth определяет
		 минимальную ширину контейнера или заголовка колонки.


		 ![](../../Property_Image.gif)
		 [Options](../IDataGridBandBase/IDataGridBandBase.Options.htm)
		 Свойство Options возвращает
		 дополнительные свойства объекта.


		 ![](../../Property_Image.gif)
		 [ParentBand](../IDataGridBandBase/IDataGridBandBase.ParentBand.htm)
		 Свойство ParentBand
		 определяет родительский объект.


		 ![](../../Property_Image.gif)
		 [RootBand](../IDataGridBandBase/IDataGridBandBase.RootBand.htm)
		 Свойство RootBand возвращает
		 самый первый (корневой) родительский контейнер.


		 ![](../../Property_Image.gif)
		 [RowIndex](../IDataGridBandBase/IDataGridBandBase.RowIndex.htm)
		 Свойство RowIndex возвращает
		 индекс строки, в которой находится заголовок объекта.


		 ![](../../Property_Image.gif)
		 [Title](../IDataGridBandBase/IDataGridBandBase.Title.htm)
		 Свойство Title определяет
		 текст заголовка контейнера или колонки.


		 ![](../../Property_Image.gif)
		 [Top](../IDataGridBandBase/IDataGridBandBase.Top.htm)
		 Свойство Top возвращает
		 расстояние верхней границы контейнера или колонки от верхней границы
		 компонента [DataGrid](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DataGrid.htm).


		 ![](../../Property_Image.gif)
		 [TotalPopup](../IDataGridBandBase/IDataGridBandBase.TotalPopup.htm)
		 Свойство TotalPopup
		 определяет контекстное меню, которое будет появляться при щелчке
		 дополнительной кнопки мыши в области итогов данного объекта.


		 ![](../../Property_Image.gif)
		 [TotalStyle](../IDataGridBandBase/IDataGridBandBase.TotalStyle.htm)
		 Свойство TotalStyle
		 определяет вид итогов, рассчитываемых для данного объекта.


		 ![](../../Property_Image.gif)
		 [TotalValue](../IDataGridBandBase/IDataGridBandBase.TotalValue.htm)
		 Свойство TotalValue
		 определяет значение, отображаемое в итогах объекта.


		 ![](../../Property_Image.gif)
		 [Visible](../IDataGridBandBase/IDataGridBandBase.Visible.htm)
		 Свойство Visible определяет
		 признак видимости данного объекта в таблице.


		 ![](../../Property_Image.gif)
		 [Width](../IDataGridBandBase/IDataGridBandBase.Width.htm)
		 Свойство Width определяет
		 ширину контейнера или заголовка колонки.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AdjustWidth](IDataGridColumn.AdjustWidth.htm)
		 Метод AdjustWidth
		 выполняет автоматическую подгонку ширины столбца.


		 ![](../../Sub_Image.gif)
		 [DoFilterAction](IDataGridColumn.DoFilterAction.htm)
		 Метод DoFilterAction
		 применяет фильтрацию, индекс которой передается в качестве входного
		 параметра.


## Методы, унаследованные от [IDataGridBandBase](../IDataGridBandBase/IDataGridBandBase.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Delete](../IDataGridBandBase/IDataGridBandBase.Delete.htm)
		 Метод Delete удаляет
		 объект, для которого он был вызван.


		 ![](../../Sub_Image.gif)
		 [SetParentBand](../IDataGridBandBase/IDataGridBandBase.SetParentBand.htm)
		 Метод SetParentBand
		 позволяет поместить объект в контейнер в заданные позиции.


См. также:


[Интерфейсы сборки ExtCtrls](../KeExtCtrls_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
