# TreeCombo: Компонент

TreeCombo: Компонент
-


# TreeCombo


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [ITreeControl](ModForms.chm::/Interface/ITreeControl/ITreeControl.htm)


           [ITreeCombo](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.htm)


           [TreeCombo](ModForms.chm::/Class/TreeCombo/TreeCombo.htm)


## Описание


Компонент TreeCombo служит для
 отображения ветвящихся иерархических структур, таких как дерево наследования
 объектов, в виде комбинированных списков.


## Работа с компонентом


Отметка элементов компонента осуществляется при щелчке как по пиктограмме
 элемента, так и по самому элементу либо нажатием клавиши ПРОБЕЛ.


При двойном щелчке по разделительной линии колонок будет осуществляться
 автоматический подгон по ширине колонки, расположенной слева. Ширина подгоняется
 с учетом всех элементов, которые могут содержаться у вершины (наличие
 экспандера, флажка, пиктограммы и пиктограммы состояния, текста вершины).


Примечание.
 Размеры раскрывающегося списка элементов можно изменять, перетаскивая
 его правую, левую или нижнюю границу при помощи мыши. Минимальная ширина
 раскрывающегося списка равна ширине компонента.


В редакторе компонента по умолчанию отображается информация об отметке
 элементов. За автоматическое обновление этой информации отвечает
 свойство [AutoUpdateInfo](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.AutoUpdateInfo.htm).
 Для отображения пользовательских данных в редакторе компонента необходимо
 изменить базовое свойство [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm).


### Поиск элементов


При развернутом раскрывающемся списке компонента предусмотрены следующие
 виды поиска:


	- При наборе первых символов в наименовании элементов
	 курсор будет переходить к первому найденному элементу. Данный поиск
	 осуществляется циклически и только по элементам, присутствующим в
	 развернутой части иерархии дерева элементов.


	- При помощи строки поиска, которая вызывается при нажатии
	 клавиш F3 либо CTRL+F. После ввода искомой части слова и нажатии
	 клавиши ENTER либо кнопки ![](../../Select_Button.gif)
	 будет осуществляться поиск. Поиск осуществляется циклически по всей
	 иерархии элементов.


При удачном поиске курсор будет фокусироваться на найденном элементе.
 Состояние отметки зависит от значения свойства [FindMode](ModForms.chm::/Interface/ITreeControl/ITreeControl.FindMode.htm).
 В зависимости от выбранного [режима
 множественной отметки](ModForms.chm::/Interface/ITreeControl/ITreeControl.SelectionMode.htm) добавление элемента в отметку осуществляется
 выделением с использованием клавиши ПРОБЕЛ либо выделением с помощью мыши
 при зажатой клавише CTRL.


Также существует возможность поиска при свернутом раскрывающемся списке
 компонента. Когда компонент находится в фокусе, при наборе сочетания символов
 будет формироваться список, отфильтрованный по элементам, содержащим в
 своем наименовании данное сочетание:


![](TreeCombo_Find.gif)


Отметка элементов осуществляется так же, как было описано выше, в зависимости
 от установленного значения свойства [SelectionMode](ModForms.chm::/Interface/ITreeControl/ITreeControl.SelectionMode.htm).
 После закрытия данного окна, отметка будет применена в компоненте.


В строке поиска существует возможность поиска по частям не только одного,
 но и нескольких слов. Для этого искомые сочетания символов разделяются
 пробелом. Порядок слов в наименовании элементов при поиске не учитывается.


### Сортировка данных


Необходимым условием для сортировки данных является установка свойствам
 [ShowColumnHeaders](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowColumnHeaders.htm),
 [Sorted](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sorted.htm)
 и [ColumnClick](ModForms.chm::/Interface/ITreeControl/ITreeControl.ColumnClick.htm)
 значения True, а свойству [SortType](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortType.htm)
 значения, отличного от None.


В режиме выполнения формы для сортировки данных по какому-либо столбцу
 необходимо щелкнуть по заголовку данного столбца. При этом все данные
 будут отсортированы по возрастанию значений. Повторные щелчки будут вызывать
 смену направления сортировки. Для мультисортировки необходимо зажать клавишу
 CTRL и щелкнуть по заголовкам необходимых столбцов. Порядок сортировки
 будет определяться следующим образом: столбец, по заголовку которого был
 осуществлен последний щелчок, будет отсортирован в последнюю очередь.


Также осуществить настройку сортировки можно в специализированном окне
 «Сортировка»:


![](../Parameter_Columns.gif)


Данное окно появляется при выборе соответствующего пункта контекстного
 меню, вызываемого в области заголовков колонок.


Примечание.
 Пункт контекстного меню будет доступен, если свойствам [ShowColumnHeaders](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowColumnHeaders.htm)
 и [Sorted](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sorted.htm)
 установлено значения True, а свойству
 [SortType](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortType.htm)
 значение, отличное от None.


Колонки, по которым будет осуществляться сортировка, необходимо переместить
 в список выбранных. Кнопки ![](../Button_Ascending.gif) и
 ![](../Button_Descending.gif) используются для изменения направления
 сортировки по выбранному столбцу. Кнопки ![](../Button_Up.gif) и ![](../Button_Down.gif)
 используются для изменения порядка сортировки. Колонки, расположенные
 вверху списка, будут сортироваться в первую очередь.


В языке Fore для применения
 сортировки необходимо установить свойству [Sorted](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sorted.htm)
 значение True и свойству [SortType](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortType.htm)
 значение, отличное от None. Колонка, по данным которой осуществляется
 сортировка, указывается в свойстве [SortColumn](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortColumn.htm).
 Направление сортировки определяется в свойстве [SortAscending](ModForms.chm::/Interface/ITreeListColumn/ITreeListColumn.SortAscending.htm)
 соответствующего столбца.


Также для управления сортировкой могут применяться методы [Sort](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sort.htm)
 и [SortDefault](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortDefault.htm).


## Пример


![](TreeCombo_Sample.gif)


## Свойства компонента TreeCombo


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
		 [AnimationType](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.AnimationType.htm)


		 Свойство AnimationType
		 определяет тип анимации, применяемый при разворачивании комбинированного
		 списка компонента.


		 ![](../../Property_Image.gif)
		 [AutoCheckParent](ModForms.chm::/Interface/ITreeControl/ITreeControl.AutoCheckParent.htm)


		 Свойство AutoCheckParent
		 определяет, будет ли у родительских вершин компонента автоматически
		 устанавливаться неопределенное состояние, если отмечены не все
		 дочерние элементы.


		 ![](../../Property_Image.gif)
		 [AutoUpdateInfo](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.AutoUpdateInfo.htm)


		 Свойство AutoUpdateInfo
		 определяет признак автоматического обновления информации об отметке
		 в редакторе компонента.


		 ![](../../Property_Image.gif)
		 [BorderStyle](ModForms.chm::/Interface/ITreeControl/ITreeControl.BorderStyle.htm)


		 Свойство BorderStyle
		 определяет стиль рамки, обрамляющей компонент.


		 ![](../../Property_Image.gif)
		 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)


		 Свойство Brush определяет
		 кисть, используемую для заливки области компонента.


		 ![](../../Property_Image.gif)
		 [CancelOnEscape](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.CancelOnEscape.htm)


		 Свойство CancelOnEscape
		 определяет, будет ли производиться отмена установленной отметки
		 и закрытие списка при нажатии клавиши ESC.


		 ![](../../Property_Image.gif)
		 [Checkboxes](ModForms.chm::/Interface/ITreeControl/ITreeControl.Checkboxes.htm)


		 Свойство Checkboxes
		 определяет наличие флажков у элементов.


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
		 [CloseOnClick](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.CloseOnClick.htm)


		 Свойство CloseOnClick
		 определяет, будет ли производиться автоматическое закрытие списка
		 при выборе щелчком кнопки мыши одного элемента из этого списка.


		 ![](../../Property_Image.gif)
		 [CloseOnEnter](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.CloseOnEnter.htm)


		 Свойство CloseOnEnter
		 определяет, будет ли производиться закрытие списка и сохранение
		 отметки при нажатии клавиши ENTER.


		 ![](../../Property_Image.gif)
		 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)


		 Свойство Color определяет
		 цвет фона компонента.


		 ![](../../Property_Image.gif)
		 [ColumnClick](ModForms.chm::/Interface/ITreeControl/ITreeControl.ColumnClick.htm)


		 Свойство ColumnClick
		 определяет возможность отображения заголовков столбцов в виде
		 кнопок.


		 ![](../../Property_Image.gif)
		 [Columns](ModForms.chm::/Interface/ITreeControl/ITreeControl.Columns.htm)


		 Свойство Соlumns возвращает
		 коллекцию столбцов компонента.


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
		 [CustomMultiselectText](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.CustomMultiselectText.htm)


		 Свойство CustomMultiselectText
		 определяет признак использования пользовательского шаблона для
		 формирования текста компонента при множественной отметке.


		 ![](../../Property_Image.gif)
		 [CustomMultiselectTextTemplate](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.CustomMultiselectTextTemplate.htm)


		 Свойство CustomMultiselectTextTemplate
		 определяет шаблон, в соответствии с которым будет формироваться
		 текст компонента при множественной отметке.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Dropped](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.Dropped.htm)


		 Свойство Dropped возвращает
		 видимость раскрывающегося списка.


		 ![](../../Property_Image.gif)
		 [DroppedListHeight](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.DroppedListHeight.htm)


		 Свойство DroppedListHeight
		 определяет высоту раскрывающегося списка компонента.


		 ![](../../Property_Image.gif)
		 [DroppedListWidth](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.DroppedListWidth.htm)


		 Свойство DroppedListWidth
		 определяет ширину раскрывающегося списка компонента.


		 ![](../../Property_Image.gif)
		 [DroppedPopupMenu](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.DroppedPopupMenu.htm)


		 Свойство DroppedPopupMenu
		 определяет контекстное меню, вызываемое в области раскрывающегося
		 списка компонента.


		 ![](../../Property_Image.gif)
		 [DropTargetNode](ModForms.chm::/Interface/ITreeControl/ITreeControl.DropTargetNode.htm)


		 Свойство DropTargetNode
		 определяет вершину компонента, над которой в данный момент пользователь
		 перетаскивает другую вершину.


		 ![](../../Property_Image.gif)
		 [Enabled](ModForms.chm::/Interface/IControl/IControl.Enabled.htm)


		 Свойство Enabled определяет
		 доступность компонента для пользователя.


		 ![](../../Property_Image.gif)
		 [EnableFindDialog](ModForms.chm::/Interface/ITreeControl/ITreeControl.EnableFindDialog.htm)


		 Свойство EnableFindDialog
		 определяет, будет ли вызываться стандартный диалог поиска элементов
		 при нажатии сочетания клавиш CTRL+F или F3.


		 ![](../../Property_Image.gif)
		 [FilterStyle](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.FilterStyle.htm)


		 Свойство FilterStyle
		 определяет режим построения дерева отфильтрованных элементов.


		 ![](../../Property_Image.gif)
		 [FindEditVisible](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.FindEditVisible.htm)


		 Свойство FindEditVisible
		 определяет признак отображения строки поиска при развернутом раскрывающемся
		 списке компонента.


		 ![](../../Property_Image.gif)
		 [FindMode](ModForms.chm::/Interface/ITreeControl/ITreeControl.FindMode.htm)


		 Свойство FindMode определяет
		 режим отметки найденных элементов.


		 ![](../../Property_Image.gif)
		 [Focused](ModForms.chm::/Interface/IControl/IControl.Focused.htm)


		 Свойство Focused возвращает
		 True, если фокус установлен
		 на данном компоненте.


		 ![](../../Property_Image.gif)
		 [FocusedNode](ModForms.chm::/Interface/ITreeControl/ITreeControl.FocusedNode.htm)


		 Свойство FocusedNode
		 определяет вершину, имеющую фокус в данный момент.


		 ![](../../Property_Image.gif)
		 [Font](ModForms.chm::/Interface/IControl/IControl.Font.htm)


		 Свойство Font определяет
		 множество характеристик, описывающих шрифт, используемый при отображении
		 текста.


		 ![](../../Property_Image.gif)
		 [GridLines](ModForms.chm::/Interface/ITreeControl/ITreeControl.GridLines.htm)


		 Свойство GridLines
		 определяет, будет ли отображаться сетка.


		 ![](../../Property_Image.gif)
		 [HeaderMenu](ModForms.chm::/Interface/ITreeControl/ITreeControl.HeaderMenu.htm)


		 Свойство HeaderMenu
		 определяет контекстное меню, вызываемое по щелчку дополнительной
		 кнопки мыши на заголовке колонки компонента.


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
		 [HideSelection](ModForms.chm::/Interface/ITreeControl/ITreeControl.HideSelection.htm)


		 Свойство HideSelection
		 определяет, будет ли выделенный элемент компонента оставаться
		 таковым при передаче фокуса другому компоненту.


		 ![](../../Property_Image.gif)
		 [HighlightTrack](ModForms.chm::/Interface/ITreeControl/ITreeControl.HighlightTrack.htm)


		 Свойство HighlightTrack
		 определяет, подсвечивать ли элемент при наведении указателя мыши.


		 ![](../../Property_Image.gif)
		 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)


		 Свойство Hint определяет
		 текст подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [HotTrack](ModForms.chm::/Interface/ITreeControl/ITreeControl.HotTrack.htm)


		 Свойство HotTrack определяет
		 признак выделения подчеркиванием элемента, над которым проходит
		 указатель мыши.


		 ![](../../Property_Image.gif)
		 [HotTrackAutoExpand](ModForms.chm::/Interface/ITreeControl/ITreeControl.HotTrackAutoExpand.htm)


		 Свойство HotTrackAutoExpand
		 определяет признак изменения состояния дерева дочерних элементов
		 при щелчке по выделенному элементу.


		 ![](../../Property_Image.gif)
		 [Images](ModForms.chm::/Interface/ITreeControl/ITreeControl.Images.htm)


		 Свойство Images содержит
		 список изображений, используемых для прорисовки узлов.


		 ![](../../Property_Image.gif)
		 [InnerRoot](ModForms.chm::/Interface/ITreeControl/ITreeControl.InnerRoot.htm)


		 Свойство InnerRoot
		 возвращает параметры внутренней корневой вершины дерева.


		 ![](../../Property_Image.gif)
		 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)


		 Свойство Left определяет
		 координату левого края компонента.


		 ![](../../Property_Image.gif)
		 [Locked](ModForms.chm::/Interface/ITreeControl/ITreeControl.Locked.htm)


		 Свойство Locked определяет
		 возможность изменения отметки и редактирования элементов в компоненте.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Nodes](ModForms.chm::/Interface/ITreeControl/ITreeControl.Nodes.htm)


		 Свойство Nodes возвращает
		 коллекцию элементов.


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
		 [ReadOnly](ModForms.chm::/Interface/ITreeControl/ITreeControl.ReadOnly.htm)


		 Свойство ReadOnly определяет
		 признак возможности редактирования элементов.


		 ![](../../Property_Image.gif)
		 [RowSelect](ModForms.chm::/Interface/ITreeControl/ITreeControl.RowSelect.htm)


		 Свойство RowSelect
		 определяет необходимость выделения выбранного элемента подсветкой
		 всей строки.


		 ![](../../Property_Image.gif)
		 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)


		 Свойство Scrolls возвращает
		 параметры полос прокрутки компонента.


		 ![](../../Property_Image.gif)
		 [Selected](ModForms.chm::/Interface/ITreeControl/ITreeControl.Selected.htm)


		 Свойство Selected возвращает
		 последний отмеченный элемент дерева.


		 ![](../../Property_Image.gif)
		 [Selection](ModForms.chm::/Interface/ITreeControl/ITreeControl.Selection.htm)


		 Свойство Selection
		 возвращает отметку дерева элементов.


		 ![](../../Property_Image.gif)
		 [SelectionMode](ModForms.chm::/Interface/ITreeControl/ITreeControl.SelectionMode.htm)


		 Свойство SelectionMode
		 определяет режим отметки элементов в компоненте.


		 ![](../../Property_Image.gif)
		 [ShowButtons](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowButtons.htm)


		 Свойство ShowButtons
		 определяет, будут ли отображаться кнопки разворачивания и сворачивания
		 дерева потомков вершин.


		 ![](../../Property_Image.gif)
		 [ShowColumnHeaders](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowColumnHeaders.htm)


		 Свойство ShowColumnHeaders
		 определяет, будут ли отображаться заголовки столбцов.


		 ![](../../Property_Image.gif)
		 [ShowEditImage](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.ShowEditImage.htm)


		 Свойство ShowEditImage
		 определяет признак отображения пиктограммы элемента в редакторе
		 компонента.


		 ![](../../Property_Image.gif)
		 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)


		 Свойство ShowHint включает
		 и выключает показ всплывающего окна подсказки для компонента.


		 ![](../../Property_Image.gif)
		 [ShowHints](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowHints.htm)


		 Свойство ShowHints
		 определяет, будут ли отображаться всплывающие подсказки при задержке
		 мыши над элементами.


		 ![](../../Property_Image.gif)
		 [ShowLines](ModForms.chm::/Interface/ITreeControl/ITreeControl.ShowLines.htm)


		 Свойство ShowLines
		 определяет, будет ли отображаться линия, соединяющая вершину с
		 ее потомками.


		 ![](../../Property_Image.gif)
		 [ShowSystemHints](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.ShowSystemHints.htm)


		 Свойство ShowSystemHints
		 определяет, будет ли отображаться системная всплывающая подсказка
		 для различных элементов компонента.


		 ![](../../Property_Image.gif)
		 [SortColumn](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortColumn.htm)


		 Свойство SortColumn
		 определяет индекс столбца, по которому будет осуществляться сортировка.


		 ![](../../Property_Image.gif)
		 [Sorted](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sorted.htm)


		 Свойство Sorted определяет
		 возможность сортировки по столбцу, указанному в свойстве [SortColumn](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortColumn.htm).


		 ![](../../Property_Image.gif)
		 [SortType](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortType.htm)


		 Свойство SortType определяет
		 тип сортировки для компонента.


		 ![](../../Property_Image.gif)
		 [StateImages](ModForms.chm::/Interface/ITreeControl/ITreeControl.StateImages.htm)


		 Свойство StateImages
		 определяет источник пиктограмм для выбранных элементов.


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


## Методы компонента TreeCombo


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AdjustDroppedListWidth](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.AdjustDroppedListWidth.htm)


		 Метод AdjustDroppedListWidth
		 осуществляет подгонку ширины раскрывающегося списка компонента.


		 ![](../../Sub_Image.gif)
		 [AdjustWidth](ModForms.chm::/Interface/ITreeControl/ITreeControl.AdjustWidth.htm)


		 Метод AdjustWidth осуществляет
		 автоматический подгон ширины колонки с учетом её содержимого.


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
		 [DropDown](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.DropDown.htm)


		 Метод DropDown осуществляет
		 разворачивание комбинированного списка.


		 ![](../../Sub_Image.gif)
		 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)


		 Метод GetImage возвращает
		 графическое изображение компонента со всеми дочерними компонентами.


		 ![](../../Sub_Image.gif)
		 [GetItemAt](ModForms.chm::/Interface/ITreeControl/ITreeControl.GetItemAt.htm)


		 Метод GetItemAt осуществляет
		 проверку наличия элемента в заданной точке клиентской области
		 компонента.


		 ![](../../Sub_Image.gif)
		 [HitTest](ModForms.chm::/Interface/ITreeControl/ITreeControl.HitTest.htm)


		 Метод HitTest осуществляет
		 проверку наличия элемента в заданной точке клиентской области
		 компонента и возвращает результат проверки.


		 ![](../../Sub_Image.gif)
		 [RollUp](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.RollUp.htm)


		 Метод RollUp осуществляет
		 свертывание комбинированного списка.


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


		 ![](../../Sub_Image.gif)
		 [Sort](ModForms.chm::/Interface/ITreeControl/ITreeControl.Sort.htm)


		 Метод Sort выполняет
		 сортировку по значениям указанного столбца.


		 ![](../../Sub_Image.gif)
		 [SortDefault](ModForms.chm::/Interface/ITreeControl/ITreeControl.SortDefault.htm)


		 Метод SortDefault выполняет
		 сортировку по значениям столбца, индекс которого указан в свойстве
		 SortColumn.


		 ![](../../Sub_Image.gif)
		 [UpdateInfo](ModForms.chm::/Interface/ITreeCombo/ITreeCombo.UpdateInfo.htm)


		 Метод UpdateInfo осуществляет
		 обновление информации об отметке элементов, отображаемой в редакторе
		 компонента.


## События компонента TreeCombo


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAdded](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnAdded.htm)


		 Событие OnAdded наступает
		 при добавлении нового элемента.


		 ![](../../Event_Image.gif)
		 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)


		 Событие OnBeginDrag
		 для компонента наступает, когда пользователь начинает перетаскивать
		 объект от компонента.


		 ![](../../Event_Image.gif)
		 [OnBeginFilter](ModForms.chm::/Class/TreeCombo/TreeCombo.OnBeginFilter.htm)


		 Событие OnBeginFilter
		 наступает в момент начала фильтрации списка элементов компонента.


		 ![](../../Event_Image.gif)
		 [OnBeginSearch](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnBeginSearch.htm)


		 Событие OnBeginSearch
		 наступает в момент начала поиска элементов в компоненте.


		 ![](../../Event_Image.gif)
		 [OnChecked](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnChecked.htm)


		 Событие OnChecked наступает
		 после установки флажка у элемента.


		 ![](../../Event_Image.gif)
		 [OnChecking](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnChecking.htm)


		 Событие OnChecking
		 наступает при установке флажка у элемента.


		 ![](../../Event_Image.gif)
		 [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm)


		 Событие OnClick наступает,
		 если пользователь щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnCollapsed](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnCollapsed.htm)


		 Событие OnCollapsed
		 наступает после свертывания иерархии потомков вершины дерева.


		 ![](../../Event_Image.gif)
		 [OnCollapsing](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnCollapsing.htm)


		 Событие OnCollapsing
		 наступает перед свертыванием иерархии потомков вершины дерева.


		 ![](../../Event_Image.gif)
		 [OnColumnClick](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnColumnClick.htm)


		 Событие OnColumnClick
		 наступает при щелчке кнопкой мыши по заголовку столбца компонента.


		 ![](../../Event_Image.gif)
		 [OnCompareItems](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnCompareItems.htm)


		 Событие OnCompareItems
		 наступает при сравнении двух элементов во время пользовательской
		 сортировки элементов.


		 ![](../../Event_Image.gif)
		 [OnDblClick](ModForms.chm::/Interface/IControl/IControl.OnDblClick.htm)


		 Событие OnDblClick
		 наступает, если пользователь дважды щёлкнул в области компонента.


		 ![](../../Event_Image.gif)
		 [OnDeleting](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnDeleting.htm)


		 Событие OnDeleting
		 наступает при удалении элемента.


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
		 [OnDropDown](ModForms.chm::/Class/TreeCombo/TreeCombo.OnDropDown.htm)


		 Событие OnDropDown
		 наступает при разворачивании списка компонента.


		 ![](../../Event_Image.gif)
		 [OnEdited](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnEdited.htm)


		 Событие OnEdited наступает
		 при выходе из режима редактирования содержимого поля текущей записи
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnEditing](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnEditing.htm)


		 Событие OnEditing наступает
		 при переходе в режим редактирования содержимого поля текущей записи
		 компонента.


		 ![](../../Event_Image.gif)
		 [OnEnter](ModForms.chm::/Interface/IControl/IControl.OnEnter.htm)


		 Событие OnEnter наступает
		 в момент получения фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExit](ModForms.chm::/Interface/IControl/IControl.OnExit.htm)


		 Событие OnExit наступает
		 в момент потери фокуса компонентом.


		 ![](../../Event_Image.gif)
		 [OnExpanded](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnExpanded.htm)


		 Событие OnExpanded
		 наступает после развертывания иерархии потомков вершины дерева.


		 ![](../../Event_Image.gif)
		 [OnExpanding](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnExpanding.htm)


		 Событие OnExpanding
		 наступает непосредственно перед развертыванием иерархии потомков
		 вершины дерева.


		 ![](../../Event_Image.gif)
		 [OnFilter](ModForms.chm::/Class/TreeCombo/TreeCombo.OnFilter.htm)


		 Событие OnFilter наступает
		 после окончания фильтрации списка элементов.


		 ![](../../Event_Image.gif)
		 [OnFocusedChanged](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnFocusedChanged.htm)


		 Событие OnFocusedChanged
		 наступает при передаче фокуса другому элементу компонента.


		 ![](../../Event_Image.gif)
		 [OnFocusedChanging](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnFocusedChanging.htm)


		 Событие OnFocusedChanging
		 наступает перед передачей фокуса другой вершине компонента.


		 ![](../../Event_Image.gif)
		 [OnGetHint](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnGetHint.htm)


		 Событие OnGetHint наступает
		 при появлении всплывающей подсказки над элементом, над которым
		 остановился курсор мыши.


		 ![](../../Event_Image.gif)
		 [OnGetNodeImage](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnGetNodeImage.htm)


		 Событие OnGetNodeImage
		 используется при определении изображения возле элемента дерева.


		 ![](../../Event_Image.gif)
		 [OnGetNodeStateImage](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnGetNodeStateImage.htm)


		 Событие OnGetNodeStateImage
		 используется при определении изображения состояния возле элемента
		 дерева.


		 ![](../../Event_Image.gif)
		 [OnHover](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnHover.htm)


		 Событие OnHover наступает
		 в момент прохождения курсора мыши над элементом и отметки подчеркиванием
		 этого элемента компонента.


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
		 [OnRollUp](ModForms.chm::/Class/TreeCombo/TreeCombo.OnRollUp.htm)


		 Событие OnRollUp наступает
		 при сворачивании списка компонента.


		 ![](../../Event_Image.gif)
		 [OnSearch](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnSearch.htm)


		 Событие OnSearch наступает
		 после окончания поиска элементов в компоненте.


		 ![](../../Event_Image.gif)
		 [OnSelected](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnSelected.htm)


		 Событие OnSelected
		 наступает после установки отметки у вершины.


		 ![](../../Event_Image.gif)
		 [OnSelecting](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnSelecting.htm)


		 Событие OnSelecting
		 наступает перед попыткой установить отметку у вершины.


		 ![](../../Event_Image.gif)
		 [OnSelectionChanged](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnSelectionChanged.htm)


		 Событие OnSelectionChanged
		 наступает при изменении отметки элементов компонента.


		 ![](../../Event_Image.gif)
		 [OnUnselected](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnUnselected.htm)


		 Событие OnUnselected
		 наступает после снятия отметки у вершины.


		 ![](../../Event_Image.gif)
		 [OnUnselecting](ModForms.chm::/Interface/ITreeControl/ITreeControl.OnUnselecting.htm)


		 Событие OnUnselecting
		 наступает перед попыткой снять отметку у элемента.


		 ![](../../Event_Image.gif)
		 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)


		 Событие OnVScroll наступает
		 при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Дополнительные
 компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
