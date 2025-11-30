# Breadcrumb: Компонент

Breadcrumb: Компонент
-


# Breadcrumb


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [IBreadcrumb](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.htm)


           [Breadcrumb](ModForms.chm::/Class/Breadcrumb/Breadcrumb.htm)


## Описание


Компонент Breadcrumb используется
 для создания цепочки навигации по каким-либо объектам.


## Работа с компонентом


Цепочка навигации строится из горизонтально расположенных элементов
 компонента.


![](Breadcrumb_Sample1.gif)


Каждый элемент соответствует какому-либо действию. Доступ к коллекции
 элементов осуществляется посредством свойства [Items](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.Items.htm).
 Каждому элементу могут быть сопоставлены какие-либо данные. Для их хранения
 во время работы формы используйте свойство [Data](ModForms.chm::/Interface/IBreadcrumbItem/IBreadcrumbItem.Data.htm).
 Для обработки действий, связанных с элементами, можно использовать событие
 [OnItemClick](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnItemClick.htm)
 - возникает при щелчке кнопкой мыши по наименованию элемента, либо [OnButtonClick](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnButtonClick.htm)
 - возникает при щелчке кнопкой мыши по дополнительной кнопке, отображаемой
 рядом с наименованием элемента.


Кнопка ![](../../Krest.gif) используется для удаления всех
 элементов.


Если список элементов не вмещается в область компонента, то по краям
 автоматически появляются кнопки прокрутки списка ![](Breadcrumb_scrolls.gif).
 При нажатии на соответствующую кнопку список будет смещен на один элемент.
 Свойство [BorderStyle](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.BorderStyle.htm)
 позволяет изменить стиль границ компонента.


## Пример


![](Breadcrumb_Sample.gif)


## Свойства компонента Breadcrumb


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
		 [AutoScroll](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.AutoScroll.htm)
		 Свойство находится в стадии разработки.


		 ![](../../Property_Image.gif)
		 [BorderStyle](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль границ компонента.


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
		 [DeleteButton](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.DeleteButton.htm)
		 Свойство DeleteButton
		 определяет признак отображения кнопки, используемой для удаления
		 всех элементов компонента.


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
		 [Items](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.Items.htm)
		 Свойство Items возвращает
		 коллекцию элементов компонента.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)
		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


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
		 [ScrollLeft](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.ScrollLeft.htm)
		 Свойство находится в стадии разработки.


		 ![](../../Property_Image.gif)
		 [ScrollRight](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.ScrollRight.htm)
		 Свойство находится в стадии разработки.


		 ![](../../Property_Image.gif)
		 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)
		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)
		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [StartDownButton](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.StartDownButton.htm)
		 Свойство StartDownButton
		 определяет признак отображения дополнительной кнопки после кнопки
		 удаления элементов.


		 ![](../../Property_Image.gif)
		 [Suffix](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.Suffix.htm)
		 Свойство Suffix определяет
		 вспомогательный текст, отображаемый в области компонента после
		 цепочки навигации.


		 ![](../../Property_Image.gif)
		 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)
		 Свойство TabOrder определяет
		 позицию компонента в последовательности табуляции.


		 ![](../../Property_Image.gif)
		 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)
		 Свойство TabStop определяет
		 признак необходимости компоненту получать фокус при нажатии кнопки
		 «TAB».


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


## Методы компонента Breadcrumb


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.BeginUpdate.htm)
		 Метод BeginUpdate запрещает
		 перерисовку компонента.


		 ![](../../Sub_Image.gif)
		 [BringToFront](ModForms.chm::/Interface/IControl/IControl.BringToFront.htm)
		 Метод BringToFront
		 располагает компонент на передний план.


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
		 [EndUpdate](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.EndUpdate.htm)
		 Метод EndUpdate снимает
		 запрет на перерисовку объекта.


		 ![](../../Sub_Image.gif)
		 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)
		 Метод GetImage возвращает
		 изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [HitTest](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.HitTest.htm)
		 Метод HitTest позволяет
		 получить элемент компонента в заданной точке.


		 ![](../../Sub_Image.gif)
		 [LoadState](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.LoadState.htm)
		 Метод LoadState осуществляет
		 загрузку состояния элементов компонента.


		 ![](../../Sub_Image.gif)
		 [SaveState](ModForms.chm::/Interface/IBreadcrumb/IBreadcrumb.SaveState.htm)
		 Метод SaveState осуществляет
		 сохранение состояния элементов компонента.


		 ![](../../Sub_Image.gif)
		 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)
		 Метод ScreenToClient
		 преобразовывает экранные координаты точки в координаты, указываемые
		 относительно системы координат компонента.


		 ![](../../Sub_Image.gif)
		 [SendToBack](ModForms.chm::/Interface/IControl/IControl.SendToBack.htm)
		 Метод SendToBack располагает
		 компонент на задний план.


		 ![](../../Sub_Image.gif)
		 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)
		 Метод SetFocus устанавливает
		 фокус на данный компонент.


## События компонента Breadcrumb


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAddItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnAddItem.htm)
		 Событие OnAddItem наступает
		 при добавлении нового элемента в коллекцию элементов компонента.


		 ![](../../Event_Image.gif)
		 [OnBeforeAddItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnBeforeAddItem.htm)
		 Событие OnBeforeAddItem
		 наступает перед добавлением нового элемента в коллекцию элементов
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnBeforeMoveItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnBeforeMoveItem.htm)
		 Событие OnBeforeMoveItem
		 наступает перед перемещением элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnBeforeRemoveItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnBeforeRemoveItem.htm)
		 Событие OnBeforeRemoveItem
		 наступает перед удалением элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)
		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnButtonClick](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnButtonClick.htm)
		 Событие OnButtonClick
		 наступает при щелчке кнопкой мыши по дополнительной кнопке, отображаемой
		 рядом с наименованием элемента.


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
		 [OnGetPopupMenu](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnGetPopupMenu.htm)
		 Событие OnGetPopupMenu
		 наступает при вызове контекстного меню для элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnHScroll](ModForms.chm::/Interface/IControl/IControl.OnHScroll.htm)
		 Событие OnHScroll наступает
		 при изменении положения ползунка горизонтальной полосы прокрутки.


		 ![](../../Event_Image.gif)
		 [OnItemClick](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnItemClick.htm)
		 Событие OnItemClick
		 наступает при щелчке кнопкой мыши по элементу компонента.


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
		 [OnMoveItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnMoveItem.htm)
		 Событие OnMoveItem
		 наступает при перемещении элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnRemoveItem](ModForms.chm::/Class/Breadcrumb/Breadcrumb.OnRemoveItem.htm)
		 Событие OnRemoveItem
		 наступает при удалении элемента компонента.


		 ![](../../Event_Image.gif)
		 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)
		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Дополнительные компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
