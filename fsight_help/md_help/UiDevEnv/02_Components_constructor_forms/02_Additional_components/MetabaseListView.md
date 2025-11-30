# MetabaseListView: Компонент

MetabaseListView: Компонент
-


# MetabaseListView


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [IListView](ModForms.chm::/Interface/IListView/IListView.htm)


           [IMetabaseListView](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.htm)


           [MetabaseListView](KeExtCtrls.chm::/Class/MetabaseListView/MetabaseListView.htm)


## Описание


Компонент MetabaseListView предназначен
 для отображения списка объектов репозитория в виде значков.


## Работа с компонентом


Компонент MetabaseListView содержит
 функциональность компонента [ListView](ListView.htm)
 и позволяет отображать список объектов репозитория в различном представлении
 (крупные или мелкие пиктограммы, список или таблица).


Компонент может работать в двух режимах:


	- если задать свойство [Root](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Root.htm), то компонент будет
	 использоваться для отображения содержимого выбранного объекта. В качестве
	 значения свойства [Root](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Root.htm) необходимо указать
	 какую-либо папку или объект-контейнер (Репозиторий НСИ, База данных
	 временных рядов, Контейнер моделирования, Сборка);


	- если в свойстве [Tree](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Tree.htm) задать какой-либо
	 компонент [MetabaseTreeList](MetabaseTreeList.htm),
	 то компонент MetabaseListView
	 будет использоваться для отображения содержимого того объекта, который
	 выбран в [MetabaseTreeList](MetabaseTreeList.htm).
	 Свойство [Root](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Root.htm) при этом игнорируется.


Формат представления значков изменяется в свойстве [Style](ModForms.chm::/Interface/IListView/IListView.Style.htm).
 Для работы со списком элементов компонента используются различные свойства
 и методы:


	- [CheckedObjects](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.CheckedObjects.htm).
	 Коллекция описаний объектов, отмеченных в компоненте флагами;


	- [SelectedObjects](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.SelectedObjects.htm).
	 Коллекция описаний объектов, выделенных в компоненте;


	- [FindByDescriptor](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.FindByDescriptor.htm).
	 Поиск объекта репозитория по описанию и возврат соответствующего элемента
	 в компоненте;


	- [FindItemByKey](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.FindItemByKey.htm).
	 Поиск объекта репозитория по ключу и возврат соответствующего элемента
	 в компоненте.


Каждый элемент компонента MetabaseListView
 описывается интерфейсом [IMetabaseListViewItem](KeExtCtrls.chm::/Interface/IMetabaseListViewItem/IMetabaseListViewItem.htm).
 Для получения описания объекта репозитория, которому соответствует какой-либо
 элемент в компоненте, используйте свойство [IMetabaseListViewItem.ObjectDescriptor](KeExtCtrls.chm::/Interface/IMetabaseListViewItem/IMetabaseListViewItem.ObjectDescriptor.htm).


В свойстве [Filters](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Filters.htm) можно задать
 список объектов, которые будут отображаться в компоненте. Все остальные
 объекты во время работы будут скрыты.


## Пример


![](MetabaseListView_Sample.png)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckedObjects](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.CheckedObjects.htm)
		 Свойство CheckedObjects
		 возвращает коллекцию описаний объектов, у которых в компоненте
		 отмечены флажки.


		 ![](../../Property_Image.gif)
		 [EnableFindAll](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.EnableFindAll.htm)
		 Свойство EnableFindAll
		 определяет признак наличия кнопки «Найти все» в диалоге поиска.


		 ![](../../Property_Image.gif)
		 [EnableSystemPopupMenu](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.EnableSystemPopupMenu.htm)
		 Свойство EnableSystemPopupMenu
		 определяет признак доступности системного контекстного меню для
		 элементов, отображаемых в компоненте.


		 ![](../../Property_Image.gif)
		 [Filters](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Filters.htm)
		 Свойство Filters возвращает
		 коллекцию фильтров, используемых в компоненте.


		 ![](../../Property_Image.gif)
		 [Root](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Root.htm)
		 Свойство Root определяет
		 описание корневого каталога, содержимое которого будет отображаться
		 в компоненте.


		 ![](../../Property_Image.gif)
		 [SelectedObjects](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.SelectedObjects.htm)
		 Свойство SelectedObjects
		 возвращает коллекцию описаний объектов, которые выделены в списке
		 компонента.


		 ![](../../Property_Image.gif)
		 [Tree](KeExtCtrls.chm::/Interface/IMetabaseListView/IMetabaseListView.Tree.htm)
		 Свойство Tree определяет
		 компонент, который будет управлять содержимым текущего компонента.


## Свойства,
 унаследованные от [IListView](ModForms.chm::/Interface/IListView/IListView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Arrangement](ModForms.chm::/Interface/IListView/IListView.Arrangement.htm)
		 Свойство Arrangement
		 определяет способ выравнивания элементов в компоненте.


		 ![](../../Property_Image.gif)
		 [AutoArrange](ModForms.chm::/Interface/IListView/IListView.AutoArrange.htm)
		 Свойство AutoArrange
		 определяет, будут ли элементы автоматически располагаться правильными
		 рядами при изменении их количества.


		 ![](../../Property_Image.gif)
		 [BorderStyle](ModForms.chm::/Interface/IListView/IListView.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль рамки, обрамляющей компонент.


		 ![](../../Property_Image.gif)
		 [Checkboxes](ModForms.chm::/Interface/IListView/IListView.Checkboxes.htm)
		 Свойство Checkboxes
		 определяет признак наличия флагов у элементов компонента.


		 ![](../../Property_Image.gif)
		 [ColumnClick](ModForms.chm::/Interface/IListView/IListView.ColumnClick.htm)
		 Свойство ColumnClick
		 определяет возможность отображения заголовков столбцов в виде
		 кнопок.


		 ![](../../Property_Image.gif)
		 [Columns](modforms.chm::/Interface/IListView/IListView.Columns.htm)
		 Свойство Columns возвращает
		 коллекцию заголовков компонента.


		 ![](../../Property_Image.gif)
		 [FocusedItem](ModForms.chm::/Interface/IListView/IListView.FocusedItem.htm)
		 Свойство FocusedItem
		 определяет элемент компонента, содержащий фокус.


		 ![](../../Property_Image.gif)
		 [GridLines](ModForms.chm::/Interface/IListView/IListView.GridLines.htm)
		 Свойство GridLines
		 определяет, будут ли отображаться линии сетки.


		 ![](../../Property_Image.gif)
		 [HeaderMenu](ModForms.chm::/Interface/IListView/IListView.HeaderMenu.htm)
		 Свойство HeaderMenu
		 определяет контекстное меню, вызываемое по щелчку дополнительной
		 кнопки мыши на заголовке колонки компонента.


		 ![](../../Property_Image.gif)
		 [HideSelection](ModForms.chm::/Interface/IListView/IListView.HideSelection.htm)
		 Свойство HideSelection
		 определяет признак отображения отметки в компоненте при передаче
		 фокуса другому компоненту.


		 ![](../../Property_Image.gif)
		 [HighlightTrack](ModForms.chm::/Interface/IListView/IListView/IListView.HighlightTrack.htm)
		 Свойство HighlightTrack
		 определяет, подсвечивать ли элемент при наведении указателя мыши.


		 ![](../../Property_Image.gif)
		 [HotTrackStyles](ModForms.chm::/Interface/IListView/IListView.HotTrackStyles.htm)
		 Свойство HotTrackStyles
		 определяет стиль подсветки элементов, над которыми проходит указатель
		 мыши.


		 ![](../../Property_Image.gif)
		 [HoverTime](ModForms.chm::/Interface/IListView/IListView.HoverTime.htm)
		 Свойство HoverTime
		 определяет промежуток времени, по истечении которого элемент,
		 над которым проходит курсор мыши, будет подсвечиваться.


		 ![](../../Property_Image.gif)
		 [ItemHeight](ModForms.chm::/Interface/IListView/IListView.ItemHeight.htm)
		 Свойство ItemHeight
		 определяет высоту элементов компонента.


		 ![](../../Property_Image.gif)
		 [Items](ModForms.chm::/Interface/IListView/IListView.Items.htm)
		 Свойство Items возвращает
		 коллекцию элементов компонента.


		 ![](../../Property_Image.gif)
		 [LargeImages](ModForms.chm::/Interface/IListView/IListView.LargeImages.htm)
		 Свойство LargeImages
		 определяет источник крупных пиктограмм.


		 ![](../../Property_Image.gif)
		 [MultiSelect](ModForms.chm::/Interface/IListView/IListView.MultiSelect.htm)
		 Свойство MultiSelect
		 определяет возможность множественной отметки элементов списка.


		 ![](../../Property_Image.gif)
		 [ReadOnly](ModForms.chm::/Interface/IListView/IListView.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 возможность внесения каких-либо изменений в список.


		 ![](../../Property_Image.gif)
		 [RowSelect](modforms.chm::/Interface/IListView/IListView.RowSelect.htm)
		 Свойство RowSelect
		 определяет необходимость выделения выбранного элемента подсветкой
		 всей строки.


		 ![](../../Property_Image.gif)
		 [SelectedCount](ModForms.chm::/Interface/IListView/IListView.SelectedCount.htm)
		 Свойство SelectedCount
		 возвращает количество выделенных в компоненте элементов.


		 ![](../../Property_Image.gif)
		 [SelectedItem](ModForms.chm::/Interface/IListView/IListView.SelectedItem.htm)
		 Свойство SelectedItem
		 определяет выделенный элемент компонента.


		 ![](../../Property_Image.gif)
		 [ShowColumnHeaders](ModForms.chm::/Interface/IListView/IListView.ShowColumnHeaders.htm)
		 Свойство ShowColumnHeaders
		 определяет, будут ли отображаться заголовки столбцов.


		 ![](../../Property_Image.gif)
		 [ShowHeaderButton](ModForms.chm::/Interface/IListView/IListView.ShowHeaderButton.htm)
		 Свойство ShowHeaderButton
		 определяет, отображается ли кнопка вызова меню заголовков столбцов.


		 ![](../../Property_Image.gif)
		 [ShowHints](ModForms.chm::/Interface/IListView/IListView.ShowHints.htm)
		 Свойство ShowHints
		 определяет, будет ли появляться всплывающая подсказка при задержке
		 курсора мыши над элементами.


		 ![](../../Property_Image.gif)
		 [SmallImages](ModForms.chm::/Interface/IListView/IListView.SmallImages.htm)
		 Свойство SmallImages
		 определяет источник маленьких пиктограмм.


		 ![](../../Property_Image.gif)
		 [SortColumn](ModForms.chm::/Interface/IListView/IListView.SortColumn.htm)
		 Свойство SortColumn
		 определяет индекс колонки, по которой осуществляется сортировка.


		 ![](../../Property_Image.gif)
		 [SortType](ModForms.chm::/Interface/IListView/IListView.SortType.htm)
		 Свойство SortType определяет
		 тип сортировки для компонента.


		 ![](../../Property_Image.gif)
		 [StateImages](ModForms.chm::/Interface/IListView/IListView.StateImages.htm)
		 Свойство StateImages
		 определяет список изображений, используемых для индикации состояния
		 элементов.


		 ![](../../Property_Image.gif)
		 [Style](ModForms.chm::/Interface/IListView/IListView.Style.htm)
		 Свойство Style определяет
		 стиль отображения элементов компонента.


		 ![](../../Property_Image.gif)
		 [TrackSelect](ModForms.chm::/Interface/IListView/IListView.TrackSelect.htm)
		 Свойство TrackSelect
		 определяет, будет ли отмечаться элемент компонента при удержании
		 над ним курсора мыши.


		 ![](../../Property_Image.gif)
		 [WrapText](ModForms.chm::/Interface/IListView/IListView.WrapText.htm)
		 Свойство WrapText определяет,
		 будет ли возможность переноса текста элемента на несколько строк,
		 если он выходит за границы пиктограммы.


## Свойства, унаследованные от [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Align](ModForms.chm::/Interface/IControl/IControl.Align.htm)


		 Свойство Align определяет
		 выравнивание компонента в рамках содержащего его родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [AllowDrag](ModForms.chm::/Interface/IControl/IControl.AllowDrag.htm)


		 Свойство AllowDrag
		 определяет возможность взять у компонента перетаскиваемый объект.


		 ![](../../Property_Image.gif)
		 [AllowDrop](ModForms.chm::/Interface/IControl/IControl.AllowDrop.htm)


		 Свойство AllowDrop
		 определяет, будет ли возможность у компонента принять перетаскиваемый
		 объект.


		 ![](../../Property_Image.gif)
		 [Anchors](ModForms.chm::/Interface/IControl/IControl.Anchors.htm)


		 Свойство Anchors возвращает
		 настройки, определяющие в процентном соотношении изменение размеров
		 текущего компонента при изменении размеров родительского компонента.


		 ![](../../Property_Image.gif)
		 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)


		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [ClientHeight](ModForms.chm::/Interface/IControl/IControl.ClientHeight.htm)


		 Свойство ClientHeight
		 определяет высоту клиентской области компонента.


		 ![](../../Property_Image.gif)
		 [ClientWidth](ModForms.chm::/Interface/IControl/IControl.ClientWidth.htm)


		 Свойство ClientWidth
		 определяет ширину клиентской области компонента.


		 ![](../../Property_Image.gif)
		 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)


		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [Cursor](ModForms.chm::/Interface/IControl/IControl.Cursor.htm)


		 Свойство Cursor определяет
		 вид курсора, отображаемого при наведении курсора мыши на компонент,
		 во время выполнения формы.


		 ![](../../Property_Image.gif)
		 [Enabled](ModForms.chm::/Interface/IControl/IControl.Enabled.htm)


		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [Focused](ModForms.chm::/Interface/IControl/IControl.Focused.htm)


		 Свойство Focused возвращает
		 True, если фокус установлен
		 на данном компоненте.


		 ![](../../Property_Image.gif)
		 [Font](ModForms.chm::/Interface/IControl/IControl.Font.htm)


		 Свойство Font определяет
		 параметры шрифта, используемого при отображении текста в компоненте.


		 ![](../../Property_Image.gif)
		 [Height](ModForms.chm::/Interface/IControl/IControl.Height.htm)


		 Свойство Height определяет
		 высоту компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [HelpContext](ModForms.chm::/Interface/IControl/IControl.HelpContext.htm)


		 Свойство HelpContext
		 определяет уникальный индекс раздела контекстно-зависимой справки
		 для данного компонента.


		 ![](../../Property_Image.gif)
		 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)


		 Свойство Hint определяет
		 текст подсказки, появляющийся при задержке указателя мыши над
		 компонентом.


		 ![](../../Property_Image.gif)
		 [HintTimeout](ModForms.chm::/Interface/IControl/IControl.HintTimeout.htm)


		 Свойство HintTimeout
		 определяет время отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)


		 Свойство Left определяет
		 координату левого края компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [Parent](ModForms.chm::/Interface/IControl/IControl.Parent.htm)


		 Свойство Parent определяет
		 родительский компонент.


		 ![](../../Property_Image.gif)
		 [ParentColor](ModForms.chm::/Interface/IControl/IControl.ParentColor.htm)


		 Свойство ParentColor
		 определяет, будет ли для компонента заимствован цвет родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentFont](ModForms.chm::/Interface/IControl/IControl.ParentFont.htm)


		 Свойство ParentFont
		 определяет, будет ли для компонента использоваться шрифт родительского
		 компонента.


		 ![](../../Property_Image.gif)
		 [ParentShowHint](ModForms.chm::/Interface/IControl/IControl.ParentShowHint.htm)


		 Свойство ParentShowHint
		 определяет условие отображения всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)


		 Свойство PopupMenu
		 определяет контекстное меню, которое будет появляться по щелчку
		 правой кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)


		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)


		 Свойство ShowHint определяет,
		 будет ли показываться всплывающая подсказка при задержке курсора
		 мыши над компонентом.


		 ![](../../Property_Image.gif)
		 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)


		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)


		 Свойство TabStop определяет
		 признак необходимости компоненту получать фокус при нажатии кнопки
		 «Tab».


		 ![](../../Property_Image.gif)
		 [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm)


		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Top](ModForms.chm::/Interface/IControl/IControl.Top.htm)


		 Свойство Top определяет
		 координату верхнего края компонента в пикселях.


		 ![](../../Property_Image.gif)
		 [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)


		 Свойство Visible определяет
		 видимость компонента во время выполнения формы.


		 ![](../../Property_Image.gif)
		 [Width](ModForms.chm::/Interface/IControl/IControl.Width.htm)


		 Свойство Width определяет
		 горизонтальный размер компонента в пикселях.


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
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


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


## Методы, унаследованные от [IListView](ModForms.chm::/Interface/IListView/IListView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AdjustWidth](ModForms.chm::/Interface/IListView/IListView.AdjustWidth.htm)
		 Метод AdjustWidth осуществляет
		 автоматический подгон ширины колонки с учетом её содержимого.


		 ![](../../Sub_Image.gif)
		 [GetItemAt](ModForms.chm::/Interface/IListView/IListView.GetItemAt.htm)
		 Метод GetItemAt позволяет
		 получить элемент компонента в заданной точке.


		 ![](../../Sub_Image.gif)
		 [HitTest](ModForms.chm::/Interface/IListView/IListView.HitTest.htm)
		 Метод HitTest является
		 расширением метода [GetItemAt](ModForms.chm::/Interface/IListView/IListView.GetItemAt.htm).


		 ![](../../Sub_Image.gif)
		 [InsertControl](ModForms.chm::/Interface/IListView/IListView.InsertControl.htm)
		 Метод InsertControl
		 осуществляет вставку компонента в область элементов компонента.


## Методы, унаследованные от [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClientToScreen](ModForms.chm::/Interface/IControl/IControl.ClientToScreen.htm)


		 Метод ClientToScreen
		 преобразовывает координаты точки, указанные относительно системы
		 координат компонента, в экранные координаты.


		 ![](../../Sub_Image.gif)
		 [DoDragDrop](ModForms.chm::/Interface/IControl/IControl.DoDragDrop.htm)


		 Метод DoDragDrop позволяет
		 начать операцию перетаскивания.


		 ![](../../Sub_Image.gif)
		 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)


		 Метод GetImage возвращает
		 графическое изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)


		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)


		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterSearch](KeExtCtrls.chm::/Class/MetabaseListView/MetabaseListView.OnAfterSearch.htm)
		 Событие OnAfterSearch
		 наступает для компонента, если был вызван диалог поиска и в нём
		 осуществлялся поиск всех объектов, удовлетворяющих заданным условиям.


		 ![](../../Event_Image.gif)
		 [OnGetItemPopup](KeExtCtrls.chm::/Class/MetabaseListView/MetabaseListView.OnGetItemPopup.htm)
		 Событие OnGetItemPopup
		 наступает в момент вызова контекстного меню для элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnRootChanged](KeExtCtrls.chm::/Class/MetabaseListView/MetabaseListView.OnRootChanged.htm)
		 Событие OnRootChanged
		 наступает при смене корневого каталога.


## События, унаследованные от компонента
 [ListView](ListView.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnChecked](ModForms.chm::/Class/ListView/ListView.OnChecked.htm)
		 Событие OnChecked наступает
		 после отметки элемента списка.


		 ![](../../Event_Image.gif)
		 [OnChecking](ModForms.chm::/Class/ListView/ListView.OnChecking.htm)
		 Событие OnChecking
		 наступает, когда пользователь начинает отмечать элемент списка.


		 ![](../../Event_Image.gif)
		 [OnColumnClick](ModForms.chm::/Class/ListView/ListView.OnColumnClick.htm)
		 Событие OnColumnClick
		 наступает при щелчке по заголовку одного из столбцов компонента.


		 ![](../../Event_Image.gif)
		 [OnComparelItems](ModForms.chm::/Class/ListView/ListView.OnCompareItems.htm)
		 Событие OnCompareItems
		 наступает при сравнении двух элементов, во время сортировки в
		 колонке компонента.


		 ![](../../Event_Image.gif)
		 [OnDeletion](ModForms.chm::/Class/ListView/ListView.OnDeletion.htm)
		 Событие OnDeletion
		 происходит при удалении элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnEdited](ModForms.chm::/Class/ListView/ListView.OnEdited.htm)
		 Событие OnEdited наступает
		 при выходе из режима редактирования содержимого поля текущей записи
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnEditing](ModForms.chm::/Class/ListView/ListView.OnEditing.htm)
		 Событие OnEditing наступает
		 при переходе в режим редактирования текущего элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnFocusChange](ModForms.chm::/Class/ListView/ListView.OnFocusChange.htm)
		 Событие OnFocusChange
		 происходит при передаче фокуса другому элементу компонента.


		 ![](../../Event_Image.gif)
		 [OnFocusChanging](ModForms.chm::/Class/ListView/ListView.OnFocusChanging.htm)
		 Событие OnFocusChanging
		 наступает перед сменой фокуса у элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnGetHint](ModForms.chm::/Class/ListView/ListView.OnGetHint.htm)
		 Событие OnGetHint наступает
		 при появлении подсказки у элемента, над которым остановился курсор
		 мыши.


		 ![](../../Event_Image.gif)
		 [OnHover](ModForms.chm::/Class/ListView/ListView.OnHover.htm)
		 Событие OnHover наступает
		 в момент прохождения курсора мыши над элементом и отметки подчеркиванием
		 элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnInsert](ModForms.chm::/Class/ListView/ListView.OnInsert.htm)
		 Событие OnInsert происходит
		 при вставке нового элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnSelectingItem](ModForms.chm::/Class/ListView/ListView.OnSelectingItem.htm)
		 Событие OnSelectingItem
		 наступает перед изменением отметки у элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnSelectItem](ModForms.chm::/Class/ListView/ListView.OnSelectItem.htm)
		 Событие OnSelectItem
		 наступает при изменении отметки у элемента компонента.


## Общие события компонентов, унаследованных
 от [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)


		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm)


		 Событие OnClick наступает,
		 если пользователь щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnControlMove](ModForms.chm::/Interface/IControl/IControl.OnControlMove.htm)


		 Событие OnControlMove
		 наступает при перемещении компонента.


		 ![](../../Event_Image.gif)
		 [OnControlResize](ModForms.chm::/Interface/IControl/IControl.OnControlResize.htm)


		 Событие OnControlResize
		 наступает при изменении размеров у компонента.


		 ![](../../Event_Image.gif)
		 [OnDblClick](ModForms.chm::/Interface/IControl/IControl.OnDblClick.htm)


		 Событие OnDblClick
		 наступает, если пользователь дважды щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDragDrop](ModForms.chm::/Interface/IControl/IControl.OnDragDrop.htm)


		 Событие OnDragDrop
		 для компонента наступает, когда пользователь отпускает над ним
		 перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnDragEnter](ModForms.chm::/Interface/IControl/IControl.OnDragEnter.htm)


		 Событие OnDragEnter
		 наступает, когда перетаскиваемый объект входит в область данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragLeave](ModForms.chm::/Interface/IControl/IControl.OnDragLeave.htm)


		 Событие OnDragLeave
		 наступает, когда перетаскиваемый объект выходит за границы данного
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnDragOver](ModForms.chm::/Interface/IControl/IControl.OnDragOver.htm)


		 Событие OnDragOver
		 для компонента наступает, когда пользователь протаскивает над
		 ним перетаскиваемый объект.


		 ![](../../Event_Image.gif)
		 [OnEnter](ModForms.chm::/Interface/IControl/IControl.OnEnter.htm)


		 Событие OnEnter наступает
		 в момент получения фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExit](ModForms.chm::/Interface/IControl/IControl.OnExit.htm)


		 Событие OnExit наступает
		 в момент потери фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnHScroll](ModForms.chm::/Interface/IControl/IControl.OnHScroll.htm)


		 Событие OnHScroll наступает
		 при изменении положения ползунка горизонтальной полосы прокрутки.


		 ![](../../Event_Image.gif)
		 [OnKeyDown](ModForms.chm::/Interface/IControl/IControl.OnKeyDown.htm)


		 Событие OnKeyDown наступает,
		 если компонент находится в фокусе и производится нажатие на клавиатуру.


		 ![](../../Event_Image.gif)
		 [OnKeyPress](ModForms.chm::/Interface/IControl/IControl.OnKeyPress.htm)


		 Событие OnKeyPress
		 наступает, если компонент находится в фокусе, при нажатии пользователем
		 символьной клавиши.


		 ![](../../Event_Image.gif)
		 [OnKeyPreview](ModForms.chm::/Interface/IControl/IControl.OnKeyPreview.htm)


		 Событие OnKeyPreview
		 наступает перед каждым событием, связанным с нажатием клавиш.


		 ![](../../Event_Image.gif)
		 [OnKeyUp](ModForms.chm::/Interface/IControl/IControl.OnKeyUp.htm)


		 Событие OnKeyUp наступает,
		 если компонент находится в фокусе, при отпускании пользователем
		 любой, ранее нажатой клавиши.


		 ![](../../Event_Image.gif)
		 [OnMouseDown](ModForms.chm::/Interface/IControl/IControl.OnMouseDown.htm)


		 Событие OnMouseDown
		 наступает, если указатель находится в области компонента и была
		 нажата любая кнопка мыши.


		 ![](../../Event_Image.gif)
		 [OnMouseEnter](ModForms.chm::/Interface/IControl/IControl.OnMouseEnter.htm)


		 Событие OnMouseEnter
		 наступает в момент входа курсора мыши в область компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseHover](ModForms.chm::/Interface/IControl/IControl.OnMouseHover.htm)


		 Событие OnMouseHover
		 наступает при задержке курсора мыши в области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseLeave](ModForms.chm::/Interface/IControl/IControl.OnMouseLeave.htm)


		 Событие OnMouseLeave
		 наступает в момент выхода курсора мыши за пределы области компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseMove](ModForms.chm::/Interface/IControl/IControl.OnMouseMove.htm)


		 Событие OnMouseMove
		 наступает при перемещении курсора мыши над компонентом.


		 ![](../../Event_Image.gif)
		 [OnMouseUp](ModForms.chm::/Interface/IControl/IControl.OnMouseUp.htm)


		 Событие OnMouseUp наступает
		 при отпускании кнопки мыши, когда указатель находится в области
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnMouseWheel](ModForms.chm::/Interface/IControl/IControl.OnMouseWheel.htm)


		 Событие OnMouseWheel
		 наступает, если компонент находится в фокусе при вращении колеса
		 мыши.


		 ![](../../Event_Image.gif)
		 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)


		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Дополнительные
 компоненты](Additional_components.htm) | [MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
