# LanerBox: Компонент

LanerBox: Компонент
-


# LanerBox


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [ILanerBox](KeExpress.chm::/Interface/ILanerBox/ILanerBox.htm)


           [LanerBox](KeExpress.chm::/Class/LanerBox/LanerBox.htm)


## Описание


Компонент LanerBox предназначен
 для просмотра рабочих книг базы данных временных рядов.


## Работа с компонентом


Для работы компонента необходимо в инспекторе объектов в свойстве [Object](KeExpress.chm::/Interface/ILanerBox/ILanerBox.Object.htm)
 установить источник данных. В качестве источника данных может выступать
 любой компонент [UiErAnalyzer](UiErAnalyzer.htm), расположенный
 на форме.


Используя свойства [BorderStyle](KeExpress.chm::/Interface/ILanerBox/ILanerBox.BorderStyle.htm),
 [ShowDimPanel](KeExpress.chm::/Interface/ILanerBox/ILanerBox.ShowDimPanel.htm),
 [ShowMethodsBar](KeExpress.chm::/Interface/ILanerBox/ILanerBox.ShowMethodsBar.htm),
 [ShowToolbar](KeExpress.chm::/Interface/ILanerBox/ILanerBox.ShowToolbar.htm)
 осуществляется настройка внешнего вида компонента. Для работы с рядами,
 отображаемыми в данном компоненте, предназначены различные методы, описание
 которых представлено в описании интерфейса [ILanerBox](KeExpress.chm::/Interface/ILanerBox/ILanerBox.htm).


## Пример


![](LanerBox_Sample.gif)


## Свойства компонента LanerBox


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Align](ModForms.chm::/Interface/IControl/IControl.Align.htm)


		 Свойство Align определяет,
		 как поведет себя компонент при изменении размеров содержащего
		 его родительского компонента.


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
		 используется для получения или задания высоты клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [ClientWidth](ModForms.chm::/Interface/IControl/IControl.ClientWidth.htm)


		 Свойство ClientWidth
		 используется для получения или задания ширины клиентской области
		 компонента.


		 ![](../../Property_Image.gif)
		 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)


		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Cursor](ModForms.chm::/Interface/IControl/IControl.Cursor.htm)


		 Свойство Cursor определяет
		 вид курсора над компонентом.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


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
		 множество характеристик, описывающих шрифт, используемый при отображении
		 текста.


		 ![](../../Property_Image.gif)
		 [Height](ModForms.chm::/Interface/IControl/IControl.Height.htm)


		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [HelpContext](ModForms.chm::/Interface/IControl/IControl.HelpContext.htm)
		 Свойство HelpContext
		 определяет уникальный индекс раздела контекстно-зависимой справки
		 для данного компонента.


		 ![](../../Property_Image.gif)
		 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)
		 Свойство Hint определяет
		 текст подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)


		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeExpress.chm::/Interface/ILanerBox/ILanerBox.Object.htm)
		 Свойство Object определяет
		 объект, являющийся источником данных компонента.


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
		 дополнительной кнопки мыши на компоненте.


		 ![](../../Property_Image.gif)
		 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)
		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)


		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


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
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm)
		 Свойство Text определяет
		 строку, идентифицирующую компонент для пользователя.


		 ![](../../Property_Image.gif)
		 [Top](ModForms.chm::/Interface/IControl/IControl.Top.htm)
		 Свойство Top определяет
		 координату верхнего края компонента.


		 ![](../../Property_Image.gif)
		 [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)


		 Свойство Visible определяет
		 видимость компонента во время выполнения.


		 ![](../../Property_Image.gif)
		 [Width](ModForms.chm::/Interface/IControl/IControl.Width.htm)


		 Свойство Width определяет
		 ширину компонента.


## Методы компонента LanerBox


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
		 изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)


		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)


		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События компонента LanerBox


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAddAttribute](KeExpress.chm::/Class/LanerBox/LanerBox.OnAddAttribute.htm)
		 Событие OnAddAttribute
		 наступает при добавлении в рабочую книгу столбцов со значениями
		 атрибутов показателей.


		 ![](../../Event_Image.gif)
		 [OnAddSerie](KeExpress.chm::/Class/LanerBox/LanerBox.OnAddSerie.htm)
		 Событие OnAddSerie
		 наступает при добавлении нового ряда в рабочую книгу.


		 ![](../../Event_Image.gif)
		 [OnAfterEdit](KeExpress.chm::/Class/LanerBox/LanerBox.OnAfterEdit.htm)
		 Событие OnAfterEdit
		 наступает после редактирования ячейки таблицы.


		 ![](../../Event_Image.gif)
		 [OnAutoFilter](KeExpress.chm::/Class/LanerBox/LanerBox.OnAutoFilter.htm)
		 Событие OnAutoFilter
		 наступает при установке автофильтра в таблице.


		 ![](../../Event_Image.gif)
		 [OnBeforeCellChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnBeforeCellChange.htm)
		 Событие OnBeforeCellChange
		 наступает перед изменением значения ячейки таблицы.


		 ![](../../Event_Image.gif)
		 [OnBeforeCellsChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnBeforeCellsChange.htm)
		 Событие OnBeforeCellsChange
		 наступает перед изменением значений в диапазоне ячеек таблицы.


		 ![](../../Event_Image.gif)
		 [OnBeforeEdit](KeExpress.chm::/Class/LanerBox/LanerBox.OnBeforeEdit.htm)
		 Событие OnBeforeEdit
		 наступает перед началом редактирования ячейки компонента.


		 ![](../../Event_Image.gif)
		 [OnBeginSelectionChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnBeginSelectionChange.htm)
		 Событие OnBeginSelectionChange
		 наступает при начале выделения ячеек таблицы.


		 ![](../../Event_Image.gif)
		 [OnCellChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellChange.htm)
		 Событие OnCellChange
		 наступает, если было произведено изменение текста или значения
		 в ячейке таблицы.


		 ![](../../Event_Image.gif)
		 [OnCellClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellClick.htm)
		 Событие OnCellClick
		 наступает при щелчке кнопкой мыши по ячейке таблицы.


		 ![](../../Event_Image.gif)
		 [OnCellPictureClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellPictureClick.htm)
		 Событие OnCellPictureClick
		 наступает при щелчке кнопкой мыши по картинке в ячейке таблицы.


		 ![](../../Event_Image.gif)
		 [OnCellsChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellsChange.htm)
		 Событие OnCellsChange
		 наступает при изменении значений в диапазоне ячеек таблицы.


		 ![](../../Event_Image.gif)
		 [OnChangeCellContent](KeExpress.chm::/Class/LanerBox/LanerBox.OnChangeCellContent.htm)
		 Событие OnChangeCellContent
		 наступает, если было произведено изменение содержимого в ячейке
		 таблицы.


		 ![](../../Event_Image.gif)
		 [OnChangeMode](KeExpress.chm::/Class/LanerBox/LanerBox.OnChangeMode.htm)
		 Событие OnChangeMode
		 наступает при изменении режима отображения рабочей книги.


		 ![](../../Event_Image.gif)
		 [OnChangePinnedSeries](KeExpress.chm::/Class/LanerBox/LanerBox.OnChangePinnedSeries.htm)
		 Событие OnChangePinnedSeries
		 наступает при закреплении/снятии закрепления вычисляемого ряда
		 в рабочей книге.


		 ![](../../Event_Image.gif)
		 [OnColumnClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnColumnClick.htm)
		 Событие OnColumnClick
		 наступает при щелчке по заголовку столбца таблицы.


		 ![](../../Event_Image.gif)
		 [OnEndSelectionChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnEndSelectionChange.htm)
		 Событие OnEndSelectionChange
		 наступает при окончании выделения ячеек таблицы.


		 ![](../../Event_Image.gif)
		 [OnFinishExecute](KeExpress.chm::/Class/LanerBox/LanerBox.OnFinishExecute.htm)
		 Событие OnFinishExecute
		 наступает при окончании вычислений в рабочей книге.


		 ![](../../Event_Image.gif)
		 [OnHyperlinkClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnHyperlinkClick.htm)
		 Событие OnHyperlinkClick
		 наступает при нажатии на гиперссылку в ячейке таблицы.


		 ![](../../Event_Image.gif)
		 [OnLanerCellChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnLanerCellChange.htm)
		 Событие OnLanerCellChange
		 наступает при изменении значения в ячейке таблицы рабочей книги.


		 ![](../../Event_Image.gif)
		 [OnLanerChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnLanerChange.htm)
		 Событие OnLanerChange
		 наступает при изменении рабочей книги.


		 ![](../../Event_Image.gif)
		 [OnMoveAttribute](KeExpress.chm::/Class/LanerBox/LanerBox.OnMoveAttribute.htm)
		 Событие OnMoveAttribute
		 наступает при перемещении в рабочей книге столбцов со значениями
		 атрибутов показателей.


		 ![](../../Event_Image.gif)
		 [OnMoveSerie](KeExpress.chm::/Class/LanerBox/LanerBox.OnMoveSerie.htm)
		 Событие OnMoveSerie
		 наступает при перемещении ряда в рабочей книге.


		 ![](../../Event_Image.gif)
		 [OnObjectActivate](KeExpress.chm::/Class/LanerBox/LanerBox.OnObjectActivate.htm)
		 Событие OnObjectActivate
		 наступает при активации/деактивации объекта таблицы.


		 ![](../../Event_Image.gif)
		 [OnProtectionFail](KeExpress.chm::/Class/LanerBox/LanerBox.OnProtectionFail.htm)
		 Событие OnProtectionFail
		 наступает при срабатывании защиты таблицы.


		 ![](../../Event_Image.gif)
		 [OnRemoveAttribute](KeExpress.chm::/Class/LanerBox/LanerBox.OnRemoveAttribute.htm)
		 Событие OnRemoveAttribute
		 наступает при удалении из рабочей книги столбца со значениями
		 атрибута показателей.


		 ![](../../Event_Image.gif)
		 [OnRemoveSerie](KeExpress.chm::/Class/LanerBox/LanerBox.OnRemoveSerie.htm)
		 Событие OnRemoveSerie
		 наступает при удалении ряда из рабочей книги.


		 ![](../../Event_Image.gif)
		 [OnRowClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnRowClick.htm)
		 Событие OnRowClick
		 наступает при щелчке по заголовку строки таблицы.


		 ![](../../Event_Image.gif)
		 [OnScaleChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnScaleChange.htm)
		 Событие OnScaleChange
		 наступает при изменении масштаба таблицы.


		 ![](../../Event_Image.gif)
		 [OnSelectionChange](KeExpress.chm::/Class/LanerBox/LanerBox.OnSelectionChange.htm)
		 Событие OnSelectionChange
		 наступает при изменении выделения ячеек таблицы.


		 ![](../../Event_Image.gif)
		 [OnStartExecute](KeExpress.chm::/Class/LanerBox/LanerBox.OnStartExecute.htm)
		 Событие OnStartExecute
		 наступает при начале вычислений в рабочей книге.


		 ![](../../Event_Image.gif)
		 [OnTableClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnTableClick.htm)
		 Событие OnTableClick
		 наступает при щелчке по левой верхней ячейке таблицы (пересечение
		 столбца и строки заголовков).


## Унаследованные события компонента
 LanerBox


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
		 наступает, когда перетаскиваемый объект входит в границы данного
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
		 [OnKeyUp](ModForms.chm::/Interface/IControl/IControl.OnKeyUp.htm)


		 Событие OnKeyUp наступает,
		 если компонент находится в фокусе, при отпускании пользователем
		 любой, ранее нажатой клавиши.


		 ![](../../Event_Image.gif)
		 [OnMouseDown](ModForms.chm::/Interface/IControl/IControl.OnMouseDown.htm)


		 Событие OnMouseDown
		 наступает, если компонент находится в фокусе и на компоненте произведено
		 нажатие любой из кнопок мыши.


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
		 наступает при перемещении пользователем курсора мыши над компонентом.


		 ![](../../Event_Image.gif)
		 [OnMouseUp](ModForms.chm::/Interface/IControl/IControl.OnMouseUp.htm)


		 Событие OnMouseUp наступает,
		 если компонент находится в фокусе и на компоненте, была отпущена
		 любая из ранее нажатых кнопок мыши.


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


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
